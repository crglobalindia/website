import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { 
  Mail, 
  Phone,
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare, 
  FileText, 
  ExternalLink,
  Loader2,
  Building2,
  Globe2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ContactPage() {
  // Page SEO metadata
  useEffect(() => {
    document.title = "Contact CR Global | Vermicompost & Organic Fertilizer Enquiries";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Contact CR Global for international B2B sourcing discussions on Indian vermicompost and organic fertilizers. Discuss specifications and trade feasibility."
      );
    }
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    country: '',
    subject: '',
    message: '',
    privacyConsent: false,
    website_url: '' // Honeypot spam defense
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | setup_required
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Country is required.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    if (!formData.privacyConsent) {
      newErrors.privacyConsent = "Please acknowledge consent to process your enquiry.";
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
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setStatus('error');
      setErrorMessage('Please wait a few moments before resubmitting.');
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
      const payload = {
        contactPerson: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        country: formData.country,
        product: formData.subject,
        quantity: 1, // positive dummy for general inquiry validator
        notes: formData.message,
        privacyConsent: formData.privacyConsent,
        website_url: formData.website_url
      };

      const response = await fetch('/api/send-enquiry.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setStatus('success');
        setLastSubmitTime(now);
      } else {
        setStatus('setup_required');
        setErrorMessage(
          result?.error || 'Server-side transmission is in setup mode on this environment.'
        );
      }
    } catch (err) {
      setStatus('setup_required');
      setErrorMessage('Server-side endpoint is pending Hostinger deployment.');
    }
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`General Business Enquiry: ${formData.subject} - ${formData.companyName}`);
    const bodyText = `CR Global Contact Enquiry\n\n` +
      `Full Name: ${formData.fullName}\n` +
      `Company Name: ${formData.companyName}\n` +
      `Email: ${formData.email}\n` +
      `Country: ${formData.country}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n`;

    return `mailto:info@crglobalindia.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const hasVerifiedWhatsApp = Boolean(siteConfig.contact?.whatsappNumber);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <SEO 
        title="Contact CR Global | Vermicompost & Organic Fertilizer Enquiries"
        description="Contact CR Global for international B2B sourcing discussions on Indian vermicompost and organic fertilizers. Discuss specifications and trade feasibility."
        canonicalPath="/contact"
      />
      
      {/* PAGE HEADER */}
      <PageHeader
        title="Contact CR Global"
        subtitle="Let's Discuss Your Sourcing Requirements"
        breadcrumb="Contact"
      />

      {/* INTRO & CONTACT OPTIONS BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="bg-ivory-100/60 rounded-3xl border border-ivory-200/90 p-8 sm:p-12 lg:p-14 shadow-subtle">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <span>Open Dialogue</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-800 font-display">
              Direct B2B Communication
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              Whether you are an international importer, agricultural distributor, fertilizer supplier or prospective business partner, we welcome your enquiry.
            </p>

            {/* Contact Action Options */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button onClick={scrollToForm} variant="primary" size="md">
                <MessageSquare className="w-4 h-4" />
                <span>Send an Enquiry</span>
              </Button>

              <Button to="/export-enquiries" variant="gold" size="md">
                <FileText className="w-4 h-4" />
                <span>Request a Bulk Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              {hasVerifiedWhatsApp && (
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center font-semibold rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-sm px-5 py-2.5 gap-2 shadow-sm transition-all"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT: CONTACT DETAILS & FORM */}
      <section id="contact-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Column 1: Verified Contact Information Card (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-forest-900 text-ivory-100 rounded-3xl p-8 sm:p-10 border border-forest-800 shadow-card space-y-7">
              
              <div className="space-y-2 border-b border-forest-800 pb-5">
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Company Identity
                </span>
                <h3 className="text-2xl font-extrabold text-white font-display">
                  {siteConfig.company.name}
                </h3>
                <p className="text-xs text-gold-400 font-medium">
                  {siteConfig.company.tagline}
                </p>
                <p className="text-xs text-ivory-200/80 pt-1">
                  India-Based B2B Sourcing & International Trade
                </p>
              </div>

              {/* Verified Contact Details Only */}
              <div className="space-y-5 text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Official Sourcing Desk</div>
                    <a 
                      href={`mailto:${siteConfig.contact.inquiriesEmail}`}
                      className="text-ivory-100 hover:text-gold-300 font-medium text-sm transition-colors block mt-0.5"
                    >
                      {siteConfig.contact.inquiriesEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">General Inquiries</div>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-ivory-100 hover:text-gold-300 font-medium text-sm transition-colors block mt-0.5"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {siteConfig.contact.phone && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Phone & WhatsApp</div>
                      <a 
                        href={`tel:${siteConfig.contact.phoneRaw || siteConfig.contact.phone}`}
                        className="text-ivory-100 hover:text-gold-300 font-medium text-sm transition-colors block mt-0.5"
                      >
                        {siteConfig.contact.phone}
                      </a>
                      {siteConfig.contact.whatsappNumber && (
                        <a
                          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage || '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 mt-1 transition-colors"
                        >
                          <span>Direct WhatsApp Chat</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Country of Operations</div>
                    <p className="text-ivory-100 text-sm mt-0.5 font-medium">
                      India
                    </p>
                    <p className="text-[11px] text-ivory-200/70 mt-0.5">
                      (Physical registered office credentials provided upon verified trade onboarding)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gold-400 font-semibold uppercase tracking-wider">Operating Time Zone</div>
                    <p className="text-ivory-100 text-sm mt-0.5 font-medium">
                      Indian Standard Time (IST, UTC +5:30)
                    </p>
                    <p className="text-[11px] text-ivory-200/70 mt-0.5">
                      Monday to Friday: Trade coordination and email inquiries
                    </p>
                  </div>
                </div>

              </div>

              <div className="pt-4 border-t border-forest-800">
                <div className="p-4 rounded-xl bg-forest-800/80 border border-forest-700 text-xs text-ivory-200/85 space-y-1">
                  <div className="font-semibold text-gold-400">Direct Inquiries:</div>
                  <p>
                    We review all incoming inquiries to assess requirement feasibility and align with suitable Indian suppliers.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Contact Form (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-ivory-200 p-8 sm:p-12 shadow-card">
            
            <div className="mb-8 space-y-2">
              <h3 className="text-2xl font-extrabold text-forest-800 font-display">
                Send a Message
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                Please provide your contact details and message below. We review and respond to business inquiries promptly.
              </p>
            </div>

            {/* Success State */}
            {status === 'success' ? (
              <div className="p-8 sm:p-10 rounded-2xl bg-forest-50/70 border border-forest-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-forest-800 font-display">
                  Message Sent
                </h4>
                <p className="text-sm text-charcoal-700 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your message on behalf of <strong>{formData.companyName}</strong> has been transmitted to CR Global.
                </p>
                <div className="pt-3">
                  <Button onClick={() => setStatus('idle')} variant="secondary">
                    <span>Send Another Message</span>
                  </Button>
                </div>
              </div>
            ) : status === 'setup_required' ? (
              /* Setup / Email Fallback State (Never Fakes Delivery) */
              <div className="p-7 rounded-2xl bg-ivory-50 border border-gold-500/40 space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-forest-800 font-display">
                      Direct Email Delivery Ready
                    </h4>
                    <p className="text-xs sm:text-sm text-charcoal-600 mt-1 leading-relaxed">
                      Automated server forwarding is awaiting host activation. You can transmit your inquiry immediately to our verified corporate inbox.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-ivory-200 text-xs text-charcoal-700 space-y-1">
                  <div><strong>From:</strong> {formData.fullName} ({formData.companyName})</div>
                  <div><strong>Email:</strong> {formData.email}</div>
                  <div><strong>Subject:</strong> {formData.subject}</div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <a
                    href={generateMailtoLink()}
                    className="inline-flex items-center justify-center font-semibold rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-100 text-xs sm:text-sm px-5 py-3 gap-2 shadow-sm transition-all"
                  >
                    <Mail className="w-4 h-4 text-gold-400" />
                    <span>Open Pre-filled Email</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2.5 text-xs font-semibold rounded-lg text-charcoal-600 hover:text-forest-800 transition-colors"
                  >
                    Back to Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Honeypot field */}
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. David Miller"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>
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
                      placeholder="e.g. Miller Bio Supplies"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.companyName ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.companyName && (
                      <p className="text-xs text-red-600 mt-1">{errors.companyName}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
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
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. United Kingdom, UAE"
                      className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                        errors.country ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                      }`}
                    />
                    {errors.country && (
                      <p className="text-xs text-red-600 mt-1">{errors.country}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Vermicompost sourcing inquiry or general trade question"
                    className={`w-full text-sm px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 ${
                      errors.subject ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-600 mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your requirements or partnership interest..."
                    className={`w-full text-sm p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-forest-800 text-charcoal-800 resize-none ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-ivory-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="space-y-2">
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
                      I consent to CR Global processing my contact information to respond to this business enquiry. *
                    </label>
                  </div>
                  {errors.privacyConsent && (
                    <p className="text-xs text-red-600">{errors.privacyConsent}</p>
                  )}
                </div>

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
                    className="inline-flex items-center justify-center font-bold rounded-lg bg-forest-800 hover:bg-forest-900 text-ivory-100 text-base px-8 py-3.5 gap-2.5 shadow-md hover:shadow-lg transition-all disabled:opacity-60 cursor-pointer w-full sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <Send className="w-4 h-4 text-gold-400" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* FINAL SECTION: CREATING ENDURING VALUE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest-900 text-ivory-100 p-8 sm:p-14 text-center border border-forest-800 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest-700/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              <span>Our Commitment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Creating Enduring Value Through Long-Term Partnerships
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-normal">
              At CR Global, we believe sustainable business is built on transparent communication, thorough requirement analysis, and reliable execution. We look forward to exploring how our Indian sourcing coordination can support your business goals.
            </p>

            <div className="pt-2">
              <Button to="/export-enquiries" variant="gold" size="lg" className="shadow-md">
                <span>Request a Bulk Quote</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
