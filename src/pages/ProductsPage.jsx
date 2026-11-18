import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import Button from '../components/common/Button';
import SEO from '../components/common/SEO';
import { Sprout, ArrowRight, Check, Package, Sparkles } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="space-y-16 pb-16">
      <SEO
        title="Products Portfolio | CR Global — Indian Organic Fertilizer Sourcing"
        description="Explore Indian vermicompost and organic fertilizer sourcing portfolios for international B2B agricultural and commercial buyers."
        canonicalPath="/products"
      />

      <PageHeader
        title="Products Portfolio"
        subtitle="Sourcing premium organic agricultural inputs and fertilizers directly from Indian processing hubs for global distribution."
        breadcrumb="Products"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Flagship Product Showcase: Vermicompost */}
        <section className="bg-ivory-50/80 rounded-3xl border border-ivory-200 p-8 sm:p-12 lg:p-14 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-gold-400 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Flagship Export Product</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-forest-800 font-display">
                Pure Organic Vermicompost
              </h2>

              <p className="text-charcoal-700 leading-relaxed text-sm sm:text-base">
                Bio-converted organic matter produced through controlled earthworm cultivation. Rich in bio-available NPK, micronutrients, beneficial microbial flora, and natural plant growth hormones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <Check className="w-4 h-4 text-forest-800 shrink-0" />
                  <span>100% Organic & Non-Toxic</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <Check className="w-4 h-4 text-forest-800 shrink-0" />
                  <span>Optimal Moisture & Screened Granules</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <Check className="w-4 h-4 text-forest-800 shrink-0" />
                  <span>High Humic Acid & Microbial Density</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-charcoal-800">
                  <Check className="w-4 h-4 text-forest-800 shrink-0" />
                  <span>Available in 25kg, 50kg & 1MT Jumbo Bags</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Button to="/products/vermicompost" variant="primary">
                  <span>Detailed Specifications & Grades</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button to="/export-enquiries" variant="gold">
                  <span>Request Bulk Quote</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-ivory-200/90 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-forest-800 text-gold-500 flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-forest-800 font-display">
                Bulk Export Packaging
              </h3>
              <p className="text-xs text-charcoal-600 leading-relaxed">
                Packaged to maintain biological integrity during container ocean transit. We offer export-grade HDPE/PP laminated bags, bulk FIBC jumbo sacks, and customized buyer branding.
              </p>
              <div className="pt-2 border-t border-ivory-200 text-xs text-charcoal-500">
                Container Stuffing: 20ft & 40ft FCL options available.
              </div>
            </div>

          </div>
        </section>

        {/* Future Expansion Vertical Preview */}
        <section className="border-t border-ivory-200 pt-12">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-forest-800 font-display">
              Portfolio Roadmap & Expansion Verticals
            </h3>
            <p className="text-sm text-charcoal-600 mt-2 leading-relaxed">
              In line with our mission of creating enduring value, CR Global is selectively developing supply channels for additional sustainable agricultural inputs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-dashed border-ivory-300 bg-ivory-50/50">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded-md">
                In Development
              </span>
              <h4 className="text-lg font-bold text-forest-800 mt-3 font-display">
                Specialized Organic Soil Conditioners
              </h4>
              <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                Enhanced bio-char and microbial inoculants for dry-land reclamation and commercial horticulture.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-dashed border-ivory-300 bg-ivory-50/50">
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-2.5 py-1 rounded-md">
                In Development
              </span>
              <h4 className="text-lg font-bold text-forest-800 mt-3 font-display">
                Custom Liquid Bio-Extracts & Enrichers
              </h4>
              <p className="text-xs text-charcoal-600 mt-1 leading-relaxed">
                Concentrated organic formulations for precision fertigation and large-scale drip irrigation systems.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
