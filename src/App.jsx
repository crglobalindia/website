import React, { useState, useEffect } from 'react';
import TopUtilityBar from './components/layout/TopUtilityBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';
import RFQModal from './components/rfq/RFQModal';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import CertificationsPage from './pages/CertificationsPage';
import InfrastructurePage from './pages/InfrastructurePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // RFQ modal state
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [rfqProduct, setRfqProduct] = useState(null);
  const [rfqContainer, setRfqContainer] = useState(null);

  // Sync with browser URL hash for SEO & bookmarking on static hosting
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validPages = ['home', 'about', 'products', 'certifications', 'infrastructure', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRFQ = (product = null, container = null) => {
    setRfqProduct(product);
    setRfqContainer(container);
    setIsRFQOpen(true);
  };

  const handleCloseRFQ = () => {
    setIsRFQOpen(false);
    setRfqProduct(null);
    setRfqContainer(null);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'about':
        return (
          <AboutPage
            setActivePage={handleNavigate}
            onOpenRFQ={() => handleOpenRFQ()}
          />
        );

      case 'products':
        return (
          <ProductsPage
            setActivePage={handleNavigate}
            onOpenRFQ={() => handleOpenRFQ()}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onOpenRFQWithProduct={(product, container) => handleOpenRFQ(product, container)}
          />
        );

      case 'certifications':
        return (
          <CertificationsPage
            setActivePage={handleNavigate}
            onOpenRFQ={() => handleOpenRFQ()}
          />
        );

      case 'infrastructure':
        return (
          <InfrastructurePage
            setActivePage={handleNavigate}
            onOpenRFQ={() => handleOpenRFQ()}
          />
        );

      case 'contact':
        return (
          <ContactPage
            setActivePage={handleNavigate}
            initialProduct={rfqProduct}
            initialContainer={rfqContainer}
          />
        );

      case 'home':
      default:
        return (
          <HomePage
            setActivePage={handleNavigate}
            onOpenRFQ={() => handleOpenRFQ()}
            onSelectCategory={(catId) => setSelectedCategory(catId)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      
      {/* Top Utility Bar (Contacts & IST Clock) */}
      <TopUtilityBar onOpenRFQ={() => handleOpenRFQ()} />

      {/* Sticky Main Navigation */}
      <Navbar
        activePage={activePage}
        setActivePage={handleNavigate}
        onOpenRFQ={() => handleOpenRFQ()}
      />

      {/* Page Content Body */}
      <main className="flex-grow">
        {renderActivePage()}
      </main>

      {/* Multi-Column EXIM Footer */}
      <Footer
        setActivePage={handleNavigate}
        onOpenRFQ={() => handleOpenRFQ()}
      />

      {/* Floating Bottom-Right WhatsApp Fast Connect */}
      <FloatingWhatsApp />

      {/* Global RFQ Modal */}
      <RFQModal
        isOpen={isRFQOpen}
        onClose={handleCloseRFQ}
        initialProduct={rfqProduct}
        initialContainer={rfqContainer}
      />

    </div>
  );
}
