import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import SimpleRiskForm from '@/components/SimpleRiskForm';

export const metadata = {
  title: "Workers’ Compensation Insurance - Insurial",
  description: 'Protect employees and stay compliant with state laws. Coverage for medical costs, lost wages, and more.'
};

export default function WorkersCompensationPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Workers’ Compensation</h1>
          <p className="text-xl text-gray-600">Required in most states once you have employees. Covers medical bills, lost wages, and rehabilitation after workplace injuries or illnesses.</p>
        </div>
      </section>
      
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Why Workers’ Comp matters</h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond legal requirements, Workers’ Comp protects your team and your business from the costs of workplace injuries. It reduces litigation and supports faster return‑to‑work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What’s covered</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Medical expenses from work‑related injuries or illnesses</li>
                <li>Wage replacement (temporary/partial disability)</li>
                <li>Rehabilitation and follow‑up care</li>
                <li>Benefits for permanent disability or death</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What’s not covered</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Injuries outside the course and scope of work</li>
                <li>Fraud or willful safety violations</li>
                <li>Amounts beyond state schedules</li>
                <li>Undeclared workers (watch for audits)</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Who must carry it?</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Most employers once you reach 1–3 employees (varies by state)</li>
                <li>Higher‑risk industries: construction, manufacturing, logistics</li>
                <li>Startups and professional services with employees</li>
                <li>Some contractors/sole proprietors depending on state/contracts</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost factors</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Class codes (NCCI/state) and payroll</li>
                <li>Experience modification factor (MOD/X‑Mod)</li>
                <li>Safety programs and training</li>
                <li>State rules, audits, and adjustments</li>
              </ul>
            </div>
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Compliance tip</h3>
            <p className="text-gray-700">Prepare for annual audits by keeping accurate payroll records, class codes, and subcontractor certificates.</p>
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


