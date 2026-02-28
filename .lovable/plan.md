

# Plan: Create Centralized Site Data File

## Problem
Contact info (phone, email), gallery images, product data, Google Maps URL, and social links are hardcoded across multiple files (Index, Contact, Footer, Navbar, Gallery, Products). Updating a phone number or image requires editing 4+ files.

## Solution
Create a single `src/lib/siteData.ts` file that exports all non-translation content: company contact details, gallery images, product definitions, and map embed URL. All pages and components will import from this file instead of hardcoding values.

## File Structure

### Create: `src/lib/siteData.ts`
Contains:
- **`companyInfo`** — phone, email, address, map embed URL, brand name
- **`galleryImages`** — array of `{ src, alt, captionKey }` (currently in Gallery.tsx)
- **`products`** — array of `{ titleKey, descKey, category, icon, materials }` (currently in Products.tsx)
- **`homeProducts`** — the 4 featured products shown on Index (currently in Index.tsx)
- **`whyUsItems`** — the 4 "why choose us" items (currently in Index.tsx)
- **`aboutCapabilities`** — the 4 capability items (currently in About.tsx)
- **`navLinks`** — array of `{ path, labelKey }` for navigation
- **`socialLinks`** — placeholder for future social media links

### Edit: `src/pages/Index.tsx`
- Import `companyInfo`, `homeProducts`, `whyUsItems` from siteData
- Replace hardcoded `tel:+251918353873`, `mailto:zenebetorno@gmail.com`, `+251 918 353 873` with `companyInfo.phone`, `companyInfo.email`
- Replace inline product/whyUs arrays with imports

### Edit: `src/pages/Products.tsx`
- Import `products` from siteData, remove local `allProducts` array

### Edit: `src/pages/Gallery.tsx`
- Import `galleryImages` from siteData, remove local array

### Edit: `src/pages/About.tsx`
- Import `aboutCapabilities` from siteData, remove local array

### Edit: `src/pages/Contact.tsx`
- Import `companyInfo` from siteData
- Replace hardcoded phone, email, map URL with `companyInfo.*`

### Edit: `src/components/Navbar.tsx`
- Import `companyInfo`, `navLinks` from siteData
- Replace hardcoded phone link and nav items

### Edit: `src/components/Footer.tsx`
- Import `companyInfo`, `navLinks` from siteData
- Replace hardcoded phone, email, address

