import React, { useState, useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { 
  Sprout, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  FileText, 
  CheckSquare2, 
  Package, 
  ArrowRight,
  ShieldCheck,
  Layers,
  Sparkles
} from 'lucide-react';

export default function VermicompostPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  // SEO metadata & Structured Data
  useEffect(() => {
    document.title = "Indian Vermicompost Bulk Sourcing | CR Global";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore Indian vermicompost sourcing for international B2B buyers. Discuss specifications, quantities, packaging and bulk enquiries with CR Global."
      );
    }

    // Accurate Schema.org Product data (no fictional prices, ratings or availability)
    const scriptId = 'vermicompost-schema';
    let scriptTag = document.getElementById(scriptId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Indian Vermicompost",
        "description": "Organic vermicompost sourcing from India for international agricultural and horticultural B2B buyers.",
        "category": "Agricultural Inputs > Organic Fertilizer",
        "countryOfOrigin": {
          "@type": "Country",
          "name": "India"
        }
      });
      document.head.appendChild(scriptTag);
    }

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const applications = [
    {
      title: "Commercial Agriculture",
      description: "Field application for organic farming, broad-acre soil conditioning, and transitioning conventional acreage to biological practices."
    },
    {
      title: "Horticulture",
      description: "High-value fruit, vine, and vegetable cultivation requiring consistent organic matter and active soil biology."
    },
    {
      title: "Nursery Cultivation",
      description: "Propagation beds, seedlings, and root establishment in greenhouse and commercial nursery operations."
    },
    {
      title: "Soil Conditioning",
      description: "Restoring degraded soils, improving moisture retention, and elevating native cation-exchange capacity."
    },
    {
      title: "Potting Media and Growing Substrate Blends",
      description: "Organic component blending for commercial peat-free substrates, container mixes, and urban landscaping."
    },
    {
      title: "Organic Input Distribution",
      description: "Bulk supply for regional wholesalers, distributors, and agro-input retail packaging networks."
    }
  ];

  const specRows = [
    { parameter: "Product", value: "Vermicompost", note: "Bio-converted organic humus" },
    { parameter: "Origin", value: "India", note: "Regional producer sourcing" },
    { parameter: "Appearance", value: "Confirm against actual sample", note: "Dark granular to fine crumb structure" },
    { parameter: "Moisture", value: "Subject to batch testing", note: "Maintained within viable biological parameters" },
    { parameter: "pH", value: "As per available test report", note: "Typically near-neutral depending on feedstock" },
    { parameter: "Organic Carbon", value: "As per available test report", note: "Determined via batch laboratory evaluation" },
    { parameter: "Nitrogen (N)", value: "As per available test report", note: "Natural biological N content" },
    { parameter: "Phosphorus (P)", value: "As per available test report", note: "Available organic P forms" },
    { parameter: "Potassium (K)", value: "As per available test report", note: "Soluble organic K content" },
    { parameter: "Particle Size", value: "Subject to supplier and buyer requirements", note: "Screening mesh options evaluated on request" },
    { parameter: "Packaging", value: "To be confirmed", note: "Based on supplier capability and buyer preference" },
    { parameter: "MOQ", value: "Subject to supplier availability", note: "Evaluated per order and destination port" },
    { parameter: "Laboratory Documentation", value: "Subject to availability and agreed testing", note: "Coordinated prior to shipment confirmation" }
  ];

  const buyerChecklist = [
    { label: "Destination Country & Port", note: "Required to evaluate freight routing and destination customs procedures." },
    { label: "Required Quantity", note: "Order volume in metric tons or FCL container loads to check supplier allocation." },
    { label: "Product Specifications", note: "Target moisture limits, mesh sizing, organic carbon thresholds, or specific test benchmarks." },
    { label: "Packaging Preferences", note: "Preferred bag formats (e.g. 25kg, 50kg, bulk FIBC jumbo sacks, or custom bags)." },
    { label: "Testing Requirements", note: "Any mandated lab test parameters, independent survey inspection, or import certificates." },
    { label: "Preferred Incoterm", note: "Indicate whether FOB (Indian gateway port) or CIF/CFR (destination discharge port) is preferred." },
    { label: "Purchasing Timeline", note: "Target dispatch dates, seasonal application deadlines, or trial shipment schedules." }
  ];

  const faqs = [
    {
      q: "What is vermicompost and how is it produced?",
      a: "Vermicompost is an organic material produced through the biological breakdown and decomposition of organic matter with the active involvement of earthworms and beneficial microorganisms. It results in a rich humus material that enhances soil physical structure and microbial biodiversity."
    },
    {
      q: "How do product specifications and nutrient values vary?",
      a: "Because vermicompost is a naturally derived biological product, its exact composition—including NPK values, organic carbon, pH, and moisture—varies according to the organic feedstock used, production methodology, and composting maturity. Exact parameters are confirmed through batch-specific test reports rather than standardized arbitrary figures."
    },
    {
      q: "What packaging formats are available for bulk export?",
      a: "Packaging arrangements depend on supplier capability, order volume, and destination requirements. Typical discussions evaluate multi-wall woven polypropylene bags (such as 25kg or 50kg) or bulk FIBC jumbo big bags (1,000kg). Specific bag materials and private labelling can be discussed during feasibility review."
    },
    {
      q: "Can product samples be provided prior to order confirmation?",
      a: "Yes, sample availability and dispatch logistics can be coordinated during preliminary sourcing discussions so that buyers can inspect physical appearance, particle texture, and conduct independent testing if required."
    },
    {
      q: "What documentation is provided for international shipments?",
      a: "Commercial documentation typically includes commercial invoices, packing lists, and bills of lading. Available laboratory test reports, certificates of origin, and destination-mandated phytosanitary documents are reviewed and agreed upon during supplier evaluation before orders are formalized."
    },
    {
      q: "What are the minimum order quantities (MOQ)?",
      a: "Minimum order quantities depend on supplier production schedules and practical ocean container economics (typically full 20ft or 40ft container loads). Trial or sample orders may be discussed subject to feasibility."
    }
  ];

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <SEO 
        title="Indian Vermicompost Bulk Sourcing | CR Global"
        description="Explore Indian vermicompost sourcing for international B2B buyers. Discuss specifications, quantities, packaging and bulk enquiries with CR Global."
        canonicalPath="/products/vermicompost"
      />
      
      {/* PAGE HERO HEADER */}
      <PageHeader
        title="Indian Vermicompost — Bulk B2B Sourcing"
        subtitle="Vermicompost Sourcing from India for International Buyers"
        breadcrumb="Vermicompost"
      />

      {/* INTRO SECTION & IMAGE SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
              <Sprout className="w-4 h-4 text-gold-600" />
              <span>B2B Sourcing Overview</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display leading-tight">
              Sourcing Facilitation Grounded in Buyer Requirements
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              CR Global facilitates sourcing discussions for Indian vermicompost intended for agricultural, horticultural and related commercial applications. We work with buyer-defined requirements covering product parameters, order quantities, packaging preferences, documentation and delivery terms.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button to="/export-enquiries" variant="gold" size="lg">
                <span>Request a Bulk Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button to="/contact" variant="secondary" size="lg">
                <span>Contact Sourcing Desk</span>
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-ivory-200 group">
              <img
                src="/images/vermicompost-detail.jpg"
                alt="Close-up of premium organic vermicompost texture"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
                  Organic Soil Amendment
                </span>
                <p className="text-sm text-ivory-100 font-medium">
                  Naturally decomposed biological humus sourced from verified Indian suppliers.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1: WHAT IS VERMICOMPOST? */}
      <section className="bg-ivory-100/60 py-16 sm:py-20 border-y border-ivory-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <span>Product Background</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-800 font-display">
              What is Vermicompost?
            </h2>

            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              Vermicompost is an organic material produced through the biological decomposition of organic matter with the involvement of earthworms and microorganisms.
            </p>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
              As earthworms process organic feedstock, they create a nutrient-dense, humus-rich casting that conditions the soil matrix, enhances aeration, and supports native biological activity. Actual physical and biological characteristics vary by feedstock, production method and maturity.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: APPLICATIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
            <span>Target Sectors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            Commercial Applications
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Supplying sustainable organic inputs for diverse commercial and agricultural disciplines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-ivory-200/90 hover:border-gold-500/40 hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-forest-800 text-gold-500 flex items-center justify-center">
                  <Sprout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-forest-800 font-display">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 3: PRODUCT SPECIFICATIONS TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <span>Specification Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            Product Specifications
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            All parameters are evaluated against buyer requirements and confirmed through batch documentation and testing. We do not publish arbitrary or invented numerical figures.
          </p>
        </div>

        {/* Responsive Specifications Table */}
        <div className="bg-white rounded-3xl border border-ivory-200 overflow-hidden shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-forest-900 text-ivory-100 text-xs uppercase tracking-wider font-semibold border-b border-forest-800">
                  <th className="py-4 px-6">Parameter</th>
                  <th className="py-4 px-6">Specification Basis</th>
                  <th className="py-4 px-6 hidden sm:table-cell">Coordination Note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ivory-200/80 text-sm text-charcoal-700">
                {specRows.map((row, idx) => (
                  <tr 
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-ivory-50/50'}
                  >
                    <td className="py-4 px-6 font-bold text-forest-800 whitespace-nowrap">
                      {row.parameter}
                    </td>
                    <td className="py-4 px-6 font-medium text-charcoal-800">
                      {row.value}
                    </td>
                    <td className="py-4 px-6 text-xs text-charcoal-500 hidden sm:table-cell">
                      {row.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 sm:p-5 bg-ivory-50 text-xs text-charcoal-600 border-t border-ivory-200 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-forest-800 shrink-0 mt-0.5" />
            <span>
              <strong>Note on Technical Evaluation:</strong> Laboratory documentation, moisture thresholds, and specific screening sizes are aligned with destination country regulations during supplier selection.
            </span>
          </div>
        </div>

      </section>

      {/* SECTIONS 4 & 5: BULK SUPPLY, PACKAGING & DOCUMENTATION */}
      <section className="bg-forest-900 text-ivory-100 py-20 border-y border-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(181,139,82,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Section 4: Bulk Supply & Packaging */}
            <div className="bg-forest-800/80 rounded-3xl p-8 sm:p-10 border border-forest-700 shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center border border-gold-500/20">
                <Package className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">Logistics Planning</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Bulk Supply & Packaging
                </h3>
              </div>
              <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-normal">
                Bag sizes, bulk packaging formats, order quantities and logistics arrangements depend on supplier capability and specific buyer requirements.
              </p>
              <p className="text-xs sm:text-sm text-ivory-200/70 leading-relaxed">
                We review full container load (FCL) economics, palletization options, and moisture-barrier inner liners during order planning without making fixed packaging promises prior to supplier confirmation.
              </p>
            </div>

            {/* Section 5: Product Documentation */}
            <div className="bg-forest-800/80 rounded-3xl p-8 sm:p-10 border border-forest-700 shadow-sm space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center border border-gold-500/20">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">Compliance & Verification</span>
                <h3 className="text-2xl font-bold text-white font-display mt-1">
                  Product Documentation
                </h3>
              </div>
              <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed font-normal">
                Available product information, physical samples and testing documentation can be discussed during supplier evaluation.
              </p>
              <p className="text-xs sm:text-sm text-ivory-200/70 leading-relaxed">
                Destination-market import requirements and local phytosanitary regulations must be verified by the buyer before finalizing orders to ensure full customs compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: BUYER REQUIREMENTS CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
            <span>Enquiry Preparation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            Buyer Requirements Checklist
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            To help us assess sourcing feasibility and calculate accurate commercial pricing, we invite buyers to provide the following details:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {buyerChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-ivory-200/90 shadow-xs flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-forest-800 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckSquare2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-forest-800">
                  {item.label}
                </h3>
                <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                  {item.note}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 7: PRODUCT FAQ ACCORDION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            Vermicompost Sourcing FAQ
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Practical answers regarding applications, specifications, sampling, and export coordination.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-ivory-200/90 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-ivory-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-forest-800 font-display">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gold-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-charcoal-600 leading-relaxed border-t border-ivory-100 bg-ivory-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest-900 text-ivory-100 p-8 sm:p-14 text-center border border-forest-800 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest-700/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Request a Vermicompost Quotation
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed">
              Share your target destination port, estimated volume, and required specifications to begin a structured sourcing discussion with CR Global.
            </p>

            <div className="pt-2">
              <Button to="/export-enquiries" variant="gold" size="lg" className="shadow-md">
                <span>Request a Vermicompost Quotation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
