import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import VermicompostPage from './pages/VermicompostPage';
import ExportEnquiriesPage from './pages/ExportEnquiriesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Exactly 6 Page Routes */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/vermicompost" element={<VermicompostPage />} />
          <Route path="export-enquiries" element={<ExportEnquiriesPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Graceful 404 Fallback redirecting to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
