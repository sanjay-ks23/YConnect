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

const ALLOWED_STATUSES = ["pending", "reviewed", "accepted", "rejected", "archived"] as const;
export type AllowedStatus = (typeof ALLOWED_STATUSES)[number];

export function isValidStatus(status: string): status is AllowedStatus {
  return (ALLOWED_STATUSES as readonly string[]).includes(status);
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
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
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
