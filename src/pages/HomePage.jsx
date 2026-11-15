import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import MetricsStrip from '../components/home/MetricsStrip';
import CompanyOverview from '../components/home/CompanyOverview';
import FeaturedCategories from '../components/home/FeaturedCategories';
import ProcessingPipeline from '../components/home/ProcessingPipeline';
import CertificationsMarquee from '../components/home/CertificationsMarquee';
import GlobalPresenceMap from '../components/home/GlobalPresenceMap';
import QuickInquiryBanner from '../components/home/QuickInquiryBanner';

export default function HomePage({ setActivePage, onOpenRFQ, onSelectCategory }) {
  return (
    <div className="space-y-0">
      {/* Hero Section with Live Slider */}
      <HeroSlider
        onOpenCatalog={() => setActivePage('products')}
        onOpenRFQ={onOpenRFQ}
      />

      {/* Verifiable Operational Metrics Strip */}
      <MetricsStrip />

      {/* Corporate Overview & Direct Mandi Sourcing */}
      <CompanyOverview
        onLearnMore={() => setActivePage('about')}
        onOpenRFQ={onOpenRFQ}
      />

      {/* Core Export Product Categories */}
      <FeaturedCategories
        onSelectCategory={(catId) => {
          if (onSelectCategory) onSelectCategory(catId);
          setActivePage('products');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* 4-Stage Farm-to-Port Quality Lifecycle */}
      <ProcessingPipeline
        onOpenRFQ={onOpenRFQ}
      />

      {/* Statutory Certifications & Export Councils Marquee */}
      <CertificationsMarquee
        onViewAllCertifications={() => setActivePage('certifications')}
      />

      {/* Global Export Presence & Gateway Seaport Connectivity */}
      <GlobalPresenceMap
        onOpenRFQ={onOpenRFQ}
      />

      {/* Quick B2B Inquiry CTA */}
      <QuickInquiryBanner
        onOpenRFQ={onOpenRFQ}
      />
    </div>
  );
}
