import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Sprout } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function PageHeader({ title, subtitle, breadcrumb, tag }) {
  return (
    <div className="relative bg-forest-900 text-ivory-100 py-14 sm:py-20 border-b border-forest-800 overflow-hidden">
      {/* Subtle organic background grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_70%_20%,rgba(181,139,82,0.3),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F4F1E808_1px,transparent_1px),linear-gradient(to_bottom,#F4F1E808_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-ivory-200/70 mb-4" aria-label="Breadcrumb">
          <Link
            to="/"
            className="hover:text-gold-400 transition-colors flex items-center gap-1 text-ivory-200/90"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-forest-600" />
          <span className="text-gold-400 font-semibold">{breadcrumb || title}</span>
        </nav>

        {/* Title & Tag */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/80 border border-gold-500/30 text-gold-400 text-xs font-medium tracking-wide">
            <Sprout className="w-3.5 h-3.5 text-gold-500" />
            <span>{tag || siteConfig.company.tagline}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-ivory-200/85 leading-relaxed font-normal pt-1 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
