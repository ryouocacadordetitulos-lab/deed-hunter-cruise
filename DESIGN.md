# DESIGN.md — Design System

## Color Palette (Tailwind Custom)
```js
colors: {
  navy: {
    DEFAULT: '#0B1537',
    dark: '#070E25',
    light: '#112045',
  },
  gold: {
    DEFAULT: '#C9A84C',
    light: '#E8C86A',
    dark: '#A07C30',
    pale: '#F5E6B8',
  },
  cream: '#FDF8EE',
}
```

## Typography
- **Display font:** Cinzel (Google Fonts) — used for all headings, event name, date
- **Body font:** Lato (Google Fonts) — used for descriptions, pricing, disclaimers
- Google Fonts import: `@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Lato:wght@300;400;700&display=swap')`

## Component Patterns
- Section padding: `py-16 px-4`
- Max container: `max-w-4xl mx-auto`
- Gold divider: `border-t border-gold/40 my-8`
- Card: `border border-gold rounded-lg bg-navy-dark/80 p-8`
- Badge: `bg-gold text-navy-dark font-cinzel font-bold tracking-widest px-4 py-1 rounded`

## Responsive
- Mobile-first, stack on small screens
- Two-column grid on md+ for includes section
- Hero image: full viewport height on desktop, 80vh on mobile
