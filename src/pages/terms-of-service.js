import Link from "next/link";
import LegalPage from "@/components/LegalPage";

const COMPANY = "Scotch Jones Marketing Agency";
const EMAIL = "nick@scotchjones.com";
const SITE = "scotchjones.com";
// Fill in before relying on the Governing Law section.
const GOVERNING_STATE = "[STATE]";

export default function TermsOfService() {
  return (
    <LegalPage
      title="Terms of Service"
      description="The terms that apply when you use the Scotch Jones Marketing Agency website."
      updated="October 9, 2026"
    >
      <p>
        These Terms of Service ("Terms") govern your use of {SITE} and any
        related chat, booking, and communication tools (together, the "Site")
        operated by {COMPANY} ("we," "us," or "our"). By using the Site you
        agree to these Terms. If you do not agree, please do not use the Site.
      </p>

      <h2>Use of the Site</h2>
      <p>
        You may use the Site only for lawful purposes. You agree not to misuse
        it, attempt to gain unauthorized access, interfere with its operation,
        or use it to send spam or harmful content.
      </p>

      <h2>Our services</h2>
      <p>
        Information on the Site is for general purposes and is not a guarantee
        of any result. Marketing results depend on many factors outside our
        control. Any paid engagement with us is governed by a separate written
        agreement, which controls if it conflicts with these Terms. Booking a
        consultation does not create a client relationship or obligate either
        party to enter into one.
      </p>

      <h2>Communications</h2>
      <p>
        If you provide your phone number or email address, you agree that we may
        contact you about your inquiry and our services, including by text
        message where you have opted in. Message frequency varies, and message
        and data rates may apply. Reply STOP to opt out or HELP for help. See
        our <Link href="/privacy-policy">Privacy Policy</Link> for how we handle
        your information.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The Site and its content, including text, graphics, logos, and design,
        are owned by us or our licensors and are protected by intellectual
        property laws. You may not copy, reproduce, or distribute them without
        our written permission.
      </p>

      <h2>Third-party services</h2>
      <p>
        The Site uses third-party tools such as Calendly and LeadConnector /
        HighLevel. Their use is subject to their own terms and privacy
        policies, and we are not responsible for them.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The Site is provided "as is" and "as available," without warranties of
        any kind, express or implied, including warranties of merchantability,
        fitness for a particular purpose, and non-infringement. We do not
        warrant that the Site will be uninterrupted or error-free.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {COMPANY} will not be liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or for any loss of profits or revenue, arising out of your use of the
        Site. Our total liability for any claim relating to the Site will not
        exceed one hundred dollars ($100).
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold us harmless from claims and expenses
        arising from your misuse of the Site or violation of these Terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These Terms are governed by the laws of the State of {GOVERNING_STATE},
        without regard to conflict-of-law rules. Any dispute will be brought in
        the state or federal courts located in that state.
      </p>

      <h2>Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Site
        after changes are posted means you accept the updated Terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these Terms? Email{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
