'use client';

export default function ValueProposition() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Problem */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
            <div className="flex items-start mb-4">
              <div className="bg-red-100 rounded-full p-3 mr-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">The Problem</h3>
                <div className="w-16 h-1 bg-red-500 mb-4"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Overwhelming complexity:</strong> Business insurance is a maze of jargon and confusing options
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Hidden risks:</strong> Without expertise, it’s easy to underestimate coverage needs
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Wasted time:</strong> Hours spent researching and estimating costs without clarity
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Hidden costs:</strong> The wrong coverage can cost thousands in uncovered claims
                </p>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
            <div className="flex items-start mb-4">
              <div className="bg-green-100 rounded-full p-3 mr-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Solution</h3>
                <div className="w-16 h-1 bg-green-500 mb-4"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Personalized Risk Score:</strong> Assess your insurance needs in minutes with our simple, credible tool
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Educational resources:</strong> Clear, jargon-free guides to understand each insurance type
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Independent guidance:</strong> Understand what coverage you likely need and why — without sales pressure
                </p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700">
                  <strong>Actionable next steps:</strong> Use your Risk Score to discuss coverage and budgets with your broker
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-green-800 font-medium text-center">
                ✓ Free • ✓ No obligation • ✓ GDPR compliant • We don’t sell insurance
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
