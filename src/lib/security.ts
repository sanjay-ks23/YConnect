import { NextRequest, NextResponse } from "next/server";

const HTML_ESCAPE_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

export function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char] ?? char);
}

export const ALLOWED_TABLES = ["student_applications", "startup_applications", "contact_messages"] as const;
export type AllowedTable = (typeof ALLOWED_TABLES)[number];

// Must match the status CHECK constraints in supabase/schema.sql exactly —
// accepting a value the DB rejects turns into a 500, and rejecting a value
// the UI offers turns into a 400 either way.
const TABLE_STATUSES: Record<AllowedTable, readonly string[]> = {
  student_applications: ["pending", "reviewed", "shortlisted", "rejected", "matched"],
  startup_applications: ["pending", "reviewed", "shortlisted", "rejected", "matched"],
  contact_messages: ["pending", "reviewed", "resolved"],
};

export function isValidStatusForTable(table: string, status: string): boolean {
  const allowed = TABLE_STATUSES[table as AllowedTable];
  return !!allowed && allowed.includes(status);
}

export function isValidUuid(id: string): boolean {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export function sanitizeStoragePath(path: string): boolean {
  if (!path || path.length > 500) return false;
  if (path.includes("..")) return false;
  if (path.startsWith("/")) return false;
  if (!/^student_applications\/[a-zA-Z0-9._-]+$/.test(path)) return false;
  return true;
}

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;

export function checkRateLimit(req: NextRequest): NextResponse | null {
  // The LAST x-forwarded-for entry is the one appended by the edge (Vercel)
  // and is not client-spoofable; the first entries can be forged by the caller.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",").pop()?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  const now = Date.now();

  // Bound the map — it would otherwise grow forever on a long-lived instance.
  if (rateLimitMap.size > 5000) {
    for (const [key, value] of rateLimitMap) {
      if (now > value.resetTime) rateLimitMap.delete(key);
    }
    if (rateLimitMap.size > 5000) rateLimitMap.clear();
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return null;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX_REQUESTS) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429, headers: { "Retry-After": "60" } }
    );
  }

  return null;
}

const MAX_JSON_BODY_BYTES = 100_000;

export async function parseJsonBody(req: NextRequest): Promise<{ data: unknown | null; error: NextResponse | null }> {
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength, 10) > MAX_JSON_BODY_BYTES) {
    return {
      data: null,
      error: NextResponse.json({ error: "Request body too large" }, { status: 413 }),
    };
  }

  try {
    const text = await req.text();
    if (text.length > MAX_JSON_BODY_BYTES) {
      return {
        data: null,
        error: NextResponse.json({ error: "Request body too large" }, { status: 413 }),
      };
    }
    return { data: JSON.parse(text), error: null };
  } catch {
    return {
      data: null,
      error: NextResponse.json({ error: "Invalid JSON body" }, { status: 400 }),
    };
  }
}
