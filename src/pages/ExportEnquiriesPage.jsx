import React, { useState, useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Mail, 
  ArrowRight,
  ClipboardList, 
  Search, 
  FileText, 
  Truck, 
  Info,
  Clock,
  Loader2,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ExportEnquiriesPage() {
  // Page SEO metadata
  useEffect(() => {
    document.title = "Export Enquiries & Bulk Quotations | CR Global";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Submit an international B2B sourcing enquiry for Indian vermicompost and organic fertilizers. Discuss specifications, volumes, and commercial terms with CR Global."
      );
    }
  }, []);

  const [formData, setFormData] = useState({
    contactPerson: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    destinationPort: '',
    product: 'Vermicompost',
    quantity: '',
    packaging: '50kg HDPE Poly Bags',
    specifications: '',
    testingRequirements: '',
    incoterm: 'FOB',
    timeline: 'Within 30 Days',
    notes: '',
    privacyConsent: false,
    website_url: '' // Honeypot field
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | setup_required
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const processStages = [
    {
      num: "01",
      title: "Share Your Requirements",
      description: "Submit target product parameters, required order volume, packaging preferences, and destination discharge port.",
      icon: ClipboardList
    },
    {
      num: "02",
      title: "Requirement Review",
      description: "Our trade desk reviews feasibility against current supplier capacity, batch parameters, and documentation availability without advance guarantees.",
      icon: Search
    },
    {
      num: "03",
      title: "Product & Commercial Discussion",
      description: "We engage in transparent discussions regarding indicative pricing, agreed Incoterms (FOB/CIF), testing protocols, and realistic lead times.",
      icon: FileText
    },
    {
      num: "04",
      title: "Order Coordination",
      description: "Upon formal mutual agreement, we coordinate packaging preparation, pre-shipment sampling, and export container dispatch.",
      icon: Truck
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person name is required.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Destination country is required.";
    }

    const qty = parseFloat(formData.quantity);
    if (!formData.quantity || isNaN(qty) || qty <= 0) {
      newErrors.quantity = "Please enter a positive quantity in metric tonnes.";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Please acknowledge consent to process inquiry data.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear field-specific error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Rate limiting check (min 10 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setStatus('error');
      setErrorMessage('Please wait a few seconds before resubmitting.');
      return;
    }

    // Bot honeypot check
    if (formData.website_url) {
      setStatus('success');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-enquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setStatus('success');
        setLastSubmitTime(now);
      } else {
        // Backend unavailable (e.g. running local Vite dev server without PHP runtime)
        setStatus('setup_required');
        setErrorMessage(
          result?.error || 'Server-side transmission is currently in setup mode on this environment.'
        );
      }
    } catch (err) {
      // Local development or network error: gracefully present email client fallback
      setStatus('setup_required');
      setErrorMessage('Server-side endpoint is pending Hostinger deployment.');
    }
  };

  // Generate mailto link for direct transmission fallback
  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`B2B Export Enquiry: ${formData.companyName} (${formData.country})`);
    const bodyText = `CR Global Export Enquiry\n\n` +
      `Contact Person: ${formData.contactPerson}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Business Email: ${formData.email}\n` +
      `Phone/WhatsApp: ${formData.phone || 'Not provided'}\n` +
      `Destination Country: ${formData.country}\n` +
      `Destination Port: ${formData.destinationPort || 'Not specified'}\n\n` +
      `Product: ${formData.product}\n` +
      `Quantity: ${formData.quantity} MT\n` +
      `Packaging: ${formData.packaging}\n` +
      `Specifications: ${formData.specifications || 'Standard'}\n` +
      `Testing Requirements: ${formData.testingRequirements || 'Standard'}\n` +
      `Preferred Incoterm: ${formData.incoterm}\n` +
      `Purchase Timeline: ${formData.timeline}\n\n` +
      `Additional Notes: ${formData.notes || 'None'}\n`;

    return `mailto:export@crglobalindia.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <SEO 
        title="Export Enquiries & Bulk Quotations | CR Global"
        description="Submit an international B2B sourcing enquiry for Indian vermicompost and organic fertilizers. Discuss specifications, volumes, and commercial terms with CR Global."
        canonicalPath="/export-enquiries"
      />
      
      {/* PAGE HEADER */}
      <PageHeader
        title="International B2B Enquiries"
        subtitle="Source Indian Vermicompost with CR Global"
        breadcrumb="Export Enquiries"
      />

      {/* INTRO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-100/60 rounded-3xl border border-ivory-200/90 p-8 sm:p-12 lg:p-14 shadow-subtle">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <span>Sourcing Facilitation</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-800 font-display">
              Commercial Trade Discussions
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              CR Global welcomes sourcing enquiries from international importers, distributors, agricultural businesses and commercial buyers. Our objective is to understand your requirements and discuss feasible sourcing arrangements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: HOW THE PROCESS WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
            <span>Our Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            How the Process Works
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            A clear four-stage engagement framework designed for transparent international trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {processStages.map((stage, idx) => {
            const IconComp = stage.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-ivory-200/90 hover:border-gold-500/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-forest-800 text-gold-500 flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-600">
                      STAGE {stage.num}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-forest-800 font-display">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 rounded-xl bg-ivory-50 border border-ivory-200 text-xs text-charcoal-600 flex items-start gap-2.5 max-w-3xl mx-auto">
          <Info className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
          <span>
            <strong>Note on Trade Discussions:</strong> Each stage is conducted on a feasibility basis. Inquiries do not constitute guaranteed product availability, fixed pricing, or shipping commitments until formal contracts are executed.
          </span>
        </div>

      </section>

      {/* SECTION 2: PROFESSIONAL RFQ FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-ivory-200 p-8 sm:p-12 lg:p-16 shadow-card">
          
          <div className="max-w-2xl mb-8 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-800 font-display">
              Request for Quotation (RFQ)
            </h2>
            <p className="text-sm text-charcoal-600 leading-relaxed">
              Complete the commercial parameters below. All verified enquiries are delivered directly to our Indian export coordination desk.
            </p>
          </div>

          {/* Success State */}
          {status === 'success' ? (
            <div className="p-8 sm:p-12 rounded-2xl bg-forest-50/70 border border-forest-200 text-center space-y-4 max-w-2xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-forest-800 font-display">
                Bulk Enquiry Transmitted
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                Thank you, <strong>{formData.contactPerson}</strong>. Your sourcing request for <strong>{formData.companyName}</strong> has been received by the CR Global export desk.
              </p>
              <p className="text-xs text-charcoal-500">
                A confirmation copy will be sent to <strong>{formData.email}</strong>. Our team will review your specifications and contact you shortly.
              </p>
              <div className="pt-4">
                <Button onClick={() => setStatus('idle')} variant="secondary">
                  <span>Submit Another Enquiry</span>
                </Button>
              </div>
            </div>
          ) : status === 'setup_required' ? (
            /* Setup / Local Environment Fallback (Never Fakes Delivery) */
            <div className="p-8 rounded-2xl bg-ivory-50 border border-gold-500/40 space-y-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-forest-800 font-display">
                    Direct Email Delivery Available
                  </h3>
                  <p className="text-sm text-charcoal-600 leading-relaxed">
                    Server-side automated mail forwarding is awaiting deployment on Hostinger shared hosting. You can immediately transmit your compiled inquiry directly to our verified email address.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-ivory-200 text-xs text-charcoal-700 space-y-2">
                <div className="font-semibold text-forest-800">
                  Enquiry Summary Prepared:
                </div>
                <div>• Company: <strong>{formData.companyName}</strong> ({formData.country})</div>
                <div>• Product & Volume: <strong>{formData.product}</strong> ({formData.quantity} MT)</div>
                <div>• Target Port & Terms: <strong>{formData.destinationPort || 'Not specified'}</strong> ({formData.incoterm})</div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={generateMailtoLink()}
                  className="inline-flex items-center justify-center font-semibold rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-100 text-sm px-6 py-3.5 gap-2 shadow-sm transition-all text-center"
                >
                  <Mail className="w-4 h-4 text-gold-400" />
                  <span>Send Directly via Email Client</span>
                  <ExternalLink className="w-4 h-4 ml-1 opacity-70" />
                </a>

                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-5 py-3 text-sm font-semibold rounded-lg text-charcoal-600 hover:text-forest-800 hover:bg-ivory-100 transition-colors"
                >
                  Back to Form Edit
                </button>
              </div>

              {/* Hostinger Setup Checklist for Admin */}
              <div className="pt-4 border-t border-ivory-200 text-[11px] text-charcoal-500 space-y-1">
                <div className="font-semibold text-forest-800">Hostinger Deployment Checklist:</div>
                <div>1. The backend script is saved at <code>public/api/send-enquiry.php</code> and compiles to <code>dist/api/send-enquiry.php</code>.</div>
                <div>2. Once deployed on Hostinger shared hosting with active PHP mail support, form submissions route automatically to <code>export@crglobalindia.com</code>.</div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-8">
              
              {/* Bot Honeypot (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <label>Website URL</label>
                <input
                  type="text"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website_url}
                  onChange={handleChange}
                />
              </div>

              {/* Group 1: Buyer Information */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-forest-800 uppercase tracking-wider font-display border-b border-ivory-200 pb-2">
                  1. Buyer Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Contact Person Name *
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.contactPerson ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.contactPerson && (
                      <p className="text-xs text-red-600 mt-1">{errors.contactPerson}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Global Agri Trading BV"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.companyName ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="purchasing@company.com"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp with Country Code
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +31 20 123 4567"
                      className="w-full text-sm px-4 py-3 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Destination Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. Netherlands, UAE, Australia"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.country ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.country && (
                      <p className="text-xs text-red-600 mt-1">{errors.country}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Destination Port (Optional)
                    </label>
                    <input
                      type="text"
                      name="destinationPort"
                      value={formData.destinationPort}
                      onChange={handleChange}
                      placeholder="e.g. Rotterdam, Jebel Ali"
                      className="w-full text-sm px-4 py-3 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800"
                    />
                  </div>
                </div>
              </div>

              {/* Group 2: Product & Commercial Parameters */}
              <div className="space-y-4 pt-4">
                <h3 className="text-base font-bold text-forest-800 uppercase tracking-wider font-display border-b border-ivory-200 pb-2">
                  2. Sourcing & Order Parameters
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Product Required *
                    </label>
                    <select
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 bg-white"
                    >
                      <option value="Vermicompost">Vermicompost (Organic Soil Humus)</option>
                      <option value="Other Organic Fertilizer Requirement">Other Organic Fertilizer Requirement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Quantity (in Metric Tonnes) *
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="0.1"
                      step="any"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 20 (approx. 1x20ft FCL)"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.quantity ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.quantity && (
                      <p className="text-xs text-red-600 mt-1">{errors.quantity}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Packaging Preference
                    </label>
                    <select
                      name="packaging"
                      value={formData.packaging}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 bg-white"
                    >
                      <option value="50kg HDPE Poly Bags">50 kg HDPE Poly Bags</option>
                      <option value="25kg HDPE Poly Bags">25 kg HDPE Poly Bags</option>
                      <option value="1000kg FIBC Jumbo Big Bags">1,000 kg FIBC Jumbo Big Bags</option>
                      <option value="Custom Buyer Sacks / OEM">Custom Buyer Sacks / OEM</option>
                      <option value="To Be Discussed">To Be Discussed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Preferred Incoterm
                    </label>
                    <select
                      name="incoterm"
                      value={formData.incoterm}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 bg-white"
                    >
                      <option value="FOB">FOB (Indian Loading Port)</option>
                      <option value="CIF">CIF (Destination Discharge Port)</option>
                      <option value="CFR">CFR (Cost and Freight)</option>
                      <option value="EXW">EXW (Ex Works)</option>
                      <option value="Not Sure">Not Sure / Recommend</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Expected Purchase Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full text-sm px-4 py-3 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 bg-white"
                    >
                      <option value="Immediate (1 - 2 weeks)">Immediate (1 - 2 weeks)</option>
                      <option value="Within 30 Days">Within 30 Days</option>
                      <option value="1 - 3 Months">1 - 3 Months</option>
                      <option value="Exploratory / Budgeting">Exploratory / Budgeting</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Required Product Specifications
                    </label>
                    <textarea
                      name="specifications"
                      rows={3}
                      value={formData.specifications}
                      onChange={handleChange}
                      placeholder="e.g. Maximum moisture limit, sieve mesh size (2-4mm), organic carbon preference..."
                      className="w-full text-sm p-3.5 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Testing / Documentation Requirements
                    </label>
                    <textarea
                      name="testingRequirements"
                      rows={3}
                      value={formData.testingRequirements}
                      onChange={handleChange}
                      placeholder="e.g. Certificate of Origin, specific laboratory test parameters, phytosanitary requirements..."
                      className="w-full text-sm p-3.5 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 resize-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                    Additional Notes & Project Context
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Provide any additional trade background or specific buyer expectations..."
                    className="w-full text-sm p-3.5 rounded-lg border border-ivory-300 focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 resize-none"
                  />
                </div>
              </div>

              {/* Group 3: Privacy Consent & Submit */}
              <div className="pt-4 border-t border-ivory-200 space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="w-4 h-4 mt-0.5 rounded border-ivory-400 text-forest-800 focus:ring-forest-800 cursor-pointer"
                  />
                  <label htmlFor="privacyConsent" className="text-xs text-charcoal-600 cursor-pointer leading-relaxed">
                    I consent to CR Global processing this sourcing enquiry for the explicit purpose of evaluating product availability, preparing commercial specifications, and contacting our organisation. *
                  </label>
                </div>
                {errors.privacyConsent && (
                  <p className="text-xs text-red-600">{errors.privacyConsent}</p>
                )}

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center font-bold rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-100 text-base px-8 py-4 gap-2.5 shadow-md hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer w-full sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Transmitting Enquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Bulk Enquiry</span>
                        <Send className="w-4 h-4 text-gold-400" />
                      </>
                    )}
                  </button>
                </div>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* SECTION 3: IMPORTANT INFORMATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-100/60 rounded-3xl border border-ivory-200/90 p-8 sm:p-12 shadow-subtle space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-gold-500" />
            <span>Commercial Transparency</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-800 font-display">
            Important Information for International Buyers
          </h2>

          <div className="space-y-3 text-sm text-charcoal-700 leading-relaxed font-normal">
            <p>
              Please note that product availability, specific batch characteristics, laboratory testing documentation, commercial pricing, and shipment timelines are subject to formal supplier confirmation and mutual commercial agreement.
            </p>
            <p>
              Because organic agricultural inputs are subject to varying destination-market regulations, importing businesses should verify their local customs classifications, import permit requirements, and national biosecurity standards prior to contract finalization.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
