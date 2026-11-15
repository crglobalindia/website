/**
 * CR Global - Export Product Catalog
 * 
 * Comprehensive B2B Agri-Commodities & EXIM Catalog
 * Modeled after leading Indian export portals (Ashadhan, Uma Exports, Kankas, Jesvil).
 */

export const productCategories = [
  { id: "all", label: "All Commodities", icon: "Boxes" },
  { id: "spices", label: "Spices & Condiments", icon: "Flame" },
  { id: "grains", label: "Grains & Basmati Rice", icon: "Wheat" },
  { id: "oilseeds", label: "Oilseeds & Nuts", icon: "Sparkles" },
  { id: "pulses", label: "Pulses & Legumes", icon: "CircleDot" },
  { id: "specialty", label: "Specialty & Dehydrated", icon: "Layers" }
];

export const products = [
  // ==================== SPICES & CONDIMENTS ====================
  {
    id: "cumin-seeds",
    name: "Cumin Seeds (Jeera)",
    botanicalName: "Cuminum cyminum",
    category: "spices",
    categoryLabel: "Spices & Condiments",
    hsCode: "09093129",
    origin: "Gujarat & Rajasthan, India",
    purity: "99.5% Sortex Cleaned",
    gradeOptions: [
      "Machine Cleaned 99%",
      "Sortex Cleaned 99.5% (Europe Quality)",
      "Singapore Quality 99%",
      "Ground Cumin Powder"
    ],
    moisture: "Max 8.5% - 9.0%",
    admixture: "Max 0.5% (Sortex) / Max 1.0% (Machine Cleaned)",
    specs: {
      "Volatile Oil": "Min 2.5% to 3.2% (v/w)",
      "Total Ash": "Max 8.0%",
      "Acid Insoluble Ash": "Max 1.0%",
      "Salmonella / E. coli": "Absent in 25g (per ISO standards)",
      "Aflatoxin": "Total B1+B2+G1+G2 < 10 ppb (EU Norms)",
      "Fumigation": "Methyl Bromide / Aluminium Phosphide treated"
    },
    moq: "1 x 20ft FCL (~13 - 14 Metric Tons)",
    fcl20: "13.5 - 14.0 Metric Tons",
    fcl40: "26.0 - 27.0 Metric Tons",
    packaging: "25 kg / 50 kg BOPP Paper Bags, PP Woven Bags, Jute Bags, or Vacuum Bags",
    shelfLife: "24 Months in dry storage",
    cropSeason: "February to April (Available year-round from temperature-controlled warehouses)",
    featured: true,
    tag: "High Demand Export",
    badgeColor: "amber",
    description: "Handpicked and Sortex optical-cleaned whole cumin seeds from Unjha Mandi (Gujarat), the world capital of cumin. Characterized by high volatile oil content, warm aroma, and uniform olive-brown color. Free from foreign matter, stones, and weed seeds."
  },
  {
    id: "turmeric-fingers",
    name: "Turmeric Fingers & Powder (Haldi)",
    botanicalName: "Curcuma longa",
    category: "spices",
    categoryLabel: "Spices & Condiments",
    hsCode: "09103020",
    origin: "Salem & Nizamabad, India",
    purity: "99.0% Machine Cleaned & Polished",
    gradeOptions: [
      "Salem Double Polished Fingers (Curcumin 4.5% - 5.5%)",
      "Nizamabad Polished Fingers (Curcumin 2.5% - 3.5%)",
      "Rajapore Round / Bulbs",
      "Ultra-Fine Turmeric Powder (80-100 Mesh)"
    ],
    moisture: "Max 9.0% - 10.0%",
    admixture: "Max 1.0%",
    specs: {
      "Curcumin Content": "3.0% to 5.5% (HPLC tested)",
      "Total Ash": "Max 7.0%",
      "Acid Insoluble Ash": "Max 1.5%",
      "Chromate / Lead / Sudans": "Strictly Negative (100% pure)",
      "Foreign Matter": "Nil to Max 0.5%",
      "Pebbles / Stones": "Nil"
    },
    moq: "1 x 20ft FCL (~16 - 18 Metric Tons)",
    fcl20: "17.0 - 18.0 Metric Tons",
    fcl40: "26.0 - 27.0 Metric Tons",
    packaging: "25 kg / 50 kg New Jute Bags or PP Woven Bags with PE Liners",
    shelfLife: "24 Months",
    cropSeason: "January to March",
    featured: true,
    tag: "Sortex Polished",
    badgeColor: "amber",
    description: "Premium double-polished finger turmeric sourced from Tamil Nadu and Telangana belts. Rich golden-yellow core with verified high curcumin content for food, pharmaceutical, and nutraceutical industries."
  },
  {
    id: "red-dry-chilli",
    name: "Red Dry Chilli (Stemless & With Stem)",
    botanicalName: "Capsicum annuum",
    category: "spices",
    categoryLabel: "Spices & Condiments",
    hsCode: "09042110",
    origin: "Guntur, Andhra Pradesh & Byadgi, Karnataka",
    purity: "99.0% Cleaned & Graded",
    gradeOptions: [
      "Teja (S17) High Pungency Stemless / With Stem",
      "Sannam (S4 / 334) Medium Pungency",
      "Byadgi (High Color ASTA 120 - 160, Low Pungency)",
      "Chilli Flakes (Pizza Cut) & Chilli Powder"
    ],
    moisture: "Max 10.0% - 11.0%",
    admixture: "Max 1.0%",
    specs: {
      "SHU (Pungency)": "Teja: 60,000 - 85,000 SHU | Sannam: 25,000 - 35,000 SHU",
      "Color Value (ASTA)": "50 - 160 ASTA (grade dependent)",
      "Aflatoxin": "< 10 ppb (EU & US compliant)",
      "Loose Seeds": "Max 2.0% - 3.0%",
      "Broken Chillies": "Max 3.0%",
      "Sudan I, II, III, IV": "Negative / Not Detected"
    },
    moq: "1 x 40ft HC FCL (~14 - 15 Metric Tons in Bales)",
    fcl20: "6.5 - 7.0 Metric Tons",
    fcl40: "14.0 - 15.0 Metric Tons (High Cube)",
    packaging: "5 kg, 10 kg, 25 kg Compressed Jute Bales or Poly Bags",
    shelfLife: "12 Months in cold chain (2-8°C recommended for color retention)",
    cropSeason: "December to April",
    featured: true,
    tag: "High Pungency",
    badgeColor: "amber",
    description: "Sun-dried whole red chillies directly from the world's biggest chilli market in Guntur. Available in Teja S17 (high heat for hot sauce and oleoresin) and Byadgi (deep natural crimson color for fine culinary powders)."
  },
  {
    id: "coriander-seeds",
    name: "Coriander Seeds (Dhania)",
    botanicalName: "Coriandrum sativum",
    category: "spices",
    categoryLabel: "Spices & Condiments",
    hsCode: "09092190",
    origin: "Rajasthan, Madhya Pradesh & Gujarat, India",
    purity: "98.5% - 99.0% Machine Cleaned & Sortex",
    gradeOptions: [
      "Eagle Quality",
      "Scooter Quality",
      "Badami Green Whole",
      "Split Coriander Dal (Coriander splits)"
    ],
    moisture: "Max 8.0% - 9.0%",
    admixture: "Max 1.0%",
    specs: {
      "Volatile Oil": "Min 0.3% - 0.5%",
      "Total Ash": "Max 7.0%",
      "Acid Insoluble Ash": "Max 1.5%",
      "Split Seeds": "Max 5% in Whole Grade",
      "Insect Damaged": "Nil / Max 0.5%"
    },
    moq: "1 x 40ft HC FCL (~18 - 20 Metric Tons)",
    fcl20: "9.0 - 10.0 Metric Tons",
    fcl40: "19.0 - 20.0 Metric Tons",
    packaging: "20 kg / 25 kg / 40 kg PP Woven Bags or Jute Bags",
    shelfLife: "24 Months",
    cropSeason: "March to May",
    featured: false,
    tag: "Aromatic Whole",
    badgeColor: "amber",
    description: "Round, aromatic whole coriander seeds featuring a distinctive floral-citrus note. Sourced from Kota and Ramganj Mandi, cleaned via multi-deck sieves and de-stoners."
  },
  {
    id: "fennel-seeds",
    name: "Fennel Seeds (Saunf)",
    botanicalName: "Foeniculum vulgare",
    category: "spices",
    categoryLabel: "Spices & Condiments",
    hsCode: "09096139",
    origin: "Gujarat & Rajasthan, India",
    purity: "99.0% - 99.5% Sortex Cleaned",
    gradeOptions: [
      "Abu Road Extra Green",
      "Singapore Quality (Greenish Yellow)",
      "Europe Quality Sortex 99.5%",
      "Machine Cleaned Regular"
    ],
    moisture: "Max 8.5% - 9.5%",
    admixture: "Max 0.5% (Sortex) / Max 1.0% (Machine Cleaned)",
    specs: {
      "Volatile Oil": "Min 1.2% to 1.8%",
      "Total Ash": "Max 8.0%",
      "Acid Insoluble Ash": "Max 1.2%",
      "Foreign Matter": "Max 0.5%"
    },
    moq: "1 x 20ft FCL (~13 - 14 Metric Tons)",
    fcl20: "13.5 Metric Tons",
    fcl40: "26.0 Metric Tons",
    packaging: "25 kg / 50 kg PP Bags or Paper Bags",
    shelfLife: "24 Months",
    cropSeason: "March to May",
    featured: false,
    tag: "Natural Green",
    badgeColor: "amber",
    description: "Sweet, licorice-scented whole fennel seeds. Sourced from the North Gujarat belt and gently dried to retain natural green hues and essential anethole oil."
  },

  // ==================== GRAINS & BASMATI RICE ====================
  {
    id: "basmati-rice-1121",
    name: "1121 Basmati Rice (Steam / Sella / Raw)",
    botanicalName: "Oryza sativa (Aromatic Basmati)",
    category: "grains",
    categoryLabel: "Grains & Basmati Rice",
    hsCode: "10063020",
    origin: "Punjab & Haryana (Indo-Gangetic Plains), India",
    purity: "95.0% - 98.0% Pure Traditional Basmati Grain",
    gradeOptions: [
      "1121 Steam Basmati Rice (Extra Long Grain 8.35mm+)",
      "1121 Golden Sella (Parboiled) Rice",
      "1121 White Sella Rice",
      "1121 Traditional Raw Rice"
    ],
    moisture: "Max 12.0% - 12.5%",
    admixture: "Max 3.0% - 5.0% non-basmati / other varieties",
    specs: {
      "Average Grain Length (AGL)": "8.35 mm - 8.40 mm before cooking",
      "Cooked Length": "Up to 18.0 mm - 20.0 mm (Elongation Ratio 2.2x+)",
      "Broken Grains": "Max 1.0% (or custom specified)",
      "Damaged / Discolored": "Max 0.5%",
      "Chalky Grains": "Max 2.0% in steam / Nil in sella",
      "Milling Degree": "Well Milled, Double Silky Polished & Sortex 100%"
    },
    moq: "1 x 20ft FCL (~25 - 26 Metric Tons)",
    fcl20: "25.0 - 26.0 Metric Tons",
    fcl40: "27.0 Metric Tons (weight limited)",
    packaging: "1 kg, 5 kg, 10 kg, 20 kg, 25 kg, 40 kg, 50 kg Non-Woven Fabric, BOPP, or Master Carton",
    shelfLife: "24 Months (Naturally aged for 12+ months)",
    cropSeason: "October to December",
    featured: true,
    tag: "Global Bestseller",
    badgeColor: "navy",
    description: "The crown jewel of Indian aromatic long grains. Aged naturally to perfection, 1121 Basmati expands to over double its raw length when cooked without sticking, releasing a delicate floral bouquet favored by top global restaurants and distributors."
  },
  {
    id: "parboiled-rice-ir64",
    name: "Non-Basmati Parboiled Rice (IR-64 / PR-11)",
    botanicalName: "Oryza sativa",
    category: "grains",
    categoryLabel: "Grains & Basmati Rice",
    hsCode: "10063090",
    origin: "Andhra Pradesh, Chhattisgarh & West Bengal, India",
    purity: "99.0% Sortex Cleaned",
    gradeOptions: [
      "IR-64 Parboiled Rice 5% Broken",
      "IR-64 Parboiled Rice 25% Broken",
      "PR-11 / PR-14 White Raw Rice",
      "Sona Masoori Medium Grain Rice"
    ],
    moisture: "Max 13.0% - 14.0%",
    admixture: "Max 1.0%",
    specs: {
      "Average Grain Length": "5.8 mm - 6.2 mm (Long Grain)",
      "Broken Ratio": "5% / 15% / 25% (per buyer contract)",
      "Damaged / Yellow Grains": "Max 1.5%",
      "Paddy Grains": "Max 0.2%",
      "Foreign Matter": "Max 0.25%"
    },
    moq: "2 x 20ft FCL (~50 Metric Tons) or Bulk Vessel Load",
    fcl20: "26.0 Metric Tons",
    fcl40: "27.0 Metric Tons",
    packaging: "25 kg, 50 kg PP Woven Bags with customized buyer shipping marks",
    shelfLife: "24 Months",
    cropSeason: "October to January & May to July",
    featured: false,
    tag: "High Volume Commodity",
    badgeColor: "navy",
    description: "High-yield non-basmati staple parboiled rice engineered for large-scale institutional tenders and wholesale distribution across West Africa, the Middle East, and Southeast Asia."
  },
  {
    id: "yellow-corn-maize",
    name: "Yellow Corn / Maize (Animal Feed & Food Grade)",
    botanicalName: "Zea mays",
    category: "grains",
    categoryLabel: "Grains & Basmati Rice",
    hsCode: "10059000",
    origin: "Bihar, Karnataka & Maharashtra, India",
    purity: "98.0% Machine Cleaned",
    gradeOptions: [
      "Animal Feed Grade (Poultry / Cattle Feed)",
      "Food Grade Human Consumption",
      "Starch Processing Grade"
    ],
    moisture: "Max 13.0% - 14.0%",
    admixture: "Max 1.5% - 2.0%",
    specs: {
      "Crude Protein": "Min 8.5% to 9.0%",
      "Crude Fat": "Min 3.5%",
      "Crude Fiber": "Max 2.5%",
      "Aflatoxin": "Max 20 ppb (Food) / Max 50 ppb (Feed)",
      "Damaged / Weeviled": "Max 2.0%"
    },
    moq: "2 x 20ft FCL (~52 Metric Tons)",
    fcl20: "26.0 Metric Tons",
    fcl40: "27.0 Metric Tons",
    packaging: "50 kg PP Woven Bags or Bulk Container Liners",
    shelfLife: "12 Months",
    cropSeason: "February to April & October to December",
    featured: false,
    tag: "Bulk Feed",
    badgeColor: "navy",
    description: "Golden-yellow dried corn kernels sourced from fertile Indian river basins. High starch and protein profile ideal for commercial animal feed millers and wet-milling factories."
  },

  // ==================== OILSEEDS & NUTS ====================
  {
    id: "sesame-seeds-natural",
    name: "Natural White Sesame Seeds (Sortex 99.95%)",
    botanicalName: "Sesamum indicum",
    category: "oilseeds",
    categoryLabel: "Oilseeds & Nuts",
    hsCode: "12074090",
    origin: "Gujarat & Rajasthan, India",
    purity: "99.95% Auto-Sortex Cleaned",
    gradeOptions: [
      "Auto-Sortex White 99.95% (Europe Quality)",
      "Machine Cleaned 99/1/1",
      "Natural Black Sesame Seeds",
      "Hulled Sesame Seeds (Mechanical Process)"
    ],
    moisture: "Max 5.0% - 6.0%",
    admixture: "Max 0.05% in 99.95% Grade",
    specs: {
      "Oil Content": "Min 48.0% to 50.0%",
      "Free Fatty Acids (FFA)": "Max 1.5% to 2.0%",
      "Salmonella / E. coli": "Absent in 25g",
      "Dark Seeds / Other Colors": "Max 0.05% in Sortex grade",
      "Pesticides / Ethylene Oxide": "ETO-Free / EU MRL Compliant"
    },
    moq: "1 x 20ft FCL (~19 Metric Tons)",
    fcl20: "19.0 Metric Tons",
    fcl40: "26.0 Metric Tons",
    packaging: "25 kg / 50 kg Paper Bags, PP Bags with inner poly lining, or 1000 kg Jumbo Bags",
    shelfLife: "18 Months in cool dry warehouse",
    cropSeason: "October to December",
    featured: true,
    tag: "99.95% Purity",
    badgeColor: "emerald",
    description: "Premium pearl-white natural sesame seeds processed through Buhler optical color sorters in Gujarat. High oil yield and sweet nutty profile sought after by bakery, confectionery, and tahini manufacturers worldwide."
  },
  {
    id: "peanuts-groundnuts",
    name: "Groundnuts / Peanuts (Bold & Java)",
    botanicalName: "Arachis hypogaea",
    category: "oilseeds",
    categoryLabel: "Oilseeds & Nuts",
    hsCode: "12024210",
    origin: "Saurashtra (Gujarat), India",
    purity: "99.0% Hand Picked & Selected (HPS)",
    gradeOptions: [
      "Bold HPS Peanuts (Counts: 38/42, 40/50, 50/60, 60/70)",
      "Java HPS Peanuts (Counts: 50/60, 60/70, 70/80, 80/90)",
      "Blanched Whole Peanuts (Skinless Sortex)",
      "In-Shell Raw Peanuts"
    ],
    moisture: "Max 7.0% - 8.0%",
    admixture: "Max 0.5% - 1.0%",
    specs: {
      "Oil Content": "Min 48.0% to 50.0%",
      "Aflatoxin": "B1+B2+G1+G2 < 4 ppb (strict EU Norms) or < 15 ppb (US/Global)",
      "Split / Broken Kernels": "Max 1.0% (Whole Grade)",
      "Damaged / Shrivelled": "Max 1.0%",
      "IOPEPC Certified": "Registered with Indian Oilseeds & Produce Council"
    },
    moq: "1 x 20ft FCL (~19 Metric Tons)",
    fcl20: "19.0 Metric Tons",
    fcl40: "26.0 Metric Tons",
    packaging: "25 kg / 50 kg Vacuum Pouches, Jute Bags, or Multiwall Paper Bags",
    shelfLife: "12 Months (Reefer container shipping recommended during peak summer)",
    cropSeason: "October to December (Kharif) & March to May (Summer)",
    featured: true,
    tag: "IOPEPC Verified",
    badgeColor: "emerald",
    description: "Saurashtra is globally renowned for cultivating the sweetest, highest oil-content groundnuts. Hand-picked and electronic size-graded, our peanuts meet stringent European aflatoxin thresholds."
  },

  // ==================== PULSES & SPECIALTY ====================
  {
    id: "chickpeas-kabuli",
    name: "Kabuli Chickpeas (Garbanzo Beans)",
    botanicalName: "Cicer arietinum",
    category: "pulses",
    categoryLabel: "Pulses & Legumes",
    hsCode: "07132000",
    origin: "Madhya Pradesh & Maharashtra, India",
    purity: "99.0% Machine Cleaned & Calibrated",
    gradeOptions: [
      "Count 75-80 (Small / Medium)",
      "Count 58-60 (Large 9mm)",
      "Count 44-46 (Jumbo 10mm)",
      "Count 42-44 / 40-42 (Super Jumbo 11-12mm)"
    ],
    moisture: "Max 10.0% - 11.0%",
    admixture: "Max 0.5%",
    specs: {
      "Damaged / Weeviled": "Max 1.0%",
      "Split Seeds": "Max 1.0%",
      "Foreign Matter": "Max 0.2%",
      "Cooking Quality": "Uniform tenderness, zero hardness"
    },
    moq: "1 x 20ft FCL (~24 Metric Tons)",
    fcl20: "24.0 Metric Tons",
    fcl40: "26.0 Metric Tons",
    packaging: "25 kg / 50 kg PP Woven Bags or Master Cartons",
    shelfLife: "24 Months",
    cropSeason: "February to April",
    featured: false,
    tag: "Calibrated Sizes",
    badgeColor: "emerald",
    description: "Nutritious, high-protein white Kabuli chickpeas graded by millimeter sieve size. Ideal for canned food processors, hummus manufacturers, and wholesale bean distributors."
  },
  {
    id: "psyllium-husk",
    name: "Psyllium Husk & Powder (Isabgol)",
    botanicalName: "Plantago ovata",
    category: "specialty",
    categoryLabel: "Specialty & Dehydrated",
    hsCode: "12119032",
    origin: "Sidhpur (Gujarat) & Rajasthan, India",
    purity: "99.0% / 95.0% / 85.0% (USP / EP Grade)",
    gradeOptions: [
      "99% Pure Organic / Conventional Husk",
      "95% Pure Industrial Grade Husk",
      "Psyllium Husk Powder (40 Mesh, 60 Mesh, 100 Mesh)",
      "Psyllium Seeds (Raw Whole)"
    ],
    moisture: "Max 10.0% - 12.0%",
    admixture: "Max 1.0% in 99% grade",
    specs: {
      "Swell Volume": "Min 40 ml/g to 50 ml/g",
      "Heavy Metals": "Lead < 1 ppm, Arsenic < 0.5 ppm, Cadmium < 0.2 ppm",
      "Microbiology": "Gamma Irradiated / Steam Sterilized upon request",
      "Pharmacopeia Standard": "Compliant with USP, BP, EP, and IP monographs"
    },
    moq: "1 x 20ft FCL (~9.5 - 10.0 Metric Tons)",
    fcl20: "9.5 - 10.0 Metric Tons (Volumetric)",
    fcl40: "19.0 - 20.0 Metric Tons",
    packaging: "25 kg Multiwall Paper Bags with inner heat-sealed PE liner",
    shelfLife: "36 Months",
    cropSeason: "March to May",
    featured: true,
    tag: "Pharma / Nutraceutical",
    badgeColor: "emerald",
    description: "India produces over 85% of the world's psyllium husk. CR Global supplies pharmaceutical and food-grade dietary fiber with exceptional swell volume and rigorous heavy-metal screening."
  },
  {
    id: "dehydrated-onion-garlic",
    name: "Dehydrated Onion & Garlic (Flakes, Minced, Powder)",
    botanicalName: "Allium cepa / Allium sativum",
    category: "specialty",
    categoryLabel: "Specialty & Dehydrated",
    hsCode: "07122000",
    origin: "Mahuva (Bhavnagar, Gujarat), India",
    purity: "100% Pure & Sortex Cleaned",
    gradeOptions: [
      "White Onion Flakes / Kibbled",
      "Red Onion Flakes / Minced / Granules / Powder",
      "Dehydrated Garlic Flakes & Cloves",
      "Garlic Granules & Fine Powder (100 Mesh)"
    ],
    moisture: "Max 5.0% - 6.0%",
    admixture: "Nil",
    specs: {
      "Total Plate Count (TPC)": "< 100,000 cfu/g (or Micro-treated < 10,000 cfu/g)",
      "Yeast & Mold": "< 500 cfu/g",
      "E. coli & Salmonella": "Absent in 25g",
      "Sulfur Dioxide (SO2)": "< 50 ppm / Nil added",
      "Hot Water Insoluble": "Max 5.0%"
    },
    moq: "1 x 40ft HC FCL (~14 - 15 Metric Tons)",
    fcl20: "7.0 - 7.5 Metric Tons",
    fcl40: "14.5 - 15.0 Metric Tons",
    packaging: "14 kg / 20 kg Poly-lined Corrugated Cartons or Double Kraft Paper Bags",
    shelfLife: "24 Months",
    cropSeason: "January to June",
    featured: false,
    tag: "Food Ingredients",
    badgeColor: "emerald",
    description: "Mahuva in Gujarat is Asia's premier dehydration cluster. Hot-air convective dried onions and garlic packed with natural pungency, replacing raw bulbs in instant soups, seasonings, and prepared foods."
  }
];

export const getProductById = (id) => products.find(p => p.id === id);

export const getFeaturedProducts = () => products.filter(p => p.featured);

export const getProductsByCategory = (cat) => {
  if (!cat || cat === "all") return products;
  return products.filter(p => p.category === cat);
};
