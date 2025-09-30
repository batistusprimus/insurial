import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'How It Works - Insurial',
  description: 'See how Insurial works in 3 simple steps: Risk Score, Guidance, and Actionable Next Steps.'
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-archivo-black text-gray-900 mb-4">How It Works</h1>
          <p className="text-lg text-gray-600">A simple, transparent process to understand your risks and make informed decisions.</p>
        </div>
      </section>
      <HowItWorks />
      <Footer />
    </div>
  );
}


