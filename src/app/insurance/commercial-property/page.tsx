import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: 'Commercial Property Insurance - Insurial',
  description: 'Protect buildings, equipment, and inventory from fires, theft, weather, and more.'
};

export default function CommercialPropertyPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 to-amber-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Commercial Property</h1>
          <p className="text-xl text-gray-600">Protect buildings, equipment, inventory, and business personal property from fire, theft, water damage, and other covered perils.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Commercial Property matters</h2>
            <p className="text-gray-700 leading-relaxed">
              A property loss can halt operations for weeks. Commercial Property covers repair or replacement of your business property and can include <strong>Business Interruption</strong> to replace lost income during downtime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What can be insured</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Buildings and tenant improvements</li>
                <li>Equipment, machinery, computers</li>
                <li>Inventory and goods (including in transit with endorsement)</li>
                <li>Furniture, fixtures, business personal property</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Covered perils (examples)</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Fire, smoke, explosion</li>
                <li>Theft, vandalism, water damage</li>
                <li>Windstorm, hail (policy and state dependent)</li>
                <li>Equipment breakdown (with specific endorsement)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key considerations</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Replacement Cost vs. Actual Cash Value (depreciation)</li>
                <li>Deductibles and coinsurance clauses</li>
                <li>Location‑based and category‑based limits</li>
                <li>Flood/Earthquake often excluded (separate policies)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost factors</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Location (CAT exposure, crime)</li>
                <li>Construction type and protections (sprinklers, alarms)</li>
                <li>Insured values and loss history</li>
                <li>Prevention measures and maintenance</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Good to know</h3>
            <p className="text-gray-700"><strong>Business Interruption</strong> typically triggers after a covered physical loss. Check waiting periods and sublimits.</p>
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


