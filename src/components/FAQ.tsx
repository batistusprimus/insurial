'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is it really free?",
      answer: "Yes, 100% free and with no obligation. We don’t sell insurance; our goal is education and helping you understand your risk."
    },
    {
      question: "How long does it take to get a quote?",
      answer: "The Risk Score takes under 5 minutes. You can then use the results to discuss coverage with your broker or preferred agent."
    },
    {
      question: "Who will contact me?",
      answer: "No mandatory calls. You'll receive your Risk Score by email with guidance to take next steps at your own pace."
    },
    {
      question: "How is my data handled?",
      answer: "GDPR-compliant and SSL secured. Your information is only shared with selected insurance partners to provide your quote. You can request data deletion anytime by contacting us."
    },
    {
      question: "Can I refuse the quote or cancel?",
      answer: "Absolutely. There’s no obligation. The Risk Score is informational; you decide how to use it."
    },
    {
      question: "Do you work with all insurance companies?",
      answer: "We’re independent and focus on education. You can share your Risk Score with any broker or carrier you prefer."
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
          <p className="text-gray-600">
            Still have questions? Contact us at <a href="mailto:hello@insurial.info" className="text-[#1E3A8A] hover:text-blue-800 font-medium">hello@insurial.info</a>
          </p>
        </div>
      </div>
    </section>
  );
}
