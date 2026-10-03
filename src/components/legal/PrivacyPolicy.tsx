import Link from "next/link";
import { LegalPage, LegalSection, LegalList } from "./LegalPage";
import { LEGAL_CONTACT_EMAIL, LEGAL_DOCS } from "@/lib/legal";

/**
 * Privacy Policy — YConnect.
 *
 * TODO(legal): before treating this as final, confirm with counsel:
 *  - exact registered entity name/type and whether it belongs on this page
 *  - retention periods below are expressed as criteria, not fixed periods —
 *    decide and document concrete periods for each record type
 *  - GDPR Art. 27 EU-representative assessment (YConnect is India-registered
 *    but offers services to individuals in the EU)
 *  - current commencement status of India's DPDP Act 2023 / DPDP Rules 2025
 *    (phased implementation — described below without assuming full force)
 *  - where candidate profiles/resumes are shared (workflow-gated or not)
 */
export function PrivacyPolicy() {
  return (
    <LegalPage docId="privacy_policy">
      <LegalSection title="Who we are">
        <p>
          YConnect is a talent-matching platform registered in India. We connect
          engineering students at Indian universities with early-stage startups in
          Europe for paid remote work.
        </p>
        <p>
          For the purposes of applicable data-protection law, YConnect is the
          entity that determines why and how the personal information described in
          this policy is processed (the &quot;data controller&quot; / &quot;data
          fiduciary&quot;).
        </p>
        <p>
          You can reach us about anything in this policy at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-vibrant-blue underline underline-offset-2">
            {LEGAL_CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="What YConnect does — and does not do">
        <p>
          YConnect provides a matching and introduction service. We help startups
          tell us what they need, and we help students tell us what they can do.
          When we think there is a fit, we introduce the two sides.
        </p>
        <LegalList
          items={[
            "YConnect does not employ the students who use the platform.",
            "YConnect does not enter into work contracts between startups and students — the startup and the student contract with each other directly.",
            "YConnect does not process or hold payments between startups and students.",
            "Students never pay YConnect to apply or to be matched.",
          ]}
        />
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>We collect only the information our forms ask for:</p>
        <LegalList
          items={[
            <span key="s"><strong>Student applications:</strong> name, email, university, degree, selected roles/skills, availability, experience description, optional portfolio link, and your resume/CV (PDF).</span>,
            <span key="st"><strong>Startup applications:</strong> company name, country, contact person name, business email, preferred engagement duration and budget range, roles needed, and a project description.</span>,
            <span key="c"><strong>Contact form:</strong> name, email, the type of enquiry, subject, and your message.</span>,
            <span key="t"><strong>Technical data:</strong> standard server logs (such as IP address used for rate-limiting and abuse prevention) generated when you use the site.</span>,
          ]}
        />
        <p>
          We do not collect your date of birth, government IDs, payment details,
          or any special-category data through this site.
        </p>
      </LegalSection>

      <LegalSection title="How we use your information">
        <LegalList
          items={[
            "Reviewing applications and assessing whether a candidate and a startup are a good fit.",
            "Introducing shortlisted students to relevant European startups.",
            "Communicating with you about your application, enquiry, or match.",
            "Operating, securing, and improving the platform (including abuse prevention).",
            "Meeting legal and regulatory obligations that apply to us.",
          ]}
        />
      </LegalSection>

      <LegalSection title="When we share information">
        <p>
          <strong>Sharing with startups:</strong> the purpose of a student
          application is to be matched. When you apply and are shortlisted or
          matched, the information in your application — which may include your
          resume/CV — may be shared with the relevant European startup(s) so they
          can evaluate and, if both sides agree, contract with you directly.
          Startups that receive your information are responsible for how they use
          it under their own obligations.
        </p>
        <p>
          <strong>Service providers:</strong> we use a small number of providers
          to run the platform, including Supabase (database and file storage) and
          Google Workspace/Gmail (application notification emails). Providers may
          process data in countries other than your own.
        </p>
        <p>
          We do not sell your personal information, and we do not share it with
          advertisers.
        </p>
      </LegalSection>

      <LegalSection title="International transfers">
        <p>
          Because our service spans India and Europe, your information may be
          transferred to, stored in, or processed in countries outside your own —
          including when student application information is shared with European
          startups. Where required by applicable law, we rely on appropriate
          safeguards for such transfers.
        </p>
      </LegalSection>

      <LegalSection title="How long we keep information">
        <p>
          We keep personal information only for as long as needed for the
          purposes described above — for example, while an application is active
          or under review, or while a record is needed to operate, secure, or
          account for the service. When information is no longer needed, we
          delete or anonymise it. You may also ask us to delete it earlier (see
          &quot;Your rights&quot; below). Resumes stored with an application are
          deleted when the application is deleted.
        </p>
      </LegalSection>

      <LegalSection title="Your rights and choices">
        <p>
          Depending on the law that applies to you, you may have some or all of
          the following rights over your personal information:
        </p>
        <LegalList
          items={[
            "Access the personal information we hold about you.",
            "Correct inaccurate or incomplete information.",
            "Ask us to erase your information.",
            "Object to or restrict certain processing.",
            "Withdraw consent you have given (which does not affect processing already carried out).",
            "Receive a copy of information you provided in a usable format.",
            "Raise a concern with a relevant data-protection authority or board.",
          ]}
        />
        <p>
          To exercise any of these, email{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-vibrant-blue underline underline-offset-2">
            {LEGAL_CONTACT_EMAIL}
          </a>
          . We will review and respond to genuine requests within a reasonable
          period. Deleting your application data also deletes the resume stored
          with it.
        </p>
      </LegalSection>

      <LegalSection title="India — DPDP Act 2023">
        <p>
          India&apos;s Digital Personal Data Protection Act, 2023 (and its rules)
          is being brought into force in phases. To the extent it applies to our
          processing of your data, we treat you as a Data Principal and aim to:
        </p>
        <LegalList
          items={[
            "Give you a clear notice of what we collect and why before asking for your consent — which is why each application form summarises the data collected and its purpose next to the consent checkbox.",
            "Let you withdraw consent as easily as you gave it — email us and we will stop the relevant processing and delete your data where required.",
            "Give you access, correction, erasure, and grievance-redressal rights as described above.",
          ]}
        />
        <p>
          For grievances under this framework, contact us at{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-vibrant-blue underline underline-offset-2">
            {LEGAL_CONTACT_EMAIL}
          </a>
          . If you are not satisfied with our response, you may be able to
          escalate to the Data Protection Board of India once it is fully
          operational.
        </p>
      </LegalSection>

      <LegalSection title="European Economic Area, UK and Switzerland — GDPR">
        <p>
          If you are in the EEA, UK or Switzerland, the GDPR or equivalent law
          may apply to how we handle your personal data — for example, if you are
          the contact person for a European startup submitting an application.
          Where it applies, we rely on an appropriate lawful basis for each use
          (such as your consent for optional processing, our legitimate interest
          in operating and securing the platform, and steps needed to respond to
          your requests), and you may exercise the GDPR rights listed in
          &quot;Your rights and choices&quot; above, including complaining to your
          local supervisory authority.
        </p>
      </LegalSection>

      <LegalSection title="Age requirement">
        <p>
          YConnect is intended for people aged 18 or older. Every student
          applicant must actively confirm they are at least 18 before submitting.
          If we learn that an application was submitted by someone under 18, we
          will stop processing it and assess deleting the related information,
          including any uploaded resume.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          Our public site does not use analytics, advertising, or tracking
          cookies. Only strictly necessary cookies are used where required to
          operate the site (for example, admin sign-in sessions). See our{" "}
          <Link href={LEGAL_DOCS.cookie_policy.desktopPath} className="text-vibrant-blue underline underline-offset-2">
            Cookie Policy
          </Link>
          .
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          If we change this policy, we will update the &quot;Last updated&quot;
          date and document version shown at the top of this page. For
          significant changes affecting how we use your information, we may also
          seek a new confirmation the next time you submit a form.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions, requests, or concerns about this policy or your data:{" "}
          <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-vibrant-blue underline underline-offset-2">
            {LEGAL_CONTACT_EMAIL}
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
