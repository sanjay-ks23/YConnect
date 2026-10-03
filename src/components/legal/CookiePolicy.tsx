import { LegalPage, LegalSection, LegalList } from "./LegalPage";
import { LEGAL_CONTACT_EMAIL } from "@/lib/legal";

/**
 * Cookie Policy — YConnect.
 *
 * Audit result (Oct 2026): the public site sets no analytics, advertising, or
 * tracking cookies. The only cookies present are strictly-necessary Supabase
 * session cookies used for the /admin sign-in area. No cookie banner is
 * required for strictly-necessary cookies.
 */
export function CookiePolicy() {
  return (
    <LegalPage docId="cookie_policy">
      <LegalSection title="What cookies we use">
        <p>
          YConnect&apos;s public pages do not set analytics, advertising, or
          tracking cookies, and we do not use third-party tracking pixels.
        </p>
        <p>
          The only cookies used are <strong>strictly necessary</strong> for the
          site to function — specifically, authentication session cookies for
          the internal admin area (sign-in sessions only). These do not track
          you across the web and cannot be used to advertise to you.
        </p>
      </LegalSection>

      <LegalSection title="Strictly necessary cookies">
        <LegalList
          items={[
            "Admin session cookies — keep authorised team members signed in to the internal dashboard.",
            "They are set only when an authorised team member signs in, and are not used on the public marketing pages.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Managing cookies">
        <p>
          You can block or delete cookies in your browser settings at any time.
          Blocking the admin session cookies only affects the ability to stay
          signed in to the internal dashboard — it does not affect how the
          public site works for you.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If we ever introduce non-essential cookies or similar technologies, we
          will update this page and, where required, ask for your consent before
          enabling them.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about cookies or similar technologies on this site:{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-vibrant-blue underline underline-offset-2">
            {LEGAL_CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
