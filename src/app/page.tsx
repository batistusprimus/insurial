'use client';

import { useRef } from 'react';
import Hero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import Guides from '@/components/Guides';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onScrollToForm={scrollToForm} />
      
      {/* Lead Form */}
      <div ref={formRef}>
        <LeadForm />
      </div>
      
      {/* Information Guides */}
      <Guides />
      
      {/* How It Works */}
      <HowItWorks />
      
      {/* Social Proof & Testimonials */}
      <Testimonials />
      
      {/* FAQ */}
      <FAQ />
      
      {/* Final CTA */}
      <FinalCTA onScrollToForm={scrollToForm} />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
