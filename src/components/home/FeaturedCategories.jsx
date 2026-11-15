import React from 'react';
import { Flame, Wheat, Sparkles, Layers, ArrowRight } from 'lucide-react';

export default function FeaturedCategories({ onSelectCategory }) {
  const categories = [
    {
      id: 'spices',
      title: 'Whole Spices & Condiments',
      tag: 'HS CHAPTER 09',
      icon: <Flame className="w-6 h-6 text-amber-600" />,
      bgIcon: 'bg-amber-50 border-amber-200',
      description: 'Sortex cleaned Cumin seeds, double polished Turmeric fingers, high-heat Teja chillies, Coriander, Fennel & Cardamom.',
      items: ['Cumin Seeds 99.5% Sortex', 'Turmeric Fingers (Curcumin 4%+)', 'Teja S17 Red Chillies', 'Fennel Seeds Green'],
      accentColor: 'border-l-amber-500 hover:border-amber-500'
    },
    {
      id: 'grains',
      title: 'Basmati Rice & Grains',
      tag: 'HS CHAPTER 10',
      icon: <Wheat className="w-6 h-6 text-blue-600" />,
      bgIcon: 'bg-blue-50 border-blue-200',
      description: 'Aged 1121 Steam & Sella Basmati rice, IR-64 Parboiled rice, Yellow corn maize, and milling grade wheat.',
      items: ['1121 Steam Basmati (8.35mm+)', '1121 Golden Sella Parboiled', 'IR-64 Parboiled Rice', 'Yellow Maize Feed Grade'],
      accentColor: 'border-l-blue-600 hover:border-blue-600'
    },
    {
      id: 'oilseeds',
      title: 'Oilseeds & Groundnuts',
      tag: 'HS CHAPTER 12',
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      bgIcon: 'bg-emerald-50 border-emerald-200',
      description: 'Auto-Sortex Natural white sesame seeds 99.95%, Bold HPS groundnuts/peanuts, and pure flax seeds.',
      items: ['White Sesame 99.95% Sortex', 'Bold Peanuts (40/50, 50/60)', 'Hulled Sesame Seeds', 'Black Sesame Seeds'],
      accentColor: 'border-l-emerald-500 hover:border-emerald-500'
    },
    {
      id: 'specialty',
      title: 'Specialty, Pulses & Dehydrated',
      tag: 'HS CHAPTER 07 / 12',
      icon: <Layers className="w-6 h-6 text-purple-600" />,
      bgIcon: 'bg-purple-50 border-purple-200',
      description: 'USP Grade Psyllium Husk (Isabgol 99%), Dehydrated white/red onion flakes, and calibrated Kabuli chickpeas.',
      items: ['Psyllium Husk 99% Pure', 'Dehydrated Onion Flakes', 'Kabuli Chickpeas (75-80)', 'Dehydrated Garlic Granules'],
      accentColor: 'border-l-purple-500 hover:border-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest mb-2">
              EXPORT PRODUCT DIVISIONS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-display tracking-tight">
              Core Agro-Commodity Portfolios
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-2xl">
              Procured from verified Indian origins, cleaned with Buhler optical sortex sorters, and packaged in customized containers for international buyers.
            </p>
          </div>

          <button
            onClick={() => onSelectCategory('all')}
            className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-navy-900 font-bold hover:text-amber-600 transition-colors text-sm group"
          >
            <span>View Full 2026 Catalog</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-amber-500" />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group border-l-4 ${cat.accentColor}`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${cat.bgIcon}`}>
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {cat.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-amber-700 transition-colors font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                {/* Micro Item Badges */}
                <div className="space-y-1.5 pt-2 border-t border-slate-200/60">
                  {cat.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-amber-500 transition-colors" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between text-xs font-bold text-navy-900 group-hover:text-amber-600 transition-colors">
                <span>Explore Specifications</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
