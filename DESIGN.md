# DESIGN.md — The Deed Hunter World At Sea

## Tailwind Theme Extension

```js
colors: {
  navy: {
    950: '#060E1A',
    900: '#0A1628',
    800: '#0D1F3C',
    700: '#122040',
    600: '#1A2E57',
  },
  gold: {
    300: '#F5D078',
    400: '#E8C050',
    500: '#D4AF37',
    600: '#C8A84B',
    700: '#A88A2E',
  },
  cyan: {
    400: '#4DD9E0',
  }
}
fontFamily: {
  display: ['Playfair Display', 'Georgia', 'serif'],
  body: ['Inter', 'system-ui', 'sans-serif'],
}
```

## Type Scale

| Token | Mobile | Desktop |
|-------|--------|---------|
| Hero Title | text-4xl | text-7xl |
| Section Title | text-2xl | text-4xl |
| Sub Title | text-xl | text-2xl |
| Body | text-base | text-lg |
| Label | text-xs | text-sm |
| Badge | text-xs uppercase tracking-widest | |

## Spacing / Radius / Shadow
- Section padding: `py-16 px-4 sm:py-24 sm:px-8`
- Card radius: `rounded-2xl`
- Card border: `border border-gold-500/30`
- Hero shadow: `shadow-[0_0_80px_rgba(212,175,55,0.15)]`
- Button shadow: `shadow-[0_4px_24px_rgba(212,175,55,0.4)]`

## Section Inventory

1. **Hero** — fullscreen `min-h-screen`, background image (hero-bg.png), dark overlay, centered content
   - Components: HeroSection, DateBadge, CTAButton
   
2. **EventDetails** — 3 feature cards (Date, Location, Format)
   - Components: EventDetailsSection, FeatureCard

3. **PricingCard** — central card with gradient border, strikethrough price, discount badge, final price
   - Components: PricingSection, PriceCard, DiscountBadge

4. **IncludesExcludes** — 2-column grid with check/X lists
   - Components: IncludesSection, CheckItem, ExcludeItem

5. **Cabins** — 2 cards side by side (Interna, Varanda)
   - Components: CabinsSection, CabinCard

6. **AboutMarcos** — photo left, text right (mobile: stacked)
   - Components: AboutSection, MentorCard

7. **WhatsAppCTA** — dark section, large green button, phone number
   - Components: CTASection, WhatsAppButton

8. **Footer** — legal text, disclaimer

## Responsive Breakpoints

- **< sm (375px mobile):** Single column, stacked layout, text-center hero
- **sm (640px):** Still single column, slightly larger text  
- **md (768px):** 2 columns for includes/excludes and cabins
- **lg (1024px):** 3 columns for event details, side-by-side about
- **xl (1280px):** Max-width container 1280px, large hero text

## Motion
- Hero content: `fade-in` on mount (opacity 0 → 1, translateY 20px → 0, 0.8s ease-out)
- Sections: Intersection Observer scroll reveal (opacity 0 → 1, 0.6s, staggered)
- Buttons: `hover:scale-105 transition-transform duration-200`
- Gold shimmer on hero title: subtle animation on the gold text
- No excessive animations — premium = restrained

## Navigation
- No traditional nav (single-page landing)
- Sticky header with logo and WhatsApp CTA button
- Mobile: same sticky header, compact
