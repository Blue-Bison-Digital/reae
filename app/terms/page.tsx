import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service - REAE",
  description:
    "Terms of Service for REAE, operated by Blue Bison Digital LLC. Review the terms governing our appointment generation services.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-500 mb-10">
          <strong>Last Updated: February 13, 2026</strong>
        </p>

        <div className="prose prose-slate max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:text-slate-600 [&_p]:leading-relaxed [&_li]:text-slate-600 [&_ul]:my-3 [&_ul]:space-y-1 [&_strong]:text-slate-900">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing or using the REAE website (getreae.com and subdomains) or services, you
            agree to be bound by these Terms of Service. REAE is operated by Blue Bison Digital LLC
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; &ldquo;REAE&rdquo;). If you
            do not agree to these terms, do not use our services.
          </p>

          <h2>Services Provided</h2>
          <p>
            REAE provides done-for-you appointment generation services for real estate
            professionals, including but not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li>Advertising campaign management (Meta/Facebook/Instagram)</li>
            <li>Landing page and funnel creation</li>
            <li>Lead qualification systems</li>
            <li>Appointment scheduling and coordination</li>
            <li>CRM setup and automation</li>
            <li>SMS and email communication management</li>
          </ul>

          <h2>Eligibility</h2>
          <p>Our services are available only to:</p>
          <ul className="list-disc pl-6">
            <li>Licensed real estate professionals in the United States</li>
            <li>Individuals or businesses 18 years of age or older</li>
            <li>Users who can form legally binding contracts under applicable law</li>
          </ul>

          <h2>Service Terms and Pricing</h2>

          <h3>Pricing and Rate Changes</h3>
          <p>
            <strong>Founding Member Pricing (Beta Program Clients):</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Founding members receive a lifetime $500/month credit off any REAE service tier</li>
            <li>This credit applies to your selected service tier at the time of billing</li>
            <li>Credit remains valid for the lifetime of continuously active service</li>
            <li>
              <strong>Credit is forfeited upon service cancellation</strong> and cannot be reinstated
            </li>
          </ul>
          <p>
            <strong>Standard Client Pricing:</strong>
          </p>
          <ul className="list-disc pl-6">
            <li>Current pricing available at getreae.com or upon request</li>
            <li>Multiple service tiers may be offered</li>
            <li>
              We reserve the right to modify pricing for any service tier with 60 days advance
              written notice
            </li>
            <li>
              Founding members receive their $500/month credit regardless of tier or rate changes
            </li>
            <li>
              You may cancel service if you do not agree to new pricing (standard cancellation terms
              apply)
            </li>
          </ul>

          <h3>Beta Program Terms</h3>
          <ul className="list-disc pl-6">
            <li>
              <strong>Initial Investment:</strong> $1,500 for 60-day beta period, then $1,500/month
              ongoing (standard rate $2,000/month with $500 founding member credit)
            </li>
            <li>
              <strong>Ad Spend Requirement:</strong> Minimum $500/month paid directly to Meta by
              client
            </li>
            <li>
              <strong>Guarantee:</strong> 5 qualified seller appointments within 60 days, or we
              provide an additional 30 days of service at no charge (see Guarantee section below)
            </li>
          </ul>

          <h3>Payment Terms</h3>
          <ul className="list-disc pl-6">
            <li>
              All fees are non-refundable except as specifically stated in the Guarantee section
            </li>
            <li>Monthly recurring fees are charged on the same day each month</li>
            <li>Client is responsible for maintaining active payment method on file</li>
            <li>Failed payments may result in service suspension or termination</li>
            <li>
              Ad spend is paid separately by client directly to Meta (not through REAE)
            </li>
          </ul>

          <h2>Text Messaging Terms</h2>
          <p>
            By providing your mobile phone number and consenting to receive text messages, you agree
            to the following:
          </p>

          <h3>Types of Messages</h3>
          <p>You may receive the following types of SMS messages from REAE:</p>
          <ul className="list-disc pl-6">
            <li>Appointment confirmations and reminders</li>
            <li>Service updates and notifications</li>
            <li>Follow-up messages related to your inquiry</li>
            <li>Administrative messages related to your account</li>
            <li>Promotional messages about our services (if you have opted in)</li>
          </ul>

          <h3>Opt-Out Instructions</h3>
          <p>You can opt out of receiving text messages at any time by:</p>
          <ul className="list-disc pl-6">
            <li>
              Replying <strong>STOP</strong> to any message
            </li>
            <li>
              Replying <strong>UNSUBSCRIBE</strong> to any message
            </li>
            <li>
              Contacting us at{" "}
              <a href="mailto:hello@getreae.com" className="text-blue-600 hover:underline">
                hello@getreae.com
              </a>
            </li>
          </ul>
          <p>
            After opting out, you will receive one final confirmation message. You may continue to
            receive transactional messages related to active appointments or services.
          </p>
          <p>
            For help or support, reply <strong>HELP</strong> to any message or contact{" "}
            <a href="mailto:hello@getreae.com" className="text-blue-600 hover:underline">
              hello@getreae.com
            </a>
            .
          </p>

          <h3>Message and Data Rates</h3>
          <p>
            Message frequency varies based on your interaction with our services. Standard message
            and data rates may apply based on your mobile carrier&apos;s plan. Check with your
            carrier for details on your messaging plan.
          </p>

          <h3>Carrier Liability</h3>
          <p>
            Mobile carriers are not liable for delayed or undelivered messages. We are not
            responsible for carrier-related issues, network outages, or limitations that may prevent
            message delivery.
          </p>

          <h3>Mobile Number Changes</h3>
          <p>
            If you change your mobile phone number, you must notify us immediately to update your
            contact information and avoid messages being sent to a new user of your previous number.
          </p>

          <h2>Service Guarantee</h2>
          <p>For Beta Program clients only:</p>
          <ul className="list-disc pl-6">
            <li>
              If you do not receive 5 qualified seller appointments within the initial 60-day
              period, we will extend your service for an additional 30 days at no charge
            </li>
            <li>
              &ldquo;Qualified appointment&rdquo; is defined as a homeowner interested in selling
              who completes the qualification quiz and books a consultation call
            </li>
            <li>
              This guarantee is void if client fails to meet their obligations (see Client
              Obligations section)
            </li>
            <li>Extension of service is the sole remedy; no refunds will be issued</li>
            <li>Guarantee applies only to the initial 60-day beta period</li>
          </ul>

          <h2>Client Obligations</h2>
          <p>To receive services, you agree to:</p>
          <ul className="list-disc pl-6">
            <li>Maintain minimum $500/month ad spend paid directly to Meta</li>
            <li>
              Provide required setup assets (photos, logos, market information, etc.) within 48
              hours of request
            </li>
            <li>
              Respond to booked appointments or provide 24-hour advance notice for
              cancellations/rescheduling
            </li>
            <li>Maintain an active Meta Ads account in good standing</li>
            <li>Comply with all applicable laws, including fair housing regulations</li>
            <li>Treat leads, prospects, and REAE staff with professionalism and respect</li>
            <li>Not engage in discriminatory, fraudulent, or deceptive practices</li>
            <li>Provide accurate business information and maintain proper licensing</li>
          </ul>

          <h3>Failure to Meet Obligations</h3>
          <p>If you fail to meet these obligations, we reserve the right to:</p>
          <ul className="list-disc pl-6">
            <li>Suspend services until obligations are met</li>
            <li>Terminate your account (see Termination section)</li>
            <li>Void any service guarantees</li>
          </ul>

          <h2>Cancellation and Refunds</h2>

          <h3>Client-Initiated Cancellation</h3>
          <ul className="list-disc pl-6">
            <li>
              You may cancel service at any time with 30 days written notice to hello@getreae.com
            </li>
            <li>Service will continue through the end of your current billing period</li>
            <li>No refunds or prorations will be issued for unused time</li>
            <li>All recurring charges will cease at the end of the notice period</li>
            <li>Upon cancellation, we will export and provide your lead data</li>
            <li>
              <strong>
                Founding members forfeit their $500/month lifetime credit upon cancellation
              </strong>
            </li>
          </ul>

          <h3>Company-Initiated Suspension or Termination</h3>
          <p>
            We reserve the right to suspend or terminate your service immediately if you:
          </p>
          <ul className="list-disc pl-6">
            <li>Violate these Terms of Service</li>
            <li>Fail to maintain payment obligations</li>
            <li>Engage in unethical, illegal, or discriminatory practices</li>
            <li>Lose your real estate license or operate without proper licensing</li>
            <li>
              Have your Meta Ads account suspended or banned for policy violations
            </li>
            <li>
              Demonstrate abusive, hostile, or inappropriate conduct toward REAE staff or leads
            </li>
            <li>Misrepresent your business or credentials</li>
            <li>
              Use our systems in a manner that harms REAE&apos;s reputation or operations
            </li>
          </ul>
          <p>
            In cases of termination for cause, no refunds will be issued and all access to systems
            will be immediately revoked.
          </p>

          <h2>Intellectual Property Rights</h2>

          <h3>REAE Ownership</h3>
          <p>
            All materials, systems, processes, creative assets, code, automations, templates, and
            intellectual property created or provided by REAE remain the exclusive property of Blue
            Bison Digital LLC, including but not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li>Ad creative and copy</li>
            <li>Landing pages and funnels</li>
            <li>Email and SMS templates</li>
            <li>CRM workflows and automations</li>
            <li>Training materials and documentation</li>
            <li>Proprietary methodologies and processes</li>
          </ul>

          <h3>Client License</h3>
          <p>
            You are granted a limited, non-exclusive, non-transferable license to use REAE systems
            solely for your own real estate business during the active service term. This license
            does not grant you the right to:
          </p>
          <ul className="list-disc pl-6">
            <li>Resell, redistribute, or share our systems with others</li>
            <li>Reproduce or reverse-engineer our methods or technology</li>
            <li>Use our materials after service termination</li>
            <li>Claim ownership of REAE intellectual property</li>
          </ul>

          <h3>License Termination</h3>
          <p>
            Upon service termination or cancellation, your license to use REAE systems immediately
            expires. You must cease all use of our materials, templates, and processes.
          </p>

          <h3>Client Content</h3>
          <p>
            You retain ownership of any content you provide (photos, logos, business information).
            By providing this content, you grant REAE a license to use it for the purpose of
            delivering services to you.
          </p>

          <h2>Data and Privacy</h2>
          <p>
            Your use of our services is subject to our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            . By using our services, you consent to our collection and use of your information as
            described in the Privacy Policy.
          </p>

          <h3>Data Upon Cancellation</h3>
          <p>When service ends, we will:</p>
          <ul className="list-disc pl-6">
            <li>Export your lead data and contact information</li>
            <li>Provide data in a standard format (CSV or similar)</li>
            <li>Retain data in accordance with our Privacy Policy and legal obligations</li>
            <li>Cease active use of your business information in campaigns</li>
          </ul>

          <h2>Third-Party Services</h2>
          <p>
            Our services integrate with third-party platforms including Meta (Facebook/Instagram),
            Google, GoHighLevel, Stripe, Twilio, and others. Your use of these platforms is subject
            to their respective terms of service. We are not responsible for:
          </p>
          <ul className="list-disc pl-6">
            <li>Third-party service outages or disruptions</li>
            <li>Changes to third-party platform policies</li>
            <li>Third-party platform account suspensions or bans</li>
            <li>Additional fees charged by third-party platforms</li>
          </ul>
          <p>
            You are responsible for maintaining accounts in good standing with all required
            third-party platforms.
          </p>

          <h2>Service Availability and Performance</h2>

          <h3>No Uptime Guarantee</h3>
          <p>
            While we make reasonable efforts to provide reliable service, we do not guarantee:
          </p>
          <ul className="list-disc pl-6">
            <li>Uninterrupted or error-free service</li>
            <li>Specific results beyond stated guarantees</li>
            <li>Compatibility with all devices or platforms</li>
            <li>Freedom from bugs or technical issues</li>
          </ul>

          <h3>Service Modifications</h3>
          <p>We reserve the right to:</p>
          <ul className="list-disc pl-6">
            <li>Modify, suspend, or discontinue any aspect of our services</li>
            <li>Update pricing for new clients (existing clients receive 60 days notice)</li>
            <li>Change features, tools, or integrations</li>
            <li>Update these Terms of Service (with notice to clients)</li>
          </ul>

          <h2>Limitation of Liability</h2>
          <p>To the maximum extent permitted by law:</p>
          <ul className="list-disc pl-6">
            <li>
              REAE&apos;s total liability for any claim arising from services shall not exceed the
              amount you paid in the preceding 3 months
            </li>
            <li>
              We are not liable for indirect, incidental, special, consequential, or punitive
              damages
            </li>
            <li>
              We are not liable for lost profits, lost revenue, lost opportunities, or lost business
            </li>
            <li>
              We are not responsible for the quality or outcomes of appointments generated
            </li>
            <li>
              We are not responsible for your interactions with leads or business decisions
            </li>
          </ul>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless Blue Bison Digital LLC, REAE, and our employees
            from any claims, damages, losses, or expenses (including legal fees) arising from:
          </p>
          <ul className="list-disc pl-6">
            <li>Your violation of these Terms of Service</li>
            <li>Your violation of any laws or regulations</li>
            <li>Your interactions with leads or clients</li>
            <li>Your business practices or conduct</li>
            <li>Content you provide to us</li>
            <li>Your violation of third-party rights</li>
          </ul>

          <h2>Governing Law and Dispute Resolution</h2>
          <p>
            These Terms of Service are governed by the laws of the State of Tennessee, without
            regard to conflict of law principles.
          </p>
          <p>
            Any disputes arising from these terms or our services shall be resolved in the state or
            federal courts located in Bradley County, Tennessee. You consent to the exclusive
            jurisdiction of these courts.
          </p>

          <h2>Warranties Disclaimer</h2>
          <p className="uppercase">
            Our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without
            warranties of any kind, either express or implied, including but not limited to
            warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p>We do not warrant that:</p>
          <ul className="list-disc pl-6">
            <li>Services will meet your specific requirements</li>
            <li>Services will achieve any particular results</li>
            <li>Any appointments generated will result in closed transactions</li>
            <li>Services will be uninterrupted, secure, or error-free</li>
          </ul>

          <h2>Entire Agreement</h2>
          <p>
            These Terms of Service, together with our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            and any executed service agreement, constitute the entire agreement between you and REAE
            regarding our services.
          </p>

          <h2>Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid, that provision
            will be limited or eliminated to the minimum extent necessary, and the remaining
            provisions will remain in full force and effect.
          </p>

          <h2>Waiver</h2>
          <p>
            Our failure to enforce any right or provision of these Terms will not be considered a
            waiver of those rights.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. We will notify you of material
            changes by:
          </p>
          <ul className="list-disc pl-6">
            <li>Posting updated terms on this page</li>
            <li>Updating the &ldquo;Last Updated&rdquo; date</li>
            <li>Sending email notice for significant changes</li>
          </ul>
          <p>
            Your continued use of services after changes constitutes acceptance of updated terms.
          </p>

          <h2>Contact Information</h2>
          <p>Questions about these Terms of Service? Contact us:</p>
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

          <h2>Acknowledgment</h2>
          <p>
            By using our services, you acknowledge that you have read, understood, and agree to be
            bound by these Terms of Service.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
