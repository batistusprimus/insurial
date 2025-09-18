import Link from 'next/link';

export default function RenewalChecklistGuide() {
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
          <div className="text-4xl mb-4">📋</div>
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">
            Renewal checklist (what to prepare)
          </h1>
          <div className="flex items-center gap-4 text-gray-500 text-sm mb-8">
            <span>5 min read</span>
            <span>•</span>
            <span>Business Insurance Guide</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Preparing for your insurance renewal 60-90 days in advance ensures you get the best rates and coverage. Here's your step-by-step checklist.
          </p>

          {/* Step 1 */}
          <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📊 Business Information Update</h2>
            <p className="text-gray-700 mb-4 font-medium">Start 90 days before renewal</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Current annual revenue projections</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Updated employee count and payroll figures</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>New locations, equipment, or vehicles acquired</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Changes in business operations or services offered</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-[#1E3A8A]" />
                <span>Any planned expansions or major purchases</span>
              </label>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 Claims Review</h2>
            <p className="text-gray-700 mb-4 font-medium">Start 60 days before renewal</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Review all claims filed in the past year</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Gather documentation for any open claims</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Prepare explanations for large or unusual claims</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>Document any risk management improvements made</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-green-500" />
                <span>List safety training programs implemented</span>
              </label>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💼 Financial Documentation</h2>
            <p className="text-gray-700 mb-4 font-medium">Start 60 days before renewal</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Gather recent financial statements</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Update business valuation for property coverage</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Review equipment and inventory values</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Collect receipts for major purchases or improvements</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-orange-500" />
                <span>Prepare cash flow projections</span>
              </label>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🔍 Coverage Assessment</h2>
            <p className="text-gray-700 mb-4 font-medium">Start 45 days before renewal</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Review current policy limits and deductibles</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Identify any coverage gaps or overlaps</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Consider new risks that need coverage</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Evaluate whether limits need adjustment</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-purple-500" />
                <span>Review certificate holders and additional insureds</span>
              </label>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🛒 Market Shopping</h2>
            <p className="text-gray-700 mb-4 font-medium">Start 30 days before renewal</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Request quotes from 3-5 insurance companies</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Compare coverage terms, not just prices</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Review insurer financial ratings (A.M. Best, S&P)</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Check customer service reviews</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-red-500" />
                <span>Negotiate with current carrier using competitive quotes</span>
              </label>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-gray-100 border-l-4 border-gray-400 p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📝 Final Steps</h2>
            <p className="text-gray-700 mb-4 font-medium">2 weeks before renewal</p>
            <div className="space-y-3">
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Review final policy terms carefully</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Confirm all information is accurate</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Understand any coverage changes</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Set up payment arrangements</span>
              </label>
              <label className="flex items-center space-x-3">
                <input type="checkbox" className="w-5 h-5 text-gray-600" />
                <span>Update certificates for clients/vendors</span>
              </label>
            </div>
          </div>

          {/* Warning Signs */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">⚠️ Red Flags to Watch For</h3>
            <ul className="list-disc pl-6 space-y-2 text-yellow-700">
              <li>Significant premium increases without explanation</li>
              <li>Reduced coverage limits or added exclusions</li>
              <li>New deductibles or co-insurance requirements</li>
              <li>Changes in claims handling procedures</li>
            </ul>
          </div>

          {/* Pro Tips */}
          <div className="bg-[#1E3A8A] text-white rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold mb-4">💡 Pro Renewal Tips</h3>
            <ul className="space-y-2">
              <li>• Don't wait until the last minute - good options take time</li>
              <li>• Bundle policies for potential discounts</li>
              <li>• Consider increasing deductibles to lower premiums</li>
              <li>• Maintain continuous coverage to avoid penalties</li>
              <li>• Keep detailed records of all improvements and safety measures</li>
            </ul>
          </div>

          {/* Questions */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions to Ask Your Agent</h3>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>What drove any premium changes?</li>
              <li>Are there new discounts available?</li>
              <li>How do my claims compare to industry averages?</li>
              <li>What risk management improvements could reduce costs?</li>
              <li>Are there emerging risks I should consider covering?</li>
            </ol>
          </div>

          <div className="text-center bg-blue-50 rounded-lg p-6">
            <p className="text-lg font-medium text-[#1E3A8A]">
              Starting early gives you leverage in negotiations and ensures you're not rushed into a decision that could cost your business.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready for a smooth renewal process?
          </h3>
          <p className="text-gray-600 mb-6">
            Start your renewal preparation with our comprehensive quote comparison.
          </p>
          <Link 
            href="/"
            className="inline-block bg-[#1E3A8A] text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </article>
    </div>
  );
}
