import Link from 'next/link';

export default function CookieSettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Cookie Settings
            </h1>
            <p className="text-gray-600">Manage your cookie preferences below.</p>
          </div>

          <div className="prose prose-lg max-w-none article-content">
            <p className="mb-6">
              These settings describe categories used on this site. Some cookies are essential and cannot be disabled.
              For details, see our <Link href="/cookie-policy" className="text-[#1E3A8A] hover:underline">Cookie Policy</Link>.
            </p>

            <div className="mb-6 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Essential (Always active)</h2>
              <p className="text-gray-700">Required for security, network management, and basic site functionality.</p>
            </div>

            <div className="mb-6 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Analytics</h2>
              <p className="text-gray-700">Helps us improve content and performance. You can opt out by disabling analytics in your browser or extensions.</p>
            </div>

            <div className="mb-6 p-4 rounded-lg border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Marketing</h2>
              <p className="text-gray-700">Measures campaign performance. If enabled in the future, we will request your consent where required.</p>
            </div>

            <p className="text-gray-700">
              You can also control cookies via your browser settings (block, delete, or clear storage). Disabling non-essential cookies will not affect access to educational content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
