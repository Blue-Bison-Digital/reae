import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - REAE",
  description:
    "Privacy Policy for REAE, operated by Blue Bison Digital LLC. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-500 mb-10">
          <strong>Last Updated: February 13, 2026</strong>
        </p>

        <div className="prose prose-slate max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_li]:text-slate-600 [&_ul]:my-3 [&_ul]:space-y-1 [&_strong]:text-slate-900">
          <h2>Overview</h2>
          <p>
            REAE (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), operated by Blue
            Bison Digital LLC, is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your information when you visit our website
            (getreae.com and subdomains) or use our services.
          </p>

          <h2>Information We Collect</h2>

          <h3>Information You Provide Directly</h3>
          <p>When you interact with our website or services, we may collect:</p>
          <ul className="list-disc pl-6">
            <li>Name (first and last)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name and brokerage affiliation</li>
            <li>
              Property information (address, timeline, details provided in forms or consultations)
            </li>
            <li>Transaction history and preferences</li>
            <li>
              Any other information you choose to provide during calls, forms, or communications
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>When you visit our website, we automatically collect:</p>
          <ul className="list-disc pl-6">
            <li>IP address and device information</li>
            <li>Browser type and operating system</li>
            <li>Pages visited and time spent on pages</li>
            <li>Referring website addresses</li>
            <li>Cookies and similar tracking technologies (see Cookies section below)</li>
          </ul>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6">
            <li>Provide and deliver our appointment generation services</li>
            <li>
              Communicate with you via email, phone, and SMS about your inquiry and our services
            </li>
            <li>Schedule and manage appointments</li>
            <li>Send service updates, reminders, and administrative messages</li>
            <li>Process payments and maintain billing records</li>
            <li>Analyze website usage and improve our services</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and enhance security</li>
          </ul>

          <h2>SMS and Text Messaging</h2>
          <p>By providing your phone number and consenting to receive text messages:</p>
          <ul className="list-disc pl-6">
            <li>
              You agree to receive appointment confirmations, reminders, follow-up messages, and
              service updates via SMS
            </li>
            <li>Message frequency varies based on your engagement with our services</li>
            <li>You can opt out at any time by replying STOP to any message</li>
            <li>You can text HELP for assistance</li>
            <li>Standard message and data rates may apply based on your mobile carrier</li>
            <li>
              We use Twilio and LeadConnector (via GoHighLevel) to deliver SMS messages
            </li>
            <li>
              Your consent is not required to use our services (for promotional messages only)
            </li>
          </ul>

          <h2>Cookies and Tracking Technologies</h2>
          <p>We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6">
            <li>Track website visits and user behavior via Google Analytics 4</li>
            <li>Deliver targeted advertising via Meta Pixel (Facebook/Instagram)</li>
            <li>Remember your preferences and improve user experience</li>
            <li>Measure campaign performance and optimize marketing</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Note that disabling cookies may
            limit your ability to use certain features of our website.
          </p>
          <p>Cookie consent is managed through our landing page provider (Perspective).</p>

          <h2>Third-Party Services</h2>
          <p>We use the following third-party services to operate our business:</p>
          <ul className="list-disc pl-6">
            <li>
              <strong>GoHighLevel</strong> &mdash; CRM, automation, and communication management
            </li>
            <li>
              <strong>Meta (Facebook/Instagram)</strong> &mdash; Advertising and analytics
            </li>
            <li>
              <strong>Google Analytics 4</strong> &mdash; Website analytics
            </li>
            <li>
              <strong>Stripe</strong> &mdash; Payment processing
            </li>
            <li>
              <strong>Twilio/LeadConnector</strong> &mdash; SMS and communication delivery
            </li>
            <li>
              <strong>Perspective</strong> &mdash; Landing pages and forms
            </li>
            <li>
              <strong>Zoom</strong> &mdash; Video consultations
            </li>
            <li>
              <strong>PandaDoc</strong> &mdash; Document management and e-signatures
            </li>
          </ul>
          <p>
            These providers may collect and process your information in accordance with their own
            privacy policies. We share only the minimum information necessary for these services to
            function.
          </p>

          <h2>Data Sharing and Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information.</p>
          <p>We may share your information:</p>
          <ul className="list-disc pl-6">
            <li>With service providers who assist in business operations (listed above)</li>
            <li>When required by law or to comply with legal process</li>
            <li>To protect our rights, property, or safety, or that of our users</li>
            <li>With your explicit consent</li>
            <li>In connection with a business transfer (merger, acquisition, or sale)</li>
          </ul>

          <h2>Data Retention</h2>
          <p>We retain your personal information:</p>
          <ul className="list-disc pl-6">
            <li>Indefinitely, unless you request deletion</li>
            <li>As long as necessary to provide our services</li>
            <li>As required to comply with legal obligations</li>
            <li>Until you withdraw consent or opt out of communications</li>
          </ul>

          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6">
            <li>
              <strong>Access</strong> &mdash; Request a copy of the personal information we hold
              about you
            </li>
            <li>
              <strong>Correction</strong> &mdash; Request correction of inaccurate or incomplete
              information
            </li>
            <li>
              <strong>Deletion</strong> &mdash; Request deletion of your personal information
            </li>
            <li>
              <strong>Opt-Out</strong> &mdash; Unsubscribe from marketing emails or stop receiving
              SMS messages
            </li>
            <li>
              <strong>Data Portability</strong> &mdash; Request your data in a machine-readable
              format
            </li>
          </ul>
          <p>
            To exercise these rights, contact us at{" "}
            <a href="mailto:hello@getreae.com" className="text-blue-600 hover:underline">
              hello@getreae.com
            </a>{" "}
            or{" "}
            <a href="tel:865-409-1887" className="text-blue-600 hover:underline">
              865-409-1887
            </a>
            .
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information, including:
          </p>
          <ul className="list-disc pl-6">
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication</li>
            <li>Regular security assessments</li>
            <li>Secure third-party service providers</li>
          </ul>
          <p>
            However, no method of transmission or storage is 100% secure. We cannot guarantee
            absolute security.
          </p>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our services are not directed to individuals under 18 years of age. We do not knowingly
            collect personal information from children. If we learn we have collected information
            from a child, we will delete it promptly.
          </p>

          <h2>Geographic Scope</h2>
          <p>
            Our services are currently available only in the United States. We do not knowingly
            collect information from individuals outside the U.S.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material
            changes by:
          </p>
          <ul className="list-disc pl-6">
            <li>Posting the updated policy on this page</li>
            <li>Updating the &ldquo;Last Updated&rdquo; date</li>
            <li>Sending notice via email for significant changes</li>
          </ul>
          <p>
            Your continued use of our services after changes constitutes acceptance of the updated
            policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our privacy practices, contact us:
          </p>
          <p>
            <strong>Blue Bison Digital LLC (REAE)</strong>
            <br />
            174 1st St NE, Suite 1
            <br />
            Cleveland, TN 37311
            <br />
            Email:{" "}
            <a href="mailto:hello@getreae.com" className="text-blue-600 hover:underline">
              hello@getreae.com
            </a>
            <br />
            Phone:{" "}
            <a href="tel:865-409-1887" className="text-blue-600 hover:underline">
              865-409-1887
            </a>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
