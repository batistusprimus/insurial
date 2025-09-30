import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: 'General Liability Insurance - Insurial',
  description: 'Protect your business from third-party bodily injury, property damage, and advertising injury.'
};

export default function GeneralLiabilityPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">General Liability Insurance</h1>
          <p className="text-xl text-gray-600">Essential protection against third‑party claims for bodily injury, property damage, and personal & advertising injury.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What is General Liability (GL) for?</h2>
            <p className="text-gray-700 leading-relaxed">
              GL protects your business when a third party (customer, visitor, landlord, etc.) alleges damage caused by your day‑to‑day operations. It’s often required to sign a lease, access job sites, or work with enterprise clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What GL covers</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Third‑party bodily injury (e.g., a customer slips and falls at your premises)</li>
                <li>Third‑party property damage</li>
                <li>Personal and advertising injury (libel, slander, unauthorized use of slogan/visual)</li>
                <li>Defense costs and settlements/judgments, up to your policy limits</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What GL does not cover</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Your own property (buildings, equipment, inventory) → see Commercial Property</li>
                <li>Employee injuries → see Workers’ Compensation</li>
                <li>Professional mistakes (advice, design, code) → see E&O/Professional Liability</li>
                <li>Commercial auto accidents → see Commercial Auto</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Who needs it?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Construction, maintenance, on‑site services</li>
                <li>Retail, restaurants, any public‑facing locations</li>
                <li>Logistics, warehousing, installation</li>
                <li>Startups and professional services with contractual requirements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost factors (at a glance)</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Industry and exposure (work at heights, products handled)</li>
                <li>Size (revenue, headcount, geographies)</li>
                <li>Loss history and required limits in contracts</li>
                <li>Deductible choice, additional options (products, completed ops)</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick tip</h3>
            <p className="text-gray-700">If contracts require a Certificate of Insurance (COI) with specific limits, confirm them before binding to avoid endorsements and extra costs.</p>
          </div>

          <div className="text-center">
            <a href="#risk-score-form" className="inline-flex items-center justify-center bg-[#1E3A8A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition">
              Get My Free Risk Score
            </a>
            <p className="text-sm text-gray-500 mt-2">Free • No obligation • GDPR compliant</p>
          </div>
        </div>
      </section>

      <div id="risk-score-form">
        <SimpleRiskForm />
      </div>

      <FAQ />
      <Footer />
    </div>
  );
}


