'use client';

interface FinalCTAProps {
  onScrollToForm: () => void;
}

export default function FinalCTA({ onScrollToForm }: FinalCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-blue-700 text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-archivo-black mb-4">
          Ready to Get Your Business Protected?
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          Join 1,247+ businesses that got their insurance quotes this month.
          <br />
          <span className="font-semibold">Free • No obligation • Quote in &lt;24h</span>
        </p>
        
        <button
          onClick={onScrollToForm}
          className="bg-white text-[#1E3A8A] hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl mb-6"
        >
          Request My Free Quote Now
        </button>
        
        <div className="flex items-center justify-center space-x-6 text-sm text-blue-200">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No spam
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            GDPR protected
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
        </div>
      </div>
    </section>
  );
}
