import Link from 'next/link';

export default function GeneralLiabilityVsPropertyGuide() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 font-medium">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <div className="text-4xl mb-4">🛡️</div>
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">
            General Liability vs Property — what's the difference?
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
            <span>3 min read</span>
            <span>•</span>
            <span>Business Insurance Guide</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Understanding the difference between General Liability and Property Insurance is crucial for protecting your business comprehensively.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Liability Insurance</h2>
            <p className="text-gray-700 mb-4">
              Protects your business against third-party claims for bodily injury, property damage, and personal injury that occur as a result of your business operations.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">What General Liability Covers:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Customer slips and falls at your business location</li>
            <li>Damage to client property while providing services</li>
            <li>Advertising injury claims (copyright infringement, defamation)</li>
            <li>Legal defense costs and settlements</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-green-800 mb-2">Real Example:</h4>
            <p className="text-green-700">
              A customer trips over a cable at your office and breaks their wrist. General liability covers their medical expenses and any legal costs.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Property Insurance</h2>
            <p className="text-gray-700 mb-4">
              Protects your business's physical assets including buildings, equipment, inventory, and furniture from covered perils like fire, theft, or vandalism.
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4">What Property Insurance Covers:</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Building damage from fire, storms, or vandalism</li>
            <li>Stolen or damaged equipment and inventory</li>
            <li>Business interruption (lost income during repairs)</li>
            <li>Additional expenses to operate from a temporary location</li>
          </ul>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-green-800 mb-2">Real Example:</h4>
            <p className="text-green-700">
              A fire damages your office, destroying computers and furniture. Property insurance covers replacement costs and lost income while you rebuild.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Differences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[#1E3A8A] mb-2">General Liability</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Protects against claims from others</li>
                  <li>• Covers legal and medical costs for third parties</li>
                  <li>• Focuses on liability and lawsuits</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-orange-600 mb-2">Property Insurance</h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• Protects your own business assets</li>
                  <li>• Covers physical damage to your property</li>
                  <li>• Focuses on replacing damaged items</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-[#1E3A8A] text-white rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Which do you need?</h2>
            <p className="text-lg">
              Most businesses need <strong>both types of coverage</strong> as they protect against different risks that could financially devastate your company.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to protect your business?
          </h3>
          <p className="text-gray-600 mb-6">
            Get a personalized quote that includes both General Liability and Property coverage.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Get Your Quote
          </Link>
        </div>
      </article>
    </div>
  );
}
