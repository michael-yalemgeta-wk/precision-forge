

# Plan: Update Products, Gallery Data & Contact Email

## 1. Revamp Products & Categories in `siteData.ts`

Replace current products array with the actual items the workshop produces. New categories:

| Category ID | EN Label | AM Label |
|---|---|---|
| `machines` | Workshop Machines | የወርክሾፕ ማሽኖች |
| `products` | Fabricated Products | የተመረቱ ምርቶች |
| `gears` | Machine Gears | የማሽን ጊሮች |
| `spareparts` | Spare Parts | መለዋወጫ ክፍሎች |

**Workshop Machines** (machines they use to fabricate):
- Lathe Machine / የቶርኖ ማሽን
- Milling Machine / የሚሊንግ ማሽን
- Press Machine / የፕሬስ ማሽን
- Drill Machine / የድሪል ማሽን

**Fabricated Products** (things they produce):
- Corn Sheller / የቦቆሎ መፈልፈያ
- Candle Making Machine / የሻማ ማምረቻ
- Dough Mixer / የዳቦ ማቡኪያ
- Areki Distiller / የአረቄ ማውጫ
- Feed Chopper / የመኖ መከትከቻ
- Fuel-Efficient Cook Stove / ማገዶ ቆጣቢ
- Rice Huller / የሩዝ መፈልፈያ

**Machine Gears**: All fabricated machine gears

**Spare Parts**: Any spare part manufacturing (ማነኛውንም ስፔር ፓርት ማምረት ይችላል)

Update `productCategories` accordingly. Add all EN + AM translations to `translations.ts`.

## 2. Gallery Images in `siteData.ts`

Already centralized — no structural change needed. The `src` and `captionKey` fields in `galleryImages` array are already editable from one place. Will add `descKey` field for a description per image (EN + AM translations).

## 3. Contact Form — mailto: Approach

Replace the current fake `handleSubmit` with a `mailto:` link that opens the user's email client pre-filled with:
- **To**: `zenebetorno@gmail.com`
- **Subject**: "Contact from [name]"
- **Body**: formatted with name, phone, email, and message

No backend needed — works immediately.

## Files Changed

| Action | File |
|---|---|
| Edit | `src/lib/siteData.ts` — new products, categories |
| Edit | `src/lib/translations.ts` — all new EN/AM product strings, gallery descriptions |
| Edit | `src/pages/Products.tsx` — minor (data-driven, should work automatically) |
| Edit | `src/pages/Contact.tsx` — mailto: submit handler |

