/**
 * Legal document registry — single source of truth for the policy documents
 * published on the site and the versions recorded against form submissions.
 *
 * Bump `version` whenever a document's substance changes; API routes record
 * the ACTIVE version server-side (client input is never trusted for this).
 *
 * TODO(legal): confirm final copy, retention periods and entity details with
 * counsel before treating these as settled legal documents.
 */
export const LEGAL_DOCS = {
  privacy_policy: {
    id: "privacy_policy",
    title: "Privacy Policy",
    version: "2026-10-03-v1",
    effectiveDate: "October 3, 2026",
    desktopPath: "/privacy-policy",
    mobilePath: "/m/privacy-policy",
  },
  terms_of_service: {
    id: "terms_of_service",
    title: "Terms of Service",
    version: "2026-10-03-v1",
    effectiveDate: "October 3, 2026",
    desktopPath: "/terms",
    mobilePath: "/m/terms",
  },
  cookie_policy: {
    id: "cookie_policy",
    title: "Cookie Policy",
    version: "2026-10-03-v1",
    effectiveDate: "October 3, 2026",
    desktopPath: "/cookies",
    mobilePath: "/m/cookies",
  },
} as const;

export type LegalDocId = keyof typeof LEGAL_DOCS;

/** Public contact point for privacy requests and legal questions. */
export const LEGAL_CONTACT_EMAIL = "dauren.oberhuber@yconnect.info";
