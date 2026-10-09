import LegalPage from "@/components/LegalPage";

const COMPANY = "Scotch Jones Marketing Agency";
const EMAIL = "nick@scotchjones.com";
const SITE = "scotchjones.com";

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How Scotch Jones Marketing Agency collects, uses, and protects your information."
      updated="October 9, 2026"
    >
      <p>
        This Privacy Policy explains how {COMPANY} ("we," "us," or "our")
        collects, uses, and shares information when you visit {SITE}, use our
        chat widget, book a call, or otherwise communicate with us.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us:</strong> your name, email address,
          phone number, business name, and anything you write in the chat
          widget, a form, an email, or a text message.
        </li>
        <li>
          <strong>Booking information:</strong> when you schedule a call, the
          details you enter (such as name, email, and time) are collected by our
          scheduling provider, Calendly.
        </li>
        <li>
          <strong>Technical information:</strong> basic data sent by your
          browser or device, such as IP address, browser type, pages visited,
          and the date and time of your visit, collected through our hosting
          provider's logs and the cookies or similar technologies used by the
          services described below.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your questions and requests.</li>
        <li>To schedule and hold consultations.</li>
        <li>To provide, manage, and improve our marketing services.</li>
        <li>To send you messages about our services, if you have agreed to receive them.</li>
        <li>To keep our website secure and to comply with legal obligations.</li>
      </ul>

      <h2>Text messages and email</h2>
      <p>
        If you give us your mobile number and agree to receive text messages,
        we may send you messages about your inquiry, appointment reminders, and
        updates about our services. Message frequency varies. Message and data
        rates may apply. You can reply STOP at any time to opt out, or HELP for
        help. Consent to receive text messages is not a condition of purchasing
        any service. We do not sell or share your mobile number or text
        messaging opt-in data with third parties or affiliates for their own
        marketing or promotional purposes. You can unsubscribe from marketing
        emails using the link in any email.
      </p>

      <h2>Who we share information with</h2>
      <p>
        We share information only with service providers that help us run our
        business, and only as needed for them to do so. These include:
      </p>
      <ul>
        <li>LeadConnector / HighLevel, which powers our chat widget, CRM, text messaging, and email.</li>
        <li>Calendly, which handles call scheduling.</li>
        <li>Vercel, which hosts this website.</li>
      </ul>
      <p>
        We may also disclose information if required by law, to protect our
        rights or the safety of others, or as part of a sale or merger of our
        business. We do not sell your personal information.
      </p>

      <h2>Cookies</h2>
      <p>
        Our website and the services above may use cookies or similar
        technologies to make the site and chat widget work and to understand
        how they are used. You can control cookies through your browser
        settings, though some features may not work if you block them.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep information for as long as needed to provide our services,
        meet legal and accounting requirements, and resolve disputes, and then
        delete or anonymize it.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable safeguards to protect your information, but no
        method of transmission or storage is completely secure.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You may ask us to access, correct, or delete the personal information
        we hold about you, or to stop contacting you, by emailing{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Depending on where you live
        (for example, California), you may have additional rights under local
        privacy laws, and we will honor valid requests as those laws require.
      </p>

      <h2>Children</h2>
      <p>
        Our website and services are for businesses and are not directed to
        children under 13. We do not knowingly collect information from them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The "Last updated" date at
        the top shows when it was last changed.
      </p>

      <h2>Contact us</h2>
      <p>
        {COMPANY}
        <br />
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
    </LegalPage>
  );
}
