import Link from 'next/link';

export default function Guides() {
  const guides = [
    {
      title: "General Liability vs Property — what's the difference?",
      description: "Understand the key differences between these essential coverage types and which one your business needs most.",
      icon: "🛡️",
      readTime: "3 min read",
      href: "/guides/general-liability-vs-property"
    },
    {
      title: "How premiums are calculated (5 key factors)",
      description: "Learn what insurance companies look at when pricing your policy and how to potentially reduce your costs.",
      icon: "💰",
      readTime: "4 min read",
      href: "/guides/premium-calculation"
    },
    {
      title: "Renewal checklist (what to prepare)",
      description: "A step-by-step guide to ensure your renewal process goes smoothly and you get the best rates.",
      icon: "📋",
      readTime: "5 min read",
      href: "/guides/renewal-checklist"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
            Business Insurance Guides
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear, practical information to help you make informed decisions about your business insurance needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 border">
              <div className="text-3xl mb-4">{guide.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {guide.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {guide.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{guide.readTime}</span>
                <Link 
                  href={guide.href}
                  className="text-[#1E3A8A] hover:text-blue-800 font-medium text-sm transition-colors"
                >
                  Read Guide →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            More guides available after you request your quote
          </p>
        </div>
      </div>
    </section>
  );
}
