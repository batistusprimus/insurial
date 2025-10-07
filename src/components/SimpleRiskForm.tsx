'use client';

import { useState } from 'react';

interface FormData {
  businessName: string;
  fullName: string;
  workEmail: string;
  phone: string;
  zipCode: string;
  industry: string;
  insuranceTopic?: string; // optional educational intent
  companySize: string;
  annualRevenue: string;
  gdprConsent: boolean;
}

const initialFormData: FormData = {
  businessName: '',
  fullName: '',
  workEmail: '',
  phone: '',
  zipCode: '',
  industry: '',
  insuranceTopic: '',
  companySize: '',
  annualRevenue: '',
  gdprConsent: false,
};

export default function SimpleRiskForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.businessName.trim()) newErrors.businessName = "Business name is required";
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.workEmail) {
      newErrors.workEmail = "Work email is required";
    } else if (!formData.workEmail.includes('@') || formData.workEmail.includes('@gmail.') || formData.workEmail.includes('@yahoo.') || formData.workEmail.includes('@hotmail.')) {
      newErrors.workEmail = "Please use a professional email (e.g., name@company.com)";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    if (!formData.industry) newErrors.industry = "Industry is required";
    if (!formData.companySize) newErrors.companySize = "Company size is required";
    if (!formData.annualRevenue) newErrors.annualRevenue = "Annual revenue is required";
    if (!formData.gdprConsent) newErrors.gdprConsent = "You must agree to the privacy policy to continue";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Capture UTM parameters
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || '',
        utm_adset: urlParams.get('utm_adset') || '',
        utm_ad: urlParams.get('utm_ad') || '',
      };

      const payload = {
        ...formData,
        ...utmData,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
        source: 'insurial.info',
        formType: 'simple_risk_score'
      };

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="risk-score-form" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Your <span className="text-[#1E3A8A]">Free Business Insurance Risk Score</span>
          </h2>
          <p className="text-lg text-gray-600">
            Answer a few quick questions to assess your insurance needs and get plain‑English guidance.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                1. Business name *
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => updateFormData('businessName', e.target.value)}
                placeholder="e.g., Acme Inc."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.businessName && <p className="text-red-600 text-sm mt-1">{errors.businessName}</p>}
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                2. Full name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => updateFormData('fullName', e.target.value)}
                placeholder="e.g., John Doe"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                3. Work email *
              </label>
              <input
                type="email"
                value={formData.workEmail}
                onChange={(e) => updateFormData('workEmail', e.target.value)}
                placeholder="name@company.com"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.workEmail && <p className="text-red-600 text-sm mt-1">{errors.workEmail}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                4. Phone number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* ZIP Code */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                5. ZIP code (HQ) *
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => updateFormData('zipCode', e.target.value)}
                placeholder="e.g., 10001 (New York)"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              />
              {errors.zipCode && <p className="text-red-600 text-sm mt-1">{errors.zipCode}</p>}
            </div>

            {/* Industry */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                6. Industry *
              </label>
              <select
                value={formData.industry}
                onChange={(e) => updateFormData('industry', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              >
                <option value="">Select your industry</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Construction">Construction</option>
                <option value="Professional Services">Professional Services</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Real Estate">Real Estate</option>
                <option value="Education">Education</option>
                <option value="Transportation">Transportation</option>
                <option value="Other">Other</option>
              </select>
              {errors.industry && <p className="text-red-600 text-sm mt-1">{errors.industry}</p>}
            </div>

            {/* Insurance topic to better understand (optional) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                6b. Which insurance topic would you like to better understand? (optional)
              </label>
              <select
                value={formData.insuranceTopic || ''}
                onChange={(e) => updateFormData('insuranceTopic', e.target.value)}
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
              >
                <option value="">Select a topic (optional)</option>
                <option value="General Liability">General Liability</option>
                <option value="Workers’ Compensation">Workers’ Compensation</option>
                <option value="Commercial Property">Commercial Property</option>
                <option value="Commercial Auto">Commercial Auto</option>
                <option value="Business Owner’s Policy (BOP)">Business Owner’s Policy (BOP)</option>
                <option value="Not sure / Other">Not sure / Other</option>
              </select>
            </div>

            {/* Company Size & Annual Revenue - Side by side */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  7a. Company size *
                </label>
                <select
                  value={formData.companySize}
                  onChange={(e) => updateFormData('companySize', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Number of employees</option>
                  <option value="1">Sole proprietor</option>
                  <option value="2-10">2-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="200+">200+ employees</option>
                </select>
                {errors.companySize && <p className="text-red-600 text-sm mt-1">{errors.companySize}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  7b. Annual revenue *
                </label>
                <select
                  value={formData.annualRevenue}
                  onChange={(e) => updateFormData('annualRevenue', e.target.value)}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent text-gray-900"
                >
                  <option value="">Select range</option>
                  <option value="<$50K">&lt; $50,000</option>
                  <option value="$50K-$250K">$50,000 - $250,000</option>
                  <option value="$250K-$1M">$250,000 - $1M</option>
                  <option value="$1M-$5M">$1M - $5M</option>
                  <option value="$5M+">$5M+</option>
                </select>
                {errors.annualRevenue && <p className="text-red-600 text-sm mt-1">{errors.annualRevenue}</p>}
              </div>
            </div>

            {/* GDPR Consent */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.gdprConsent}
                  onChange={(e) => updateFormData('gdprConsent', e.target.checked)}
                  className="mt-1 text-[#1E3A8A] focus:ring-[#1E3A8A]"
                />
                <span className="text-sm text-gray-700">
                  I agree to the{' '}
                  <a href="/privacy" className="text-[#1E3A8A] hover:underline">Privacy Policy</a> and allow{' '}
                  <strong>Insurial</strong> to process my data to generate my Risk Score and send educational resources. *
                </span>
              </label>
              {errors.gdprConsent && <p className="text-red-600 text-sm mt-1">{errors.gdprConsent}</p>}
            </div>

            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1E3A8A] text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isSubmitting ? 'Submitting...' : 'Get My Free Risk Score'}
            </button>

            <p className="text-center text-sm text-gray-500">
              🔒 Free & no obligation • GDPR compliant • You control how your data is used
            </p>
          </form>
        </div>

        {/* Benefits below form */}
        <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-semibold text-gray-900 text-sm">Personalized Score</h4>
            <p className="text-xs text-gray-600">Based on your industry and profile</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">🎯</div>
            <h4 className="font-semibold text-gray-900 text-sm">Exclusive Leads</h4>
            <p className="text-xs text-gray-600">Pre-qualified insurance partners</p>
          </div>
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-900 text-sm">Fast Response</h4>
            <p className="text-xs text-gray-600">Results within 24 hours guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
