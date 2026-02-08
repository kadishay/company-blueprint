export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: February 8, 2026
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information you provide directly to us when using
              InvoiceAvenger:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Account Information:</strong> Email address for account
                creation and authentication
              </li>
              <li>
                <strong>Invoice Details:</strong> Invoice amount, due date,
                description, and invoice number
              </li>
              <li>
                <strong>Client Information:</strong> Your client's name and
                email address
              </li>
              <li>
                <strong>Payment Information:</strong> Processed by Stripe (we
                never store credit card numbers)
              </li>
              <li>
                <strong>Usage Data:</strong> Analytics and usage patterns via
                Vercel Analytics
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Send automated email escalation sequences to your clients</li>
              <li>Process your payment for our services</li>
              <li>
                Track campaign progress and display it in your dashboard
              </li>
              <li>
                Improve our service and understand how users interact with our
                platform
              </li>
              <li>
                Communicate with you about your account and our services
              </li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We share your information with third-party service providers who
              help us operate our platform:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Stripe:</strong> Payment processing -{" "}
                <a
                  href="https://stripe.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson-400 hover:underline"
                >
                  Stripe Privacy Policy
                </a>
              </li>
              <li>
                <strong>Resend:</strong> Email delivery service -{" "}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson-400 hover:underline"
                >
                  Resend Privacy Policy
                </a>
              </li>
              <li>
                <strong>Supabase:</strong> Database and authentication -{" "}
                <a
                  href="https://supabase.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson-400 hover:underline"
                >
                  Supabase Privacy Policy
                </a>
              </li>
              <li>
                <strong>Vercel:</strong> Hosting and analytics -{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson-400 hover:underline"
                >
                  Vercel Privacy Policy
                </a>
              </li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with
              third parties for their marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Data Security
            </h2>
            <p>
              We take reasonable measures to protect your information from
              unauthorized access, use, or disclosure. Your data is encrypted in
              transit and at rest. We use industry-standard security practices
              including Row Level Security (RLS) in our database to ensure users
              can only access their own data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Access:</strong> Request a copy of the personal data we
                hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate
                data
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and
                associated data
              </li>
              <li>
                <strong>Opt-out:</strong> Unsubscribe from marketing emails
                (campaigns to your clients will continue unless cancelled)
              </li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@invoiceavenger.com"
                className="text-crimson-400 hover:underline"
              >
                privacy@invoiceavenger.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain your information for as long as your account is active or
              as needed to provide you services. If you request account deletion,
              we will delete your data within 30 days, except where we are
              required to retain it for legal or regulatory purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. International Data Transfers
            </h2>
            <p>
              Your information may be transferred to and processed in countries
              other than your own. We ensure appropriate safeguards are in place
              to protect your data in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Children's Privacy
            </h2>
            <p>
              Our service is not directed to individuals under the age of 18. We
              do not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Contact Us
            </h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              at:
            </p>
            <p className="mt-4">
              <a
                href="mailto:privacy@invoiceavenger.com"
                className="text-crimson-400 hover:underline"
              >
                privacy@invoiceavenger.com
              </a>
            </p>
          </section>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-sm text-gray-500">
              <strong>GDPR Compliance (EU Users):</strong> Under the General Data
              Protection Regulation, you have additional rights including data
              portability and the right to lodge a complaint with a supervisory
              authority.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              <strong>CCPA Compliance (California Users):</strong> Under the
              California Consumer Privacy Act, you have the right to know what
              personal information is collected, request deletion, and opt-out of
              the sale of personal information (note: we do not sell your
              information).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
