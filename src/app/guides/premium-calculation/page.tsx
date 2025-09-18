import Link from 'next/link';

export default function PremiumCalculationGuide() {
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
          <div className="text-4xl mb-4">💰</div>
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">
            How premiums are calculated (5 key factors)
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
            <span>4 min read</span>
            <span>•</span>
            <span>Business Insurance Guide</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Insurance companies use a complex algorithm to determine your premium, but these 5 factors have the biggest impact on your costs.
          </p>

          {/* Factor 1 */}
          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Industry & Business Type</h2>
            <p className="text-gray-700 mb-4">
              Your industry's risk profile significantly affects pricing. High-risk industries (construction, restaurants) pay more than low-risk ones (consulting, accounting).
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Why it matters:</h4>
                <p className="text-gray-600">Historical claim data shows some industries file more claims</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Tip:</h4>
                <p className="text-gray-600">Accurately describe your business operations to avoid misclassification</p>
              </div>
            </div>
          </div>

          {/* Factor 2 */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Coverage Limits & Deductibles</h2>
            <p className="text-gray-700 mb-4">
              Higher coverage limits increase premiums, while higher deductibles decrease them.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800">Coverage limits:</h4>
                <p className="text-gray-600">How much the insurance company will pay for a claim</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Deductibles:</h4>
                <p className="text-gray-600">How much you pay before insurance kicks in</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Sweet spot:</h4>
                <p className="text-gray-600">Balance adequate protection with affordable premiums</p>
              </div>
            </div>
          </div>

          {/* Factor 3 */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Business Size & Revenue</h2>
            <p className="text-gray-700 mb-4">
              Larger businesses typically pay higher premiums due to increased exposure.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Factors considered:</strong> Annual revenue, number of employees, square footage</li>
              <li><strong>Why:</strong> More revenue often means more customer interactions and higher claim potential</li>
              <li><strong>Note:</strong> Some coverage types have minimum premiums regardless of size</li>
            </ul>
          </div>

          {/* Factor 4 */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Location & Territory</h2>
            <p className="text-gray-700 mb-4">
              Where your business operates affects your premium due to local factors.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Urban vs Rural:</h4>
                <p className="text-gray-600">Cities often have higher rates due to increased litigation</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Natural disasters:</h4>
                <p className="text-gray-600">Areas prone to hurricanes, earthquakes, or floods cost more</p>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-semibold text-gray-800 mb-2">Local laws:</h4>
                <p className="text-gray-600">Some states have higher claim costs due to legal environment</p>
              </div>
            </div>
          </div>

          {/* Factor 5 */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Claims History & Risk Management</h2>
            <p className="text-gray-700 mb-4">
              Your track record significantly impacts future premiums.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Claims frequency:</strong> Multiple claims signal higher risk</li>
              <li><strong>Claims severity:</strong> Large claims hurt more than small ones</li>
              <li><strong>Risk management:</strong> Safety programs, security systems, and training can reduce rates</li>
              <li><strong>Credit score:</strong> In many states, business credit affects insurance pricing</li>
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="bg-[#1E3A8A] text-white rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">💡 Pro Tips to Reduce Premiums</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li>• Implement safety training programs</li>
                <li>• Install security systems</li>
                <li>• Maintain good credit</li>
              </ul>
              <ul className="space-y-2">
                <li>• Shop around annually</li>
                <li>• Consider bundling multiple policies</li>
                <li>• Work with an experienced agent</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to get competitive rates?
          </h3>
          <p className="text-gray-600 mb-6">
            Our platform compares quotes from multiple insurers to find you the best premium.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Compare Quotes Now
          </Link>
        </div>
      </article>
    </div>
  );
}
