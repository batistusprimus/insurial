'use client';

import { useRef } from 'react';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import KeyBenefits from '@/components/KeyBenefits';
import SimpleRiskForm from '@/components/SimpleRiskForm';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import PressLogos from '@/components/PressLogos';

export default function Home() {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section - headline + sub-headline + CTA */}
      <Hero onScrollToForm={scrollToForm} />
      
      {/* Press logos */}
      <PressLogos />
      
      {/* Value Proposition - problème / solution */}
      <ValueProposition />
      
      {/* Key Benefits - 3-4 blocs d'avantages */}
      <KeyBenefits />
      
      {/* CTA Section - Risk Score Form */}
      <div ref={formRef}>
        <SimpleRiskForm />
      </div>
      
      {/* How It Works - 3 étapes */}
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
