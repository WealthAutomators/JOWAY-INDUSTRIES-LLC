# JOWAY INDUSTRIES LLC

Contemporary Florida lifestyle storefront built on the existing Next.js ecommerce engine.

JOWAY INDUSTRIES LLC  
2310 COCONUT LN  
MERRITT ISLAND, FL 32952  
jowayindustriesllc@gmail.com

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Radix primitives)
- **Framer Motion**
- **Embla Carousel**
- **React Context** (cart, wishlist, recently viewed)
- **localStorage** persistence (no backend)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # Production build
npm run start   # Start production server
```

## Store content

| What | Where |
|---|---|
| Company name, address, email | `data/company.ts` |
| Brand colors | `styles/theme.ts` + `app/globals.css` |
| Navigation & footer links | `data/navigation.ts` |
| Categories | `data/categories.ts` |
| Products | `data/products.ts` |
| Homepage content | `data/homepage.ts` |
| Testimonials | `data/testimonials.ts` |
| Logo | `public/logo/` |
| Hero images | `public/hero/` |
| Banners | `public/banners/` |
| Category images | `public/categories/` |
| Product images | `public/products/` |

## Features

- Editorial homepage with a full-width cinematic hero
- Working cart with add/remove/quantity and localStorage persistence
- Working wishlist with localStorage persistence
- Live search filtering in navbar and shop page
- Quick view modal on product cards
- Product detail page with gallery, reviews, related products
- Shop page with sidebar filters, sorting, and pagination
- Demo checkout (no real payment processing)
- Fully responsive (mobile, tablet, desktop)

## Checkout

Use coupon code `SAVE10` on the cart page for a 10% discount. This is a demonstration storefront — no live payments are processed.

## Brand colors

- **Primary:** Deep coastal green `#2F5D50`
- **Accent:** Terracotta `#C47A5A` (used sparingly)
- **Background:** Warm ivory `#F7F4EE`
