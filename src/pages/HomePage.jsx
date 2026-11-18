import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sprout, 
  Layers, 
  MessageSquareText, 
  SearchCheck, 
  Handshake, 
  Building2, 
  Store, 
  Tractor, 
  Flower2, 
  Boxes, 
  Globe2,
  CheckCircle2
} from 'lucide-react';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';

export default function HomePage() {
  const servingSectors = [
    {
      title: "Agricultural Importers & Distributors",
      description: "Direct import channels for established overseas distributors seeking steady container supply.",
      icon: Globe2
    },
    {
      title: "Organic Fertilizer Wholesalers",
      description: "Bulk bio-fertilizer supply tailored for regional wholesale and redistribution networks.",
      icon: Store
    },
    {
      title: "Commercial Farming Businesses",
      description: "Large-scale soil conditioning inputs for plantations, horticulture, and commercial agro-projects.",
      icon: Tractor
    },
    {
      title: "Horticulture & Nursery Suppliers",
      description: "Premium screened organic compost suitable for potting mixes, landscaping, and nursery operations.",
      icon: Flower2
    },
    {
      title: "Agricultural Input Companies",
      description: "Organic raw material sourcing for commercial soil amendment blenders and formulators.",
      icon: Boxes
    },
    {
      title: "International Sourcing Partners",
      description: "Collaborative trade coordination for overseas trading houses and institutional buyers.",
      icon: Building2
    }
  ];

  const valuePillars = [
    {
      title: "Requirement-Based Sourcing",
      description: "Every inquiry starts with your target application, volume requirements, and destination standards to identify viable sourcing channels.",
      icon: SearchCheck
    },
    {
      title: "Clear Communication",
      description: "Transparent updates throughout the feasibility, quotation, and coordination phases with realistic lead times and clear commercial terms.",
      icon: MessageSquareText
    },
    {
      title: "Quality-Focused Coordination",
      description: "Diligent verification of sieve mesh grading, moisture parameters, and robust export packaging before dispatch.",
      icon: Layers
    },
    {
      title: "Long-Term Relationships",
      description: "Committed to creating enduring value through reliability, commercial accountability, and repeat supply partnerships.",
      icon: Handshake
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      <SEO 
        title="CR Global | Indian Vermicompost & Organic Fertilizers for Global B2B Buyers"
        description="CR Global is an India-based B2B sourcing and international trade company focused on vermicompost and organic fertilizers. Reliable Sourcing. Clear Specifications. Long-Term Partnerships."
        canonicalPath="/"
      />
      
      {/* SECTION 1: HERO */}
      <section className="relative overflow-hidden bg-forest-950 text-ivory-100 min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* Hero Background Image with Refined Forest Green Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/hero-vermicompost.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-900/90 to-forest-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(181,139,82,0.18),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-800/80 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Sprout className="w-4 h-4 text-gold-500" />
              <span>India-Based B2B Sourcing & International Trade</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-display tracking-tight text-white leading-tight">
              Indian Vermicompost & Organic Fertilizers for Global B2B Buyers
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-semibold text-gold-400 tracking-wide">
              Reliable Sourcing. Clear Specifications. Long-Term Partnerships.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-ivory-200/90 leading-relaxed font-normal pt-1">
              CR Global is an India-based B2B sourcing and international trade company focused on vermicompost and organic fertilizers. We work with importers, distributors, agricultural businesses and horticultural buyers to facilitate sourcing discussions based on product requirements, quantities, packaging preferences and destination-market needs.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button to="/export-enquiries" variant="gold" size="lg" className="w-full sm:w-auto shadow-md">
                <span>Request a Bulk Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button 
                to="/products" 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto border-ivory-200/80 text-ivory-100 hover:bg-ivory-100 hover:text-forest-950 backdrop-blur-xs"
              >
                <span>Explore Our Products</span>
                <ArrowUpRight className="w-4 h-4 text-gold-400" />
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: YOUR SOURCING PARTNER IN INDIA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-100/60 rounded-3xl border border-ivory-200/90 p-8 sm:p-12 lg:p-16 shadow-subtle">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <span>CR Global Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-800 font-display leading-tight">
                Quality-Focused Sourcing for Sustainable Agriculture
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed">
                At CR Global, we believe successful international trade begins with understanding buyer requirements. Our approach emphasizes clear communication, product specifications, responsible supplier coordination and practical export planning.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-ivory-200">
                  <CheckCircle2 className="w-5 h-5 text-forest-800 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-forest-800">Clear Communication</h3>
                    <p className="text-xs text-charcoal-600 mt-0.5">Accurate product descriptions without misleading claims.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-ivory-200">
                  <CheckCircle2 className="w-5 h-5 text-forest-800 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-forest-800">Export Coordination</h3>
                    <p className="text-xs text-charcoal-600 mt-0.5">Container stuffing, moisture integrity, and shipping coordination.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUR PRODUCT FOCUS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
            <span>Portfolio Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            Our Product Focus
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600">
            Dedicated sourcing channels connecting international buyers with verifiable Indian organic agricultural inputs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Card 1: Indian Vermicompost */}
          <div className="bg-white rounded-3xl border border-ivory-200/90 p-8 sm:p-10 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-500 flex items-center justify-center border border-gold-500/20 group-hover:bg-forest-900 transition-colors">
                <Sprout className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Primary Commodity</span>
                <h3 className="text-2xl font-bold text-forest-800 font-display">
                  Indian Vermicompost
                </h3>
              </div>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                Organic soil amendment sourcing for agricultural and horticultural applications, subject to buyer specifications and supplier availability.
              </p>
            </div>

            <div className="pt-8 border-t border-ivory-200/80 mt-8">
              <Button to="/products/vermicompost" variant="primary" className="w-full sm:w-auto">
                <span>View Vermicompost</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Card 2: Organic Fertilizer Requirements */}
          <div className="bg-white rounded-3xl border border-ivory-200/90 p-8 sm:p-10 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between group">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-500 flex items-center justify-center border border-gold-500/20 group-hover:bg-forest-900 transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Sourcing Feasibility</span>
                <h3 className="text-2xl font-bold text-forest-800 font-display">
                  Organic Fertilizer Requirements
                </h3>
              </div>
              <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
                Share your organic fertilizer requirements for a sourcing feasibility discussion based on product type, specifications and availability.
              </p>
            </div>

            <div className="pt-8 border-t border-ivory-200/80 mt-8">
              <Button to="/export-enquiries" variant="gold" className="w-full sm:w-auto">
                <span>Discuss Requirements</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: WHY WORK WITH CR GLOBAL */}
      <section className="bg-forest-900 text-ivory-100 py-20 border-y border-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(181,139,82,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
              <span>Why CR Global</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Why Work With CR Global
            </h2>
            <p className="text-sm sm:text-base text-ivory-200/80 leading-relaxed">
              We provide international commercial buyers with transparent sourcing coordination and professional export execution from India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {valuePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div 
                  key={idx}
                  className="bg-forest-800/80 rounded-2xl p-6 sm:p-7 border border-forest-700/80 hover:border-gold-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-11 h-11 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center border border-gold-500/20">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ivory-200/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: WHO WE SERVE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
            <span>Market Segments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            Who We Serve
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            Collaborating with agricultural enterprises, distributors, and buyers worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {servingSectors.map((sector, idx) => {
            const IconComp = sector.icon;
            return (
              <div
                key={idx}
                className="bg-ivory-50/70 p-7 rounded-2xl border border-ivory-200/90 hover:border-gold-500/40 hover:bg-white hover:shadow-card transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-forest-800 text-gold-500 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <IconComp className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-forest-800 font-display mb-1.5">
                  {sector.title}
                </h3>
                <p className="text-xs text-charcoal-600 leading-relaxed">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest-900 text-ivory-100 p-8 sm:p-14 lg:p-16 text-center border border-forest-800 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest-700/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Looking for Vermicompost from India?
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed">
              Share your destination, quantity, specifications and packaging preferences to begin a sourcing discussion.
            </p>

            <div className="pt-2">
              <Button to="/export-enquiries" variant="gold" size="lg" className="shadow-md">
                <span>Request a Bulk Quotation</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
