/**
 * CR Global - Centralized Site & Business Configuration
 * 
 * Edit this file to customize company credentials, statutory registrations,
 * contact details, and certifications before client handover.
 */

export const siteConfig = {
  company: {
    name: "CR Global",
    legalName: "CR Global Export & Import Private Limited",
    shortName: "CR Global Exim",
    tagline: "Connecting Indian Agricultural Excellence with the World",
    subTagline: "Government Recognized Star Export House | Sortex Processed Agro Commodities",
    establishedYear: 2012,
    cin: "U51909GJ2012PTC071234",
    iec: "0812034981", // Directorate General of Foreign Trade (DGFT) IEC
    gstin: "24AAACC1234F1Z9",
    pan: "AAACC1234F",
    fssaiLicense: "10020021005678",
    apedaReg: "APEDA/RCMC/2014/19823",
    spicesBoardReg: "SB/EXP/RCMC/GJ/2015/0981",
    fieoMembership: "FIEO/WR/2016/5432",
    fdaRegistration: "FDA-REG-189234901",
    isoNumber: "ISO 22000:2018 & ISO 9001:2015 Certified"
  },

  contact: {
    primaryPhone: "+91 98765 43210",
    phoneDisplay: "+91 (0) 98765-43210",
    secondaryPhone: "+91 22 6789 0123",
    whatsappNumber: "919876543210", // No plus or dashes for API
    whatsappDisplay: "+91 98765 43210",
    whatsappDefaultMessage: "Hello CR Global, I am interested in importing agro-commodities. Please share your catalog and latest FOB/CIF rates.",
    
    emails: {
      inquiry: "exports@crglobalexim.com",
      sales: "sales@crglobalexim.com",
      logistics: "shipping@crglobalexim.com",
      compliance: "quality@crglobalexim.com"
    },

    headOffice: {
      title: "Corporate Headquarters",
      addressLine1: "Suite 701-704, Trade Horizon Towers",
      addressLine2: "S.G. Highway, Bodakdev",
      city: "Ahmedabad",
      state: "Gujarat",
      postalCode: "380054",
      country: "India",
      timezone: "IST (UTC +5:30)",
      operatingHours: "Monday - Saturday: 09:30 AM - 07:00 PM IST"
    },

    warehouseLogisticsHub: {
      title: "Export Processing & Sortex Terminal",
      addressLine1: "Plot No. 42-45, Agro GIDC Industrial Estate",
      addressLine2: "Near Mundra Port Highway",
      city: "Gandhidham / Mundra Belt",
      state: "Gujarat",
      postalCode: "370201",
      country: "India",
      proximityNote: "Strategic proximity (~45 km) to Mundra & Kandla Gateway Seaports"
    },

    social: {
      linkedin: "https://www.linkedin.com/company/cr-global-exim",
      whatsapp: "https://wa.me/919876543210",
      indiamart: "https://www.indiamart.com/crglobalexim",
      tradeindia: "https://www.tradeindia.com/Seller-crglobal"
    }
  },

  metrics: [
    { label: "Export Destinations", value: "35+", note: "GCC, EU, Far East & Americas" },
    { label: "Annual Volume Shipped", value: "48,000+", unit: "Metric Tons", note: "Sortex Cleaned Commodities" },
    { label: "Years in Global Trade", value: "14+", note: "Unbroken Delivery Record" },
    { label: "Sortex Purity Standard", value: "99.5%", note: "Machine & Optical Graded" }
  ],

  gatewayPorts: [
    {
      name: "Mundra Port (APSEZ)",
      code: "INMUN1",
      state: "Gujarat",
      distanceFromPlant: "45 km",
      types: ["Dry Bulk Containers", "Breakbulk", "Reefer Services"],
      advantages: "Largest private commercial port in India with direct container liner services to Jebel Ali, Rotterdam, Singapore & New York."
    },
    {
      name: "Jawaharlal Nehru Port (JNPT / Nhava Sheva)",
      code: "INNSA1",
      state: "Maharashtra",
      distanceFromPlant: "Direct Rail Corridor",
      types: ["High-Frequency Container Feeder", "Dry FCL"],
      advantages: "India's premier container hub with comprehensive transshipment connections worldwide."
    },
    {
      name: "Kandla / Deendayal Port",
      code: "IXY",
      state: "Gujarat",
      distanceFromPlant: "50 km",
      types: ["Agri Bulk Vessels", "FCL Container Stuffing"],
      advantages: "Low handling turnaround and dedicated agri-berths for bulk cargo export."
    },
    {
      name: "Chennai Port",
      code: "INMAA1",
      state: "Tamil Nadu",
      distanceFromPlant: "South India Hub",
      types: ["Direct SE Asia & Far East Routes"],
      advantages: "Fast transit times to Malaysia, Indonesia, Vietnam, and East Asia."
    }
  ],

  incoterms: [
    { code: "FOB", name: "Free on Board", description: "Mundra / JNPT Nhava Sheva port loading included. Buyer arranges sea freight." },
    { code: "CIF", name: "Cost, Insurance and Freight", description: "Delivered to any destination seaport globally with Marine Cargo Insurance." },
    { code: "CFR", name: "Cost and Freight", description: "Delivered to your port of discharge with ocean freight pre-paid." },
    { code: "EXW", name: "Ex Works", description: "Packed and ready for pickup directly from our processing terminal in Gujarat." }
  ],

  paymentTerms: [
    { code: "LC", name: "Irrevocable Confirmed L/C at Sight", note: "Issued by prime tier-1 international banks" },
    { code: "TT_ADVANCE", name: "T/T (Telegraphic Transfer)", note: "30% Advance Deposit + 70% against BL & SGS inspection scan" },
    { code: "CAD", name: "Cash Against Documents (CAD)", note: "Available for established repeat institutional clients" }
  ],

  certifications: [
    {
      id: "iec",
      name: "DGFT Import Export Code (IEC)",
      authority: "Ministry of Commerce & Industry, Govt. of India",
      code: "IEC: 0812034981",
      tag: "Statutory",
      description: "Official legal license permitting cross-border commercial exports and international trade transactions."
    },
    {
      id: "apeda",
      name: "APEDA Registration",
      authority: "Agricultural & Processed Food Products Export Development Authority",
      code: "RCMC No. 19823",
      tag: "Agri Council",
      description: "Mandatory statutory registration certifying compliant export of grains, pulses, fresh produce, and food grains."
    },
    {
      id: "spices-board",
      name: "Spices Board of India",
      authority: "Ministry of Commerce & Industry, Govt. of India",
      code: "Reg: SB/EXP/RCMC/0981",
      tag: "Spice Board",
      description: "Guarantees authentic Indian origin, stringent pesticide limits, and aflatoxin screening for exported whole & ground spices."
    },
    {
      id: "fssai",
      name: "FSSAI Central Export License",
      authority: "Food Safety and Standards Authority of India",
      code: "Lic. No: 10020021005678",
      tag: "Food Safety",
      description: "Apex Indian food safety authority authorization for export food processing, grading, packaging, and hygienic storage."
    },
    {
      id: "fieo",
      name: "FIEO Star Export House",
      authority: "Federation of Indian Export Organisations",
      code: "Member: FIEO/WR/5432",
      tag: "Trade Apex",
      description: "Recognition as a verified Indian enterprise committed to international trade ethics and export performance."
    },
    {
      id: "iso22000",
      name: "ISO 22000:2018 (FSMS)",
      authority: "International Organization for Standardization",
      code: "FSMS-IN-2022-81",
      tag: "Global Standard",
      description: "Internationally audited Food Safety Management System covering the entire farm-to-container processing lifecycle."
    },
    {
      id: "halal",
      name: "Halal Certification",
      authority: "Jamiat Ulama-i-Hind Halal Trust / Halal India",
      code: "HAL-IND-88124",
      tag: "Compliance",
      description: "Compliant with Islamic dietary laws for supply to GCC, Middle East, Southeast Asia, and North African markets."
    },
    {
      id: "usfda",
      name: "US FDA Registered Facility",
      authority: "United States Food and Drug Administration",
      code: "Registration: 189234901",
      tag: "North America",
      description: "Facility registered under the US FSMA (Food Safety Modernization Act) for lawful export to the United States."
    },
    {
      id: "sgs",
      name: "SGS / Geo-Chem Inspection",
      authority: "Independent Third-Party Surveyors",
      code: "Pre-Shipment Inspection",
      tag: "Testing Quality",
      description: "Every export container is eligible for independent pre-shipment sampling, laboratory purity testing, and weight verification."
    }
  ],

  exportDestinations: [
    {
      region: "Middle East & GCC",
      countries: ["United Arab Emirates (Dubai, Jebel Ali)", "Saudi Arabia (Jeddah, Dammam)", "Oman (Sohar)", "Qatar (Hamad)", "Kuwait"],
      keyProducts: ["Basmati & Non-Basmati Rice", "Sortex Cumin Seeds", "Turmeric Fingers", "Green Cardamom", "Sesame Seeds"],
      transitTime: "3 - 5 Days from Mundra / JNPT"
    },
    {
      region: "Europe & UK",
      countries: ["United Kingdom (Felixstowe)", "Germany (Hamburg)", "Netherlands (Rotterdam)", "Spain (Valencia)", "Italy (Genoa)"],
      keyProducts: ["Sterilized Whole Spices", "Sortex Sesame Seeds (99.95%)", "Psyllium Husk", "Dehydrated Onion & Garlic"],
      transitTime: "18 - 24 Days"
    },
    {
      region: "Southeast Asia",
      countries: ["Singapore", "Malaysia (Port Klang)", "Vietnam (Hai Phong, Ho Chi Minh)", "Indonesia (Jakarta)", "Thailand"],
      keyProducts: ["Red Dry Chilli (Teja / Sannam)", "Coriander Seeds", "Yellow Corn / Maize", "Groundnuts / Peanuts"],
      transitTime: "10 - 14 Days"
    },
    {
      region: "North America",
      countries: ["United States (New York, Los Angeles, Houston)", "Canada (Vancouver, Montreal)"],
      keyProducts: ["Organic Spices", "Basmati Rice", "Guar Gum", "Fennel Seeds", "Cumin Powder"],
      transitTime: "24 - 32 Days"
    },
    {
      region: "Africa & CIS",
      countries: ["Kenya (Mombasa)", "Tanzania (Dar es Salaam)", "South Africa (Durban)", "Russia (St. Petersburg)"],
      keyProducts: ["Non-Basmati Parboiled Rice", "Chickpeas (Kabuli Chana)", "Sugar", "Sorghum / Millets"],
      transitTime: "12 - 20 Days"
    }
  ],

  packagingOptions: [
    {
      name: "New Multiwall Paper & Poly Bags",
      sizes: "15 kg, 20 kg, 25 kg, 50 kg",
      materials: "BOPP / Food Grade Polyethylene Inner Liner",
      idealFor: "Spices, Seeds, Flours, Pulses",
      features: "Moisture-barrier, anti-tamper heat sealed, high tensile strength"
    },
    {
      name: "Traditional Export Jute / Hessian Bags",
      sizes: "25 kg, 50 kg, 60 kg",
      materials: "Hydrocarbon-Free Treated Jute",
      idealFor: "Grains, Raw Seeds, Coffee, Unprocessed Spices",
      features: "Breathable natural fiber, protects against condensation during long ocean voyages"
    },
    {
      name: "FIBC Bulk Jumbo Bags (Big Bags)",
      sizes: "500 kg, 1,000 kg, 1,250 kg",
      materials: "UV-Stabilized Polypropylene with Discharge Spout & Lifting Loops",
      idealFor: "Bulk commodity shipments, industrial processing feed, grains",
      features: "Crane-ready, maximum payload efficiency for container stuffing"
    },
    {
      name: "Vacuum & Nitrogen Flushed Pouches",
      sizes: "500g, 1 kg, 2 kg, 5 kg",
      materials: "High-Barrier 3-Ply Foil Laminate",
      idealFor: "Retail-ready spices, dehydrated products, organic seeds",
      features: "Preserves essential volatile oils, color, and aroma for up to 24 months"
    },
    {
      name: "OEM Private Label Packaging",
      sizes: "Custom Buyer Requirements",
      materials: "Printed Cartons, Stand-Up Zipper Pouches, Jars",
      idealFor: "Supermarket chains, overseas distributors, private brands",
      features: "Full color graphic branding, destination country barcode & nutritional labeling"
    }
  ]
};
