import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import CategoryFilter from '../components/products/CategoryFilter';
import ProductCard from '../components/products/ProductCard';
import ProductDetailModal from '../components/products/ProductDetailModal';
import ContainerCalculator from '../components/products/ContainerCalculator';
import { products } from '../data/products';
import { FileText, Download } from 'lucide-react';

export default function ProductsPage({
  setActivePage,
  onOpenRFQ,
  selectedCategory,
  setSelectedCategory,
  onOpenRFQWithProduct
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  // Filter products by category and search query
  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      !selectedCategory || selectedCategory === 'all' || p.category === selectedCategory;

    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.botanicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.hsCode.includes(searchQuery) ||
      p.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleEnquire = (prod) => {
    if (onOpenRFQWithProduct) {
      onOpenRFQWithProduct(prod);
    } else {
      onOpenRFQ();
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Agro-Commodities & Export Products Catalog"
        subtitle="Sortex cleaned, laboratory verified, and export-packaged whole spices, Basmati rice, oilseeds, pulses, and specialty food ingredients."
        breadcrumb="Products Catalog"
        onNavHome={() => setActivePage('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Category & Search Filter Bar */}
        <CategoryFilter
          selectedCategory={selectedCategory || 'all'}
          onSelectCategory={(catId) => setSelectedCategory(catId)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          totalCount={products.length}
          filteredCount={filteredProducts.length}
        />

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setActiveModalProduct(prod)}
                onEnquire={handleEnquire}
              />
            ))}
          </div>
        ) : (
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-12 text-center space-y-4">
            <h3 className="text-lg font-bold text-navy-900">No commodities matched your criteria</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              We supply custom agro-commodities beyond this catalog. Submit an RFQ with your desired commodity and HS code.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-navy-900 text-amber-400 font-bold px-5 py-2.5 rounded-xl text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Interactive Ocean Freight Container Calculator */}
        <div className="pt-6">
          <ContainerCalculator
            onOpenRFQWithData={(data) => {
              const matchedProd = products.find(p => p.name === data.productName);
              if (onOpenRFQWithProduct) {
                onOpenRFQWithProduct(matchedProd, data.containerType);
              } else {
                onOpenRFQ();
              }
            }}
          />
        </div>

        {/* Catalog Download Notice Strip */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-navy-900">Need Our Complete Product Specification Sheet (PDF)?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Includes full crop calendar, chemical analysis tolerances, and container stuffing matrices.</p>
          </div>

          <button
            onClick={() => onOpenRFQ()}
            className="bg-white hover:bg-slate-100 text-navy-900 font-bold px-5 py-2.5 rounded-xl text-xs border border-slate-300 shadow-2xs flex items-center gap-2 transition-colors shrink-0"
          >
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Request Technical Specification PDF</span>
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        isOpen={!!activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
        onEnquire={(prod) => {
          setActiveModalProduct(null);
          handleEnquire(prod);
        }}
      />
    </div>
  );
}
