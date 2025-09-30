import Link from 'next/link';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Disclaimer
            </h1>
            <p className="text-gray-600">Last updated: September 2025</p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Educational Purpose Only</h2>
            <p className="mb-6">
              Content on Insurial.info is provided for educational and informational purposes only. It does not constitute legal, tax, accounting, or insurance advice. 
              You should consult licensed professionals before making decisions about insurance coverage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">No Broker or Insurer Services</h2>
            <p className="mb-6">
              Insurial does not sell insurance and does not act as an insurance broker or carrier. Any references to coverage are illustrative and non-binding.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Accuracy and Availability</h2>
            <p className="mb-6">
              Information may become outdated or contain errors. The website is provided “as is” without warranties of completeness, accuracy, or availability. 
              We may update, remove, or suspend content at any time without notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Links and Data</h2>
            <p className="mb-6">
              We may reference external sources or link to third-party sites. We do not control or endorse third-party content and are not responsible for any damages arising from its use.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
            <p className="mb-6">
              To the maximum extent permitted by law, Insurial and BPC Group shall not be liable for indirect, incidental, special, or consequential damages arising from the use of this website. 
              See our <Link href="/terms" className="text-[#1E3A8A] hover:underline">Terms of Service</Link> for more.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="mb-6">
              For issues related to site content, contact <a href="mailto:legal@insurial.info" className="text-[#1E3A8A] hover:underline">legal@insurial.info</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
