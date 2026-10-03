import type { ReactNode } from "react";
import type { LegalDocId } from "@/lib/legal";
import { LEGAL_DOCS } from "@/lib/legal";

interface LegalPageProps {
  docId: LegalDocId;
  children: ReactNode;
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl sm:text-2xl font-display font-medium text-[#001738] tracking-tight">
        {title}
      </h2>
      <div className="space-y-3 text-[15px] sm:text-base leading-relaxed text-[#001738]/70">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc pl-5 space-y-1.5">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * Shared shell for legal documents. Rendered identically on desktop and
 * mobile routes — only the surrounding navbar/footer differs via AppShell.
 */
export function LegalPage({ docId, children }: LegalPageProps) {
  const doc = LEGAL_DOCS[docId];

  return (
    <div className="bg-white">
      <section className="pt-36 pb-16 sm:pt-44 sm:pb-20 bg-gradient-to-b from-vibrant-blue/10 via-white to-white">
        <div className="container-superhi">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-medium text-[#001738] tracking-tight mb-4">
              {doc.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#001738]/50">
              <span>Last updated: {doc.effectiveDate}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container-superhi">
          <div className="max-w-3xl mx-auto space-y-10">{children}</div>
        </div>
      </section>
    </div>
  );
}
