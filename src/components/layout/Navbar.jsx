import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight, Sprout, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProductsDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Products',
      path: '/products',
      hasSubmenu: true,
      submenu: [
        { label: 'All Products', path: '/products', description: 'B2B organic agricultural catalog' },
        { label: 'Vermicompost', path: '/products/vermicompost', description: 'Premium nutrient-rich organic bio-fertilizer' }
      ]
    },
    { label: 'Export Enquiries', path: '/export-enquiries' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-ivory-200/90 shadow-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand Name */}
          {/* Official Company Logo */}
          <Link
            to="/"
            className="flex items-center select-none shrink-0 py-1"
            aria-label="CR Global - Home"
          >
            <img
              src="/images/cr-global-logo.png"
              alt="CR Global - Creating Enduring Value"
              className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasSubmenu) {
                const isProductsActive = location.pathname.startsWith('/products');
                return (
                  <div
                    key={link.path}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setProductsDropdownOpen(true)}
                    onMouseLeave={() => setProductsDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `px-3.5 py-2 text-sm font-semibold rounded-lg transition-all inline-flex items-center gap-1.5 ${
                          isActive || isProductsActive
                            ? 'text-forest-800 bg-ivory-100 font-bold'
                            : 'text-charcoal-700 hover:text-forest-800 hover:bg-ivory-100/60'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-charcoal-500 transition-transform duration-200 ${
                          productsDropdownOpen ? 'rotate-180 text-forest-800' : ''
                        }`}
                      />
                    </NavLink>

                    {/* Submenu Dropdown */}
                    {productsDropdownOpen && (
                      <div className="absolute left-0 top-full pt-2 w-72 animate-in fade-in slide-in-from-top-1 duration-150">
                        <div className="bg-white rounded-xl shadow-card border border-ivory-200 p-2 overflow-hidden">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setProductsDropdownOpen(false)}
                              className="block p-3 rounded-lg hover:bg-ivory-100/80 transition-colors group/sub"
                            >
                              <div className="text-sm font-bold text-forest-800 group-hover/sub:text-forest-900 flex items-center justify-between">
                                <span>{subItem.label}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-gold-500 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-0.5 transition-all" />
                              </div>
                              <p className="text-xs text-charcoal-500 mt-0.5 leading-snug">
                                {subItem.description}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-semibold rounded-lg transition-all relative ${
                      isActive
                        ? 'text-forest-800 bg-ivory-100 font-bold'
                        : 'text-charcoal-700 hover:text-forest-800 hover:bg-ivory-100/60'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/export-enquiries"
              className="bg-forest-800 hover:bg-forest-900 text-ivory-100 text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-card flex items-center gap-2 group border border-forest-700"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4 text-gold-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <Link
              to="/export-enquiries"
              className="bg-forest-800 text-gold-500 px-3 py-2 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm"
            >
              <span>Quote</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-charcoal-700 hover:text-forest-800 hover:bg-ivory-100 transition-colors focus:outline-none focus:ring-2 focus:ring-forest-800"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-ivory-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              if (link.hasSubmenu) {
                const isProductsActive = location.pathname.startsWith('/products');
                return (
                  <div key={link.path} className="space-y-1">
                    <div className="flex items-center justify-between px-4 py-3 rounded-lg hover:bg-ivory-50">
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`text-base font-semibold ${
                          isProductsActive ? 'text-forest-800 font-bold' : 'text-charcoal-800'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                        className="p-1 text-charcoal-500"
                        aria-label="Toggle products submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileProductsOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {mobileProductsOpen && (
                      <div className="pl-6 pr-2 py-1 space-y-1 bg-ivory-50/70 rounded-lg border-l-2 border-forest-800/40 ml-4">
                        {link.submenu.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                isActive
                                  ? 'text-forest-800 font-bold bg-white shadow-xs'
                                  : 'text-charcoal-700 hover:text-forest-800'
                              }`
                            }
                          >
                            {subItem.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-ivory-100 text-forest-800 border-l-4 border-gold-500 font-bold'
                        : 'text-charcoal-800 hover:bg-ivory-50 hover:text-forest-800'
                    }`
                  }
                >
                  <span>{link.label}</span>
                </NavLink>
              );
            })}

            {/* Mobile Quote CTA */}
            <div className="pt-4 border-t border-ivory-200 mt-2">
              <Link
                to="/export-enquiries"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-forest-800 hover:bg-forest-900 text-ivory-100 font-bold py-3.5 px-4 rounded-lg text-center flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-gold-500" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
