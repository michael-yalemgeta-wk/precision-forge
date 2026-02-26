

# Plan: Logo Placeholder + Amharic/English Language Support

## 1. Logo Placeholder

Add a placeholder logo image area in the Navbar and Footer where the company text-only brand currently sits. This will be a styled square/rectangular container with a generic icon (e.g., a gear/cog or the text "LOGO") that can later be swapped for a real logo file.

**Files changed:** `Navbar.tsx`, `Footer.tsx`

- Replace the text-only brand block with a flex row containing a 40×40px placeholder box (rounded, bordered, with a `Cog` icon or "Z" monogram inside) next to the company name text.

---

## 2. Amharic/English Language Toggle

Create an internationalization (i18n) system using React Context — no extra dependencies needed.

### Architecture

```text
src/
  contexts/
    LanguageContext.tsx    ← Context provider + useLanguage hook
  lib/
    translations.ts       ← All EN/AM string pairs
  components/
    LanguageToggle.tsx    ← Toggle button (EN | አማ)
```

### Translation Keys

Every user-visible string across all 5 pages, the Navbar, and the Footer will have an English and Amharic version stored in `translations.ts` as a flat key-value map:

```ts
const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.callNow": "Call Now",
    "hero.title1": "Precision Metal",
    "hero.title2": "Manufacturing",
    "hero.title3": "in Bahir Dar",
    "hero.subtitle": "Expert lathe works, custom metal parts...",
    // ... all strings for About, Products, Gallery, Contact, Footer
  },
  am: {
    "nav.home": "መነሻ",
    "nav.about": "ስለ እኛ",
    "nav.products": "ምርቶች",
    "nav.gallery": "ማዕከለ-ስዕላት",
    "nav.contact": "ያግኙን",
    "nav.callNow": "አሁን ይደውሉ",
    "hero.title1": "ትክክለኛ የብረት",
    "hero.title2": "ማምረት",
    "hero.title3": "በባህር ዳር",
    "hero.subtitle": "የቶርኖ ስራ፣ ብጁ የብረት ክፍሎች...",
    // ... all Amharic translations
  }
};
```

### LanguageContext

- Stores current language (`"en"` | `"am"`) in state, persisted to `localStorage`.
- Provides a `t(key)` function that returns the translated string.
- Provides `toggleLanguage()` and `language` value.

### LanguageToggle Component

- A small glass-styled button in the Navbar showing **EN | አማ**.
- Clicking toggles between English and Amharic.
- Placed next to the "Call Now" button on desktop, and at the top of the mobile menu.

### Page Updates

All 6 files with hardcoded text will be updated to use the `t()` function:

| File | Approximate string count |
|---|---|
| `Navbar.tsx` | ~7 strings |
| `Footer.tsx` | ~12 strings |
| `Index.tsx` | ~20 strings |
| `About.tsx` | ~18 strings |
| `Products.tsx` | ~20 strings |
| `Gallery.tsx` | ~12 strings |
| `Contact.tsx` | ~18 strings |

### Wrap App with Provider

In `App.tsx`, wrap everything with `<LanguageProvider>`.

---

## Summary of Files

| Action | File |
|---|---|
| Create | `src/lib/translations.ts` |
| Create | `src/contexts/LanguageContext.tsx` |
| Create | `src/components/LanguageToggle.tsx` |
| Edit | `src/App.tsx` — wrap with LanguageProvider |
| Edit | `src/components/Navbar.tsx` — logo placeholder + language toggle + t() |
| Edit | `src/components/Footer.tsx` — logo placeholder + t() |
| Edit | `src/pages/Index.tsx` — t() for all strings |
| Edit | `src/pages/About.tsx` — t() for all strings |
| Edit | `src/pages/Products.tsx` — t() for all strings |
| Edit | `src/pages/Gallery.tsx` — t() for all strings |
| Edit | `src/pages/Contact.tsx` — t() for all strings |

