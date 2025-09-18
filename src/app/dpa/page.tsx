import Link from 'next/link';

export default function DPAPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="mb-8">
            <Link href="/" className="text-[#1E3A8A] hover:text-blue-800 text-sm mb-4 inline-block">
              ← Back to Insurial.info
            </Link>
            <h1 className="text-3xl md:text-4xl font-archivo-black text-gray-900 mb-4">
              Data Processing Agreement (DPA)
            </h1>
            <p className="text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">For Business Customers</h2>
              <p className="text-gray-700">
                This Data Processing Agreement (DPA) applies when your organization acts as a Data Controller 
                and BPC Group processes personal data on your behalf in connection with Insurial services.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Definitions</h2>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>"Controller":</strong> Your organization requesting insurance quotes</li>
              <li><strong>"Processor":</strong> BPC Group (Insurial operator)</li>
              <li><strong>"Personal Data":</strong> Employee/customer data included in quote requests</li>
              <li><strong>"Processing":</strong> Quote facilitation and partner matching</li>
              <li><strong>"Sub-processor":</strong> Insurance partners and service providers</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Scope of Processing</h2>
            <p className="mb-4"><strong>Categories of Personal Data:</strong></p>
            <ul className="list-disc pl-6 mb-4">
              <li>Contact information (names, emails, phone numbers)</li>
              <li>Business information (company size, industry, location)</li>
              <li>Insurance requirements and preferences</li>
            </ul>
            
            <p className="mb-4"><strong>Categories of Data Subjects:</strong></p>
            <ul className="list-disc pl-6 mb-6">
              <li>Your employees and authorized representatives</li>
              <li>Your customers (if included in risk assessment)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Processing Instructions</h2>
            <p className="mb-6">
              BPC Group will process Personal Data solely for the purpose of providing insurance quote 
              services as outlined in our Terms of Service, and only according to your documented instructions.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Security Measures</h2>
            <p className="mb-4">We implement appropriate technical and organizational measures:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>SSL/TLS encryption for data in transit</li>
              <li>Encrypted storage for data at rest</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training on data protection</li>
              <li>Incident response procedures</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Sub-processing</h2>
            <p className="mb-4">We engage the following categories of sub-processors:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>Insurance Partners:</strong> To provide quotes (vetted and contractually bound)</li>
              <li><strong>Cloud Hosting:</strong> Secure data storage and processing infrastructure</li>
              <li><strong>Email Services:</strong> Quote delivery and communication</li>
            </ul>
            <p className="mb-6">
              All sub-processors are subject to equivalent data protection obligations. 
              We will notify you of any changes to sub-processors with 30 days notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Subject Rights</h2>
            <p className="mb-6">
              We will assist you in responding to data subject requests (access, rectification, erasure, etc.) 
              within 72 hours of receiving your request. We provide tools and processes to facilitate compliance.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Data Breach Notification</h2>
            <p className="mb-6">
              We will notify you of any personal data breach within 24 hours of becoming aware, 
              including details of the breach, affected data, and remediation measures taken.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. International Transfers</h2>
            <p className="mb-6">
              Data transfers between US and EU are protected by Standard Contractual Clauses (SCCs) 
              approved by the European Commission. We ensure adequate protection for all cross-border transfers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Audit Rights</h2>
            <p className="mb-6">
              You may request audit information annually. We provide compliance reports and certifications. 
              On-site audits may be arranged for enterprise customers with reasonable notice.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Data Retention and Deletion</h2>
            <p className="mb-6">
              Personal data is retained for 3 years or as instructed by you. Upon termination or your request, 
              we will delete or return all personal data within 30 days, except where retention is required by law.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact & Execution</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="mb-4">
                <strong>To execute this DPA or for questions:</strong>
              </p>
              <p className="mb-2">
                <strong>Email:</strong> <a href="mailto:dpa@insurial.info" className="text-[#1E3A8A] hover:underline">dpa@insurial.info</a><br />
                <strong>Subject:</strong> DPA Request - [Your Company Name]<br />
                <strong>Response time:</strong> Within 48 hours
              </p>
              <p className="text-sm text-gray-600 mt-4">
                This DPA becomes effective upon your first use of Insurial services or upon signed execution, 
                whichever occurs first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
