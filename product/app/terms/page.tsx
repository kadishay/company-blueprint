export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-12">
          Last updated: February 8, 2026
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using InvoiceAvenger ("the Service"), you accept
              and agree to be bound by these Terms of Service. If you do not
              agree to these terms, please do not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Service Description
            </h2>
            <p className="mb-4">
              InvoiceAvenger is an automated email escalation service designed to
              help you recover unpaid invoices. The Service:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Sends a sequence of professionally-worded emails to your clients
                on your behalf
              </li>
              <li>
                Follows a 3-stage escalation timeline (Day 0, Day 5, Day 10)
              </li>
              <li>
                Provides a dashboard to track campaign progress
              </li>
            </ul>
            <p className="mt-4 font-semibold">
              Important: We are NOT a law firm and do NOT provide legal advice.
              We are an email automation service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              3. Payment Terms
            </h2>
            <div className="space-y-4">
              <p>
                <strong>Pricing:</strong> $19 one-time fee per campaign
              </p>
              <p>
                <strong>Payment Processing:</strong> All payments are processed
                securely by Stripe. We do not store your credit card information.
              </p>
              <p>
                <strong>Refund Policy:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Full refund if emails fail to send due to technical errors on
                  our end
                </li>
                <li>
                  No refund if the debtor does not pay (payment recovery is not
                  guaranteed)
                </li>
                <li>
                  No refund if you change your mind after campaign emails have
                  been sent
                </li>
                <li>
                  Pro-rated refund if you cancel before all emails are sent and
                  request it within 7 days
                </li>
              </ul>
              <p>
                Refund requests can be made by emailing{" "}
                <a
                  href="mailto:support@invoiceavenger.com"
                  className="text-crimson-400 hover:underline"
                >
                  support@invoiceavenger.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              4. User Responsibilities
            </h2>
            <p className="mb-4">By using the Service, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Provide accurate and complete information about yourself, your
                invoices, and your clients
              </li>
              <li>
                Have the legal right and authority to contact the debtor about
                the unpaid invoice
              </li>
              <li>
                Use the Service only for legitimate business debt recovery
                purposes
              </li>
              <li>
                Not use the Service for harassment, threats, or any unlawful
                purposes
              </li>
              <li>
                Comply with all applicable laws, including debt collection
                regulations in your jurisdiction
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Prohibited Uses
            </h2>
            <p className="mb-4">You may NOT use InvoiceAvenger for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Fraudulent or non-existent invoices
              </li>
              <li>
                Harassing individuals or sending threatening communications
              </li>
              <li>
                Debt collection activities subject to the Fair Debt Collection
                Practices Act (FDCPA) or similar regulations
              </li>
              <li>
                Spamming or sending unsolicited commercial messages
              </li>
              <li>
                Any illegal activity or violation of third-party rights
              </li>
            </ul>
            <p className="mt-4">
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Service Guarantees and Limitations
            </h2>
            <div className="space-y-4">
              <p>
                <strong>What We Guarantee:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  We will send the scheduled emails according to the 3-stage
                  timeline
                </li>
                <li>
                  Emails will be professionally written and appropriately escalate
                  in tone
                </li>
                <li>
                  You will be able to track campaign progress in your dashboard
                </li>
              </ul>

              <p className="mt-4">
                <strong>What We Do NOT Guarantee:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  That the debtor will pay the invoice (payment is at the
                  debtor's discretion)
                </li>
                <li>
                  That emails will not be filtered as spam by the recipient's
                  email provider
                </li>
                <li>
                  Any specific recovery rate or timeline
                </li>
                <li>
                  Legal enforceability of the debt
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Limitation of Liability
            </h2>
            <p className="mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, INVOICEAVENGER SHALL NOT BE
              LIABLE FOR:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Whether the debtor pays the invoice or responds to emails
              </li>
              <li>
                Any legal disputes between you and the debtor
              </li>
              <li>
                Email deliverability issues beyond our control (e.g., spam
                filters, invalid email addresses)
              </li>
              <li>
                Any damages, losses, or costs arising from use of the Service
              </li>
              <li>
                Violations of debt collection laws by the user
              </li>
            </ul>
            <p className="mt-4">
              Our total liability is limited to the amount you paid for the
              Service ($19).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              8. Indemnification
            </h2>
            <p>
              You agree to indemnify and hold InvoiceAvenger harmless from any
              claims, damages, or expenses arising from: (a) your use of the
              Service, (b) your violation of these Terms, (c) your violation of
              any rights of another party, or (d) your violation of applicable
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              9. Account Termination
            </h2>
            <p className="mb-4">
              We reserve the right to suspend or terminate your account if:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You violate these Terms of Service</li>
              <li>You engage in fraudulent or abusive behavior</li>
              <li>We receive complaints of harassment from recipients</li>
              <li>We are required to do so by law</li>
            </ul>
            <p className="mt-4">
              You may cancel your account at any time by emailing us. Active
              campaigns will continue unless you request cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              10. Intellectual Property
            </h2>
            <p>
              All content, features, and functionality of InvoiceAvenger are owned
              by us and protected by copyright, trademark, and other intellectual
              property laws. You may not copy, modify, or create derivative works
              without our permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              11. Modifications to Service
            </h2>
            <p>
              We reserve the right to modify or discontinue the Service at any
              time with or without notice. We will not be liable to you or any
              third party for any modification, suspension, or discontinuance of
              the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              12. Governing Law and Dispute Resolution
            </h2>
            <p className="mb-4">
              These Terms are governed by the laws of the State of Delaware,
              United States, without regard to conflict of law principles.
            </p>
            <p>
              Any disputes arising from these Terms or use of the Service shall be
              resolved through binding arbitration in accordance with the rules of
              the American Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              13. Changes to Terms
            </h2>
            <p>
              We may update these Terms from time to time. We will notify you of
              material changes by email or through the Service. Continued use of
              the Service after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              14. Contact Information
            </h2>
            <p className="mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:legal@invoiceavenger.com"
                className="text-crimson-400 hover:underline"
              >
                legal@invoiceavenger.com
              </a>
            </p>
            <p className="mt-2">
              <strong>Support:</strong>{" "}
              <a
                href="mailto:support@invoiceavenger.com"
                className="text-crimson-400 hover:underline"
              >
                support@invoiceavenger.com
              </a>
            </p>
          </section>

          <div className="border-t border-gray-800 pt-8 mt-12">
            <p className="text-sm text-gray-500">
              By clicking "I agree" or using InvoiceAvenger, you acknowledge that
              you have read, understood, and agree to be bound by these Terms of
              Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
