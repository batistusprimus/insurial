import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Who We Are</h2>
            <p className="mb-6">
              Insurial is operated by <strong>BPC Group</strong>, a data controller committed to protecting your privacy. 
              We provide business insurance quote services to SMBs and mid-market companies in the US and EU.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What Data We Collect</h2>
            <p className="mb-4">When you request a quote, we collect:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Business information (coverage needs, location, budget, company size, industry)</li>
              <li>Contact details (name, work email, phone number, website)</li>
              <li>Technical data (IP address, browser type, UTM parameters)</li>
              <li>Consent records and communication preferences</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Data</h2>
            <p className="mb-4">We process your data to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Provide personalized insurance quotes within 24 hours</li>
              <li>Match you with suitable insurance partners</li>
              <li>Communicate about your quote request and follow-up</li>
              <li>Improve our services and website performance</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Who We Share Data With</h2>
            <p className="mb-4">We share your information only with:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Pre-vetted insurance partners to provide your quotes</li>
              <li>Service providers who help us operate our platform (hosting, email, analytics)</li>
              <li>Legal authorities when required by law</li>
            </ul>
            <p className="mb-6">
              <strong>We never sell your data.</strong> All partners are contractually bound to protect your information.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h2>
            <p className="mb-6">
              We keep your data for up to 3 years to provide ongoing service and comply with legal requirements. 
              You can request deletion at any time (see Your Rights below).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights (GDPR)</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your personal data</li>
              <li>Rectify inaccurate information</li>
              <li>Request deletion of your data</li>
              <li>Object to processing or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
            <p className="mb-6">
              To exercise these rights, contact us at <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a>
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Security</h2>
            <p className="mb-6">
              We use industry-standard security measures including SSL encryption, secure hosting, 
              and regular security audits to protect your data.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">International Transfers</h2>
            <p className="mb-6">
              Data may be transferred between the US and EU. All transfers are protected by appropriate 
              safeguards including Standard Contractual Clauses.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="mb-2">
                <strong>Data Protection Officer:</strong> BPC Group<br />
                <strong>Email:</strong> <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a><br />
                <strong>Response time:</strong> Within 72 hours
              </p>
              <p className="text-sm text-gray-600 mt-4">
                For EU residents: You have the right to lodge a complaint with your local data protection authority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
