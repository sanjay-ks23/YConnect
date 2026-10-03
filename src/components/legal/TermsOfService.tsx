import Link from "next/link";
import { LegalPage, LegalSection, LegalList } from "./LegalPage";
import { LEGAL_CONTACT_EMAIL, LEGAL_DOCS } from "@/lib/legal";

/**
 * Terms of Service — YConnect.
 *
 * TODO(legal): confirm governing law/jurisdiction wording, liability caps and
 * termination clause with counsel before treating this as final.
 */
export function TermsOfService() {
  return (
    <LegalPage docId="terms_of_service">
      <LegalSection title="Accepting these terms">
        <p>
          These Terms of Service govern your use of the YConnect website and
          matching service. By submitting an application, you confirm that you
          have read and agree to these terms. If you do not agree, please do not
          use the service.
        </p>
      </LegalSection>

      <LegalSection title="Who can use YConnect">
        <LegalList
          items={[
            "You must be at least 18 years old to register for or submit an application to YConnect.",
            "The information you provide must be accurate and kept up to date.",
            "Student accounts and applications are personal — do not submit an application on behalf of someone else.",
          ]}
        />
      </LegalSection>

      <LegalSection title="What YConnect does — and does not do">
        <p>
          YConnect is a talent-matching and introduction service connecting
          engineering students at Indian universities with early-stage European
          startups. To be clear:
        </p>
        <LegalList
          items={[
            "YConnect is not an employer and does not create any employment relationship with you.",
            "YConnect is not a party to the work contract between a startup and a student — those terms are agreed directly between them.",
            "YConnect does not process, hold, or route payments between startups and students.",
            "Submitting an application does not guarantee an interview, match, offer, or engagement.",
            "Students do not pay YConnect for the matching service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Student responsibilities">
        <LegalList
          items={[
            "Provide accurate information in your application and resume.",
            "Ensure you are permitted to take on remote work for an overseas startup under the rules that apply to you (including your university's rules, where applicable).",
            "Any contract, payment terms, taxes, or compliance obligations arising from an engagement are between you and the startup.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Startup responsibilities">
        <LegalList
          items={[
            "Provide accurate role and project requirements.",
            "Handle candidate data shared with you only for evaluating the match, and in line with applicable data-protection law.",
            "Agree contracts, scope, and payment terms directly with the student, and meet the obligations that come with them.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <LegalList
          items={[
            "Submit false, misleading, or plagiarised application material.",
            "Use the service if you are under 18.",
            "Upload files containing malware or content you have no right to share.",
            "Attempt to access other users' data, or interfere with the platform's security or availability.",
            "Scrape, copy, or resell information obtained through the service.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The YConnect name, logo, website design, and content are owned by
          YConnect or its licensors. You may use the site for its intended
          purpose only. You keep ownership of the content you submit (such as
          your resume); by submitting it, you give us permission to use it to
          operate the matching service as described in our{" "}
          <Link href={LEGAL_DOCS.privacy_policy.desktopPath} className="text-vibrant-blue underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          The service is provided &quot;as is&quot;. While we work hard to make
          good matches, we do not warrant that any application will lead to an
          interview, offer, engagement, or any particular outcome, and we are not
          responsible for the acts, omissions, or contract terms of the startups
          or students we introduce.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the extent permitted by applicable law, YConnect is not liable for
          indirect or consequential losses (including lost profits, lost
          opportunities, or lost data) arising from your use of the service, and
          our aggregate liability is limited to the extent the law allows. This
          clause is subject to legal review and does not exclude liability that
          cannot be excluded by law.
        </p>
      </LegalSection>

      <LegalSection title="Suspension and termination">
        <p>
          We may suspend or decline applications or access where we reasonably
          believe these terms have been breached, information provided is
          inaccurate, or use of the service would create risk for other users.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of India. Disputes are subject to
          the jurisdiction of the courts of India, unless applicable law requires
          otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Changes to these terms">
        <p>
          We may update these terms from time to time. The &quot;Last
          updated&quot; date at the top of this page shows which terms apply.
          Continuing to use the service after an update means you accept the
          updated terms.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms:{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-vibrant-blue underline underline-offset-2">
            {LEGAL_CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
