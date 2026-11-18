import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-charcoal-800 font-sans selection:bg-forest-800 selection:text-ivory-100">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
