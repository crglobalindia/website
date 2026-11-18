/**
 * CR Global - Centralized Site & Business Configuration
 * 
 * Domain: https://crglobalindia.com/
 * Tagline: Creating Enduring Value
 * Business: India-based B2B sourcing and international trade,
 * currently focused on vermicompost and organic fertilizers.
 */

export const siteConfig = {
  company: {
    name: "CR Global",
    tagline: "Creating Enduring Value",
    domain: "https://crglobalindia.com",
    description: "India-based B2B sourcing and international trade, currently focused on premium vermicompost and organic fertilizers, with expanding product verticals for global markets.",
    focus: "B2B Sourcing & International Trade"
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { 
      name: "Products", 
      path: "/products",
      submenu: [
        { name: "All Products", path: "/products" },
        { name: "Vermicompost", path: "/products/vermicompost" }
      ]
    },
    { name: "Export Enquiries", path: "/export-enquiries" },
    { name: "Contact", path: "/contact" }
  ],

  contact: {
    email: "info@crglobalindia.com",
    inquiriesEmail: "export@crglobalindia.com",
    phone: "+91 95291 02748",
    phoneRaw: "+919529102748",
    whatsappNumber: "919529102748",
    whatsappDisplay: "+91 95291 02748",
    location: "India",
    whatsappMessage: "Hello CR Global, I am interested in sourcing vermicompost and organic fertilizers. Please share product specifications and quotation."
  }
};

