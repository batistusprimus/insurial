import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: "Business Owner’s Policy (BOP) - Insurial",
  description: 'Bundle general liability and property into one cost-effective policy for small and mid-sized businesses.'
};

export default function BopPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Business Owner’s Policy (BOP)</h1>
          <p className="text-xl text-gray-600">An all‑in‑one package combining General Liability and Commercial Property—often at a lower cost than buying standalone policies.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why choose a BOP?</h2>
            <p className="text-gray-700 leading-relaxed">
              BOPs are designed for small and mid‑sized businesses that need solid foundational protection: General Liability + Commercial Property. They can include extensions like Business Interruption and industry‑specific endorsements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What a BOP typically includes</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>General Liability (bodily injury, property damage, advertising injury)</li>
                <li>Commercial Property (buildings, equipment, inventory)</li>
                <li>Business Interruption (subject to limits/conditions)</li>
                <li>Industry‑specific endorsements</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common limits and exclusions</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Commercial auto not included → separate auto policy</li>
                <li>Workplace injuries → separate Workers’ Comp policy</li>
                <li>Professional errors → separate E&O policy</li>
                <li>Certain CAT perils (flood/earthquake) often excluded</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Best fit</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Retail, restaurants, local services</li>
                <li>Light construction and maintenance firms</li>
                <li>Growing startups and SMBs with contract requirements</li>
                <li>Companies seeking simplicity and cost efficiency</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost factors</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>GL exposure and insured property values</li>
                <li>Location and physical protections</li>
                <li>Loss history and deductibles</li>
                <li>Additional endorsements added to the BOP</li>
              </ul>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Budget tip</h3>
            <p className="text-gray-700">If you need both GL and Property, a BOP is often cheaper than buying separately. Always compare limits and deductibles.</p>
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


