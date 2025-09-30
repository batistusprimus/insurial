import Link from 'next/link';

export default function LegalMentionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Legal Information
            </h1>
            <p className="text-gray-600">
              Last updated: September 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Publisher</h2>
            <p className="mb-6">
              The website <strong>Insurial.info</strong> is published by <strong>BPC Group</strong> (the “Publisher”).
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Nature</h2>
            <p className="mb-6">
              Insurial.info is an educational platform focused on commercial insurance in the United States. 
              It provides a free “Business Insurance Risk Score” tool (inputs: industry, size, location, revenue). 
              Insurial does not sell insurance and does not act as a broker or insurer. No insurance offers are
              directly provided on the website.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="mb-2">
                <strong>General:</strong> <a href="mailto:hello@insurial.info" className="text-[#1E3A8A] hover:underline">hello@insurial.info</a><br />
                <strong>Privacy:</strong> <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a><br />
                <strong>Legal:</strong> <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Correspondence Address</h2>
            <p className="mb-6">
              BPC Group – Correspondence: 38/A Rózsa utca, 1077 Budapest, Hungary.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Hosting</h2>
            <p className="mb-6">
              The website is hosted on secure cloud infrastructure. Data is protected with SSL and reasonable security measures.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
            <p className="mb-6">
              All content (texts, images, graphics, structure, logos) published on Insurial.info is protected by copyright and 
              intellectual property rights. Any reproduction, representation, modification, publication, transmission, or distortion, 
              in whole or in part, by any means and on any medium, is prohibited without the Publisher’s prior written consent.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Liability</h2>
            <p className="mb-6">
              The information available on Insurial.info is provided for educational and informational purposes only. While care is taken 
              to ensure accuracy, the Publisher cannot guarantee the absence of errors or omissions, nor the continuous timeliness of the content. 
              Decisions made based on the website’s information are the sole responsibility of users. The website is provided “as is,” 
              without warranties of completeness or fitness for a particular purpose.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Personal Data</h2>
            <p className="mb-6">
              For details about data processing (purposes, legal basis, recipients, retention, data subject rights, transfers), 
              please refer to our <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Privacy Policy</Link> and, where applicable, 
              our <Link href="/dpa" className="text-[#1E3A8A] hover:underline">Data Processing Agreement</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">External Links</h2>
            <p className="mb-6">
              The website may contain links to third-party sites. The Publisher has no control over these external resources and cannot be held 
              responsible for their content, practices, or any damage that may result from their use.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Governing Law</h2>
            <p className="mb-6">
              This website and this Legal Information are governed by the laws of France for users located in the EU and the laws of the State of Delaware (USA) 
              for users located in the United States, without prejudice to mandatory consumer protection rules.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Updates</h2>
            <p className="mb-6">
              This page may be updated at any time to reflect changes to the website, services, or regulations. The last updated date is shown above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
