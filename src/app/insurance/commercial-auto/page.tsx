import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: 'Commercial Auto Insurance - Insurial',
  description: 'Protect your business vehicles, drivers, and liability with commercial auto coverage.'
};

export default function CommercialAutoPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-red-50 to-pink-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Commercial Auto</h1>
          <p className="text-xl text-gray-600">Coverage for vehicles used in business: auto liability, collision, comprehensive, uninsured/underinsured motorist, and more.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why a Commercial Auto policy?</h2>
            <p className="text-gray-700 leading-relaxed">
              Business driving exposes your company to costly losses. Personal auto policies typically exclude business use. <strong>Commercial Auto</strong> is often required for deliveries, job sites, or fleets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Common coverages</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Liability (BI/PD) for third‑party injuries and damages</li>
                <li>Collision and comprehensive</li>
                <li>Uninsured/Underinsured Motorist</li>
                <li>Medical Payments/PIP (state dependent)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Options & exclusions</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Hired & Non‑Owned Auto (HNOA) for rentals/personal vehicles used for work</li>
                <li>Driver age/record restrictions</li>
                <li>Cargo often covered via separate Motor Truck Cargo/Transit</li>
                <li>Usage outside USA/Canada typically excluded</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Who needs it?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Delivery, light transport, on‑site services</li>
                <li>Construction, maintenance, HVAC, electrical</li>
                <li>Shops using pickups and vans</li>
                <li>Fleets with multiple vehicles and drivers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost factors</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Vehicle types, values, usage, mileage</li>
                <li>Driver records and loss history</li>
                <li>Operating territory and parking/storage</li>
                <li>Internal policies (telematics, training)</li>
              </ul>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro tip</h3>
            <p className="text-gray-700">For couriers and contractors, a <strong>Hired & Non‑Owned Auto (HNOA)</strong> endorsement covers occasional use of rentals or personal vehicles for work.</p>
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


