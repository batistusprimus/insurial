'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it really free?",
      answer: "Yes, 100% free and with no obligation. We&apos;re compensated by our insurance partners only when you choose to purchase a policy, so our service costs you nothing."
    },
    {
      question: "How long does it take to get a quote?",
      answer: "Typically within 24 hours, often much faster. Our team reviews your request during business hours and matches you with the most suitable partners for quick turnaround."
    },
    {
      question: "Who will contact me?",
      answer: "A vetted insurance professional aligned with your specific request and industry. We pre-qualify all partners to ensure you receive relevant, high-quality quotes."
    },
    {
      question: "How is my data handled?",
      answer: "GDPR-compliant and SSL secured. Your information is only shared with selected insurance partners to provide your quote. You can request data deletion anytime by contacting us."
    },
    {
      question: "Can I refuse the quote or cancel?",
      answer: "Absolutely. There's no obligation to purchase. You're free to review quotes, ask questions, and decide what works best for your business without any pressure."
    },
    {
      question: "Do you work with all insurance companies?",
      answer: "We partner with a curated network of reputable insurers across different markets. While not every company, we ensure broad coverage to find competitive options for your needs."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about our service and process. Don't see your question? Contact us directly.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <a
            href="https://calendly.com/bpc/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#1E3A8A] hover:text-blue-800 font-medium transition-colors"
          >
            Schedule a quick call
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
