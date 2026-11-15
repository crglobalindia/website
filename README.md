# CR Global - Indian & Global EXIM Commercial Web Platform

![CR Global EXIM](public/favicon.svg)

> **Commercial Client-Handover Ready**: A high-performance, responsive, zero-maintenance static web portal built for **CR Global** (Indian & Global Import-Export Merchant & Manufacturer House), modeled after established Indian EXIM portals (**Kankas Exports**, **Uma Exports**, **Ashadhan Exim**, and **Jesvil Co**).

---

## 🌟 Key Features

- **Structural Flow & Trust Signals**:
  - **Top Utility Bar**: Displays IEC registration, APEDA accreditation, official email, phone, and a live Indian Standard Time (IST) clock for international buyers.
  - **Sticky Navbar & Mobile Drawer**: Clean navigation, active page highlighting, and a high-visibility "Request Quote" CTA.
  - **Hero Slider**: Dynamic value propositions for Whole Spices, Basmati Rice, and Mundra/JNPT Maritime Container Logistics.
  - **Verifiable Metrics Strip**: 35+ Export Destinations, 48,000+ Metric Tons, 14+ Years in Cross-Border Trade, 99.5% Sortex Cleaned.
  - **Direct Mandi Sourcing**: Interactive breakdown of procurement belts (Unjha, Saurashtra, Guntur, Indo-Gangetic basin).
  - **Interactive FCL Container Stuffing Calculator**: Allows foreign buyers to calculate exact net tonnage, bag count (25kg, 50kg, 1000kg Jumbo), and container space (20ft vs 40ft FCL) for each commodity.
  - **Statutory Accreditations Marquee**: DGFT IEC, APEDA, Spices Board of India, FSSAI Central License, FIEO, ISO 22000:2018, Halal, Kosher, and US FDA facility registration.
  - **Global Logistics Map**: Interactive export destinations (GCC, Europe, SE Asia, Americas, Africa) with gateway port transit times.
  - **Deep B2B Product Detail Modals**: Full chemical/physical lab parameter tables (Moisture, Volatile Oil, Curcumin, Aflatoxin MRLs, Sieve size) and container stuffing ratios.
  - **Floating WhatsApp Quick-Chat Widget**: Instant connection to the commercial export desk with pre-filled inquiries.
  - **Serverless RFQ Engine**: Built for Web3Forms or Formspree with instant WhatsApp and direct email fallbacks.
  - **Zero Server-Side Dependency**: Compiles into pure static HTML/CSS/JS (`dist/`), deploying effortlessly on Hostinger, Cloudflare Pages, Netlify, or AWS S3.

---

## 🏗 Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Google Fonts (*Plus Jakarta Sans*, *Inter*, *JetBrains Mono*)
- **Forms**: Serverless Web3Forms / Formspree API + WhatsApp Deep-Link

---

## 📂 Project Directory Structure

```
CR Global/
├── .env.example                # Template for environment keys
├── .gitignore                  # Git exclusions for node_modules and builds
├── .htaccess                   # Hostinger Apache rewrite & caching rules
├── index.html                  # SEO tags, OpenGraph, JSON-LD schema
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   ├── .htaccess               # Copied to dist/ for Hostinger
│   ├── favicon.svg             # Custom SVG trade emblem
│   ├── robots.txt              # Search engine crawler permissions
│   └── sitemap.xml             # Complete XML sitemap
└── src/
    ├── main.jsx                # React root mount
    ├── App.jsx                 # Routing & state management
    ├── index.css               # Tailwind directives & marquee animations
    ├── data/
    │   ├── siteConfig.js       # Centralized business info, contacts, registrations
    │   └── products.js         # Complete export product catalog & specifications
    ├── components/
    │   ├── layout/
    │   │   ├── TopUtilityBar.jsx
    │   │   ├── Navbar.jsx
    │   │   ├── Footer.jsx
    │   │   └── FloatingWhatsApp.jsx
    │   ├── home/
    │   │   ├── HeroSlider.jsx
    │   │   ├── MetricsStrip.jsx
    │   │   ├── CompanyOverview.jsx
    │   │   ├── FeaturedCategories.jsx
    │   │   ├── ProcessingPipeline.jsx
    │   │   ├── CertificationsMarquee.jsx
    │   │   ├── GlobalPresenceMap.jsx
    │   │   └── QuickInquiryBanner.jsx
    │   ├── products/
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductDetailModal.jsx
    │   │   ├── CategoryFilter.jsx
    │   │   └── ContainerCalculator.jsx
    │   ├── rfq/
    │   │   ├── RFQModal.jsx
    │   │   └── RFQForm.jsx
    │   └── common/
    │       └── PageHeader.jsx
    └── pages/
        ├── HomePage.jsx
        ├── AboutPage.jsx
        ├── ProductsPage.jsx
        ├── CertificationsPage.jsx
        ├── InfrastructurePage.jsx
        └── ContactPage.jsx
```

---

## ⚡ Quick Start & Local Development

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Edit `.env` with your client details:
```env
# Free Web3Forms Access Key (https://web3forms.com)
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here

# WhatsApp Business number with country code (no + or spaces)
VITE_WHATSAPP_NUMBER=919876543210

# Inquiry email address
VITE_INQUIRY_EMAIL=exports@crglobalexim.com
```

