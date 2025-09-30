import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-gray-600">Last updated: September 2025</p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <p className="mb-6">
              This Cookie Policy explains how Insurial uses cookies and similar technologies on our website. 
              For information on how we process personal data, please read our <Link href="/privacy" className="text-[#1E3A8A] hover:underline">Privacy Policy</Link>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What are cookies?</h2>
            <p className="mb-6">
              Cookies are small text files stored on your device when you visit a website. They help the site function, remember preferences, and understand usage.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of cookies we use</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Essential</strong>: Required for core functionality (security, load balancing, basic preferences).</li>
              <li><strong>Analytics</strong>: Help us understand how the site is used to improve performance and content.</li>
              <li><strong>Marketing</strong>: Used to measure campaign performance and, where applicable, personalize content.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How we use cookies</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>To keep the site secure and available</li>
              <li>To measure page performance and user engagement</li>
              <li>To remember your selections (e.g., language, cookie preferences)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Managing your preferences</h2>
            <p className="mb-6">
              You can manage optional cookies at any time via <Link href="/cookie-settings" className="text-[#1E3A8A] hover:underline">Cookie Settings</Link>. 
              You can also control cookies through your browser settings. Disabling certain cookies may impact site functionality.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Retention</h2>
            <p className="mb-6">
              Cookie lifetimes vary. Session cookies expire when you close your browser; persistent cookies may remain for up to 13 months unless deleted earlier.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-party cookies</h2>
            <p className="mb-6">
              Where used, third-party analytics or marketing providers place cookies subject to their own policies. We only enable them where strictly necessary or with your consent, as applicable.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="mb-6">
              For questions about this policy, contact us at <a href="mailto:privacy@insurial.info" className="text-[#1E3A8A] hover:underline">privacy@insurial.info</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
