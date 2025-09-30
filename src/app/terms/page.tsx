import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Agreement to Terms</h2>
            <p className="mb-6">
              By accessing and using Insurial.info ("the Service"), you agree to be bound by these Terms of Service 
              and our Privacy Policy. The Service is operated by <strong>BPC Group</strong> ("we," "us," or "our").
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Description of Service</h2>
            <p className="mb-6">
              Insurial provides a free quote request service that connects businesses with pre-vetted insurance partners. 
              We facilitate the quote process but do not directly provide insurance coverage or act as an insurance broker.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">User Obligations</h2>
            <p className="mb-4">When using our Service, you agree to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide accurate and complete information in quote requests</li>
              <li>Use a legitimate business email address</li>
              <li>Not submit false, misleading, or fraudulent information</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not attempt to circumvent our security measures</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Service Commitments</h2>
            <p className="mb-4">We commit to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Deliver quotes within 24 hours during business days</li>
              <li>Connect you only with pre-vetted insurance partners</li>
              <li>Protect your data according to our Privacy Policy</li>
              <li>Provide free service with no obligation to purchase</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Disclaimers</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="mb-4"><strong>Important:</strong></p>
              <ul className="list-disc pl-6">
                <li>We do not guarantee quote availability or specific pricing</li>
                <li>Insurance partners make independent underwriting decisions</li>
                <li>Quote delivery times may vary during high-volume periods</li>
                <li>We are not responsible for partner actions or decisions</li>
                <li>The Service is provided "as is" without warranties</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              To the maximum extent permitted by law, BPC Group shall not be liable for any indirect, 
              incidental, special, or consequential damages arising from your use of the Service. 
              Our total liability is limited to €100 or the equivalent in your local currency.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Processing</h2>
            <p className="mb-6">
              By using our Service, you consent to the processing of your data as described in our 
              <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Privacy Policy</Link>. 
              For business customers, a separate <Link href="/dpa" className="text-[#1E3A8A] hover:underline">Data Processing Agreement</Link> is available.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Termination</h2>
            <p className="mb-6">
              You may stop using our Service at any time. We may suspend or terminate access for violations 
              of these Terms. Upon termination, these Terms remain in effect for completed transactions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p className="mb-6">
              These Terms are governed by the laws of France for EU users and Delaware for US users, 
              without regard to conflict of law principles.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
            <p className="mb-6">
              We may update these Terms periodically. Continued use of the Service after changes 
              constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">
                <strong>BPC Group</strong><br />
                <strong>Email:</strong> <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a><br />
                <strong>Response time:</strong> Within 48 hours
              </p>
              <p className="text-sm text-gray-600 mt-4">
                For urgent matters or disputes, please contact us directly via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