### 4. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

### 5. Build for Production
```bash
npm run build
```
The compiled, production-ready static bundle will be generated in `dist/`.

---

## 🛠 Client Handover Customization Guide

The codebase is engineered so non-developers or agency staff can rebrand and customize the entire platform in minutes by editing just two central files:

### 1. Customize Business & Contact Info (`src/data/siteConfig.js`)
Open `src/data/siteConfig.js` to modify:
- **Company Credentials**: Legal Name, Tagline, Established Year, IEC Number, GSTIN, CIN, FSSAI License, APEDA RCMC, and Spices Board Registration.
- **Contact Details**: Phone numbers, WhatsApp number, inquiry emails, Corporate HQ address, and Mundra processing facility address.
- **Gateway Seaports**: Add or update loading port berths and distances.
- **Certifications**: Add or update ISO certificates, Halal, Kosher, or US FDA registration numbers.

### 2. Customize Export Products & Specifications (`src/data/products.js`)
Open `src/data/products.js` to add, edit, or delete commodities. Each product supports:
- `name`, `botanicalName`, `category` (`spices`, `grains`, `oilseeds`, `pulses`, `specialty`)
- `hsCode`, `origin`, `purity`, `moisture`, `admixture`
- `specs`: Custom laboratory parameters (Volatile Oil, Curcumin, Aflatoxin limits, Sieve size)
- `gradeOptions`: Commercial export grades
- `fcl20` and `fcl40`: Container stuffing capacities
- `packaging`: Bag materials and sizes
- `moq`: Minimum Order Quantity

---

## 🚀 GitHub Version Control Workflow

To push this codebase to a GitHub repository:

```bash
# Initialize git in the project root
git init

# Add all files
git add .

# Initial commit
git commit -m "feat: initial commit of CR Global production EXIM web portal"

# Create a 'main' branch
git branch -M main

# Link to your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/your-username/cr-global-exim.git

# Push to GitHub
git push -u origin main
```

---

## 🌐 Hostinger Deployment Guide

Hostinger offers two straightforward methods for deploying this static website:

### Method A: Hostinger Git Deployment (Recommended for Continuous Updates)
1. Log into your **Hostinger hPanel**.
2. Navigate to **Websites** -> Select your domain -> Click **Dashboard**.
3. Under the **Advanced** section, click on **Git**.
4. Configure Git Repository:
   - **Repository URL**: `https://github.com/your-username/cr-global-exim.git`
   - **Branch**: `main`
   - **Install path**: Leave empty or enter `public_html` (Note: if deploying source, see Build Automation below or deploy pre-built branch).
5. Alternatively, push the contents of `dist/` to a dedicated `release` or `gh-pages` branch and set the Git deployment target to that branch.
6. Click **Create** / **Deploy**.

---

### Method B: Direct Upload via Hostinger File Manager or FTP (Zero-Config)
1. Run the local build command:
   ```bash
   npm run build
   ```
2. Log into **Hostinger hPanel**.
3. Go to **File Manager** -> Open `public_html/`.
4. Delete default placeholder files (e.g. `default.php`).
5. Upload the entire contents of the **`dist/`** folder directly into `public_html/` (including `index.html`, `.htaccess`, `favicon.svg`, `robots.txt`, `sitemap.xml`, and the `assets/` folder).
6. Verify that `public_html/index.html` exists at the root.

---

## 🔗 Custom Domain & DNS Mapping on Hostinger

To point your custom domain (e.g., `crglobalexim.com` or `www.crglobalexim.com`) to Hostinger:

### 1. If Domain is Registered with Hostinger:
- The domain will automatically point to your hosting account. Ensure the website root points to `public_html`.

### 2. If Domain is Registered with an External Registrar (GoDaddy, Namecheap, Google Domains):
Update the DNS records at your registrar:

| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | Hostinger Server IP (Found on hPanel Dashboard) | 3600 |
| **CNAME** | `www` | `@` (or `yourdomain.com`) | 3600 |

*Alternatively, point nameservers to Hostinger:*
- `ns1.dns-parking.com`
- `ns2.dns-parking.com`

### 3. Enable Free Lifetime SSL Certificate
1. In Hostinger hPanel, go to **Security** -> **SSL**.
2. Click **Install SSL** and select your custom domain.
3. Once active, the included `.htaccess` file automatically forces HTTPS on all requests.

---

## 🔍 SEO & Cross-Border Performance Optimization

- **Pre-configured `.htaccess`**:
  - Gzip compression enabled for all HTML, CSS, JavaScript, and SVG assets.
  - Browser caching rules (1 year for images/WebP/SVG, 1 month for JS/CSS).
  - Clean client-side SPA routing rewrites.
- **Schema.org Structured Data**:
  - Pre-injected `Corporation` and `Organization` JSON-LD schema inside `index.html`.
- **Search Engine Assets**:
  - Valid `public/robots.txt`
  - Valid `public/sitemap.xml` with priority mappings.

---

## 📄 License & Commercial Rights

Developed for **CR Global Export & Import Private Limited**. All commercial rights and source code are transferred to the client upon project handover.
