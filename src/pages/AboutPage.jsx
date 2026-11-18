import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import { 
  Sprout, 
  Compass, 
  Target, 
  ShieldCheck, 
  SearchCheck, 
  Scale, 
  Handshake, 
  TrendingUp, 
  ClipboardList, 
  Search, 
  Layers, 
  FileCheck2, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import SEO from '../components/common/SEO';

export default function AboutPage() {
  // Page-specific SEO metadata
  useEffect(() => {
    document.title = "About CR Global | Creating Enduring Value Through Responsible Global Trade";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Learn about CR Global, an India-based B2B sourcing and international trade company focused on vermicompost, organic fertilizers, and responsible trade partnerships."
      );
    }
  }, []);

  const coreValues = [
    {
      title: "Integrity",
      description: "Honest communication about capabilities and commitments.",
      icon: ShieldCheck
    },
    {
      title: "Quality Focus",
      description: "Attention to product specifications and buyer expectations.",
      icon: SearchCheck
    },
    {
      title: "Transparency",
      description: "Clarity around sourcing, quantities, timelines and terms.",
      icon: Scale
    },
    {
      title: "Partnership",
      description: "Relationships based on mutual understanding and long-term value.",
      icon: Handshake
    },
    {
      title: "Continuous Improvement",
      description: "Strengthening sourcing knowledge and business processes.",
      icon: TrendingUp
    }
  ];

  const businessSteps = [
    {
      step: "01",
      title: "Requirement Review",
      description: "We begin by conducting a comprehensive review of buyer specifications, required volumes, packaging formats, and destination market requirements.",
      icon: ClipboardList
    },
    {
      step: "02",
      title: "Sourcing Evaluation",
      description: "We evaluate potential Indian suppliers against target parameters, screening for consistency, availability, and alignment with buyer standards.",
      icon: Search
    },
    {
      step: "03",
      title: "Product Information Coordination",
      description: "We coordinate accurate product details, physical characteristics, sieve gradings, and packaging specifications with full transparency.",
      icon: Layers
    },
    {
      step: "04",
      title: "Commercial Discussion",
      description: "We facilitate structured trade conversations with clear FOB or CIF pricing, practical transit schedules, and documented milestones.",
      icon: FileCheck2
    },
    {
      step: "05",
      title: "Long-Term Relationship Building",
      description: "We prioritize repeat reliability, dependable service, and commercial trust over short-term transactions to create enduring value.",
      icon: Users
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      <SEO 
        title="About CR Global | Creating Enduring Value Through Responsible Global Trade"
        description="Learn about CR Global, an India-based B2B sourcing and international trade company focused on vermicompost, organic fertilizers, and responsible trade partnerships."
        canonicalPath="/about"
      />
      
      {/* PAGE HEADER */}
      <PageHeader
        title="About CR Global"
        subtitle="Creating Enduring Value Through Responsible Global Trade"
        breadcrumb="About Us"
      />

      {/* INTRODUCTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
              <Sprout className="w-4 h-4 text-gold-600" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display leading-tight">
              Facilitating Responsible Agricultural Sourcing from India
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
              <p>
                CR Global is an India-based B2B sourcing and international trade company focused on connecting buyers with agricultural input sourcing opportunities.
              </p>
              <p>
                Our initial business focus is <strong>vermicompost and organic fertilizers</strong>, supporting the growing interest in sustainable soil management and organic agricultural inputs.
              </p>
              <p className="text-sm sm:text-base text-charcoal-600">
                We approach each business enquiry with an emphasis on understanding requirements, coordinating with potential suppliers, and communicating clearly throughout the sourcing process.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-ivory-200 group">
              <img
                src="/images/about-agriculture.jpg"
                alt="Sustainable agriculture and organic cultivation in India"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-1">
                  Responsible Trade
                </span>
                <p className="text-sm text-ivory-100 font-medium">
                  Connecting overseas buyers with authentic Indian agricultural inputs.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTIONS 1 & 2: VISION & MISSION */}
      <section className="bg-ivory-100/60 py-16 sm:py-20 border-y border-ivory-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-ivory-200/90 shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center border border-gold-500/20">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Strategic Direction</span>
                  <h3 className="text-2xl font-bold text-forest-800 font-display mt-1">
                    Our Vision
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
                  To build CR Global into a trusted international trade and sourcing company known for transparency, dependable relationships and enduring business value.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-ivory-200/90 shadow-card flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-forest-800 text-gold-400 flex items-center justify-center border border-gold-500/20">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Our Purpose</span>
                  <h3 className="text-2xl font-bold text-forest-800 font-display mt-1">
                    Our Mission
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed font-normal">
                  To connect global buyers with sourcing opportunities in India through requirement-driven coordination, responsible business practices and a commitment to long-term partnerships.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: OUR CORE VALUES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ivory-100 text-forest-800 text-xs font-bold uppercase tracking-wider border border-ivory-300">
            <span>Guiding Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
            Our Core Values
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed">
            The fundamental standards that inform our interactions with international buyers, suppliers, and partners.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {coreValues.map((value, idx) => {
            const IconComp = value.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-ivory-200/90 hover:border-gold-500/40 hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-forest-800 text-gold-500 flex items-center justify-center">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-forest-800 font-display">
                      {value.title}
                    </h3>
                    <p className="text-sm text-charcoal-600 mt-2 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION 4: OUR BUSINESS APPROACH */}
      <section className="bg-forest-900 text-ivory-100 py-20 border-y border-forest-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(181,139,82,0.15),transparent_60%)] pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider border border-gold-500/30">
              <span>Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              Our Business Approach
            </h2>
            <p className="text-sm sm:text-base text-ivory-200/80 leading-relaxed">
              A structured, step-by-step methodology to ensure every sourcing discussion is grounded in realistic capabilities and transparent execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {businessSteps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-forest-800/80 rounded-2xl p-6 border border-forest-700/80 hover:border-gold-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center border border-gold-500/20">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-gold-500/80">
                        {step.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white font-display">
                      {step.title}
                    </h3>

                    <p className="text-xs text-ivory-200/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SECTION 5: LOOKING AHEAD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ivory-100/60 rounded-3xl border border-ivory-200/90 p-8 sm:p-12 lg:p-14 shadow-subtle">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span>Future Growth</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-forest-800 font-display">
              Looking Ahead
            </h2>

            <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed">
              While our current trade focus remains squarely on vermicompost and organic fertilizers, CR Global may evaluate additional agricultural and sustainable product categories as our business relationships and trade network grow.
            </p>

            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
              Any future product additions will be approached with the same dedication to requirement review, responsible coordination, and thorough verification before being offered to global buyers.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-forest-900 text-ivory-100 p-8 sm:p-14 text-center border border-forest-800 shadow-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-forest-700/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
              Let's Build a Long-Term Partnership
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/90 leading-relaxed">
              Whether you are exploring bulk vermicompost sourcing or looking to establish an ongoing supply dialogue in India, we welcome the opportunity to connect.
            </p>

            <div className="pt-2">
              <Button to="/contact" variant="gold" size="lg" className="shadow-md">
                <span>Connect With CR Global</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
