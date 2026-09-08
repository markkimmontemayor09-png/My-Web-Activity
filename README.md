# Pangasinan Heritage Digital Showcase

Activity 1 &mdash; Deliverable 1.1 (source code) &amp; 1.2 (Atomic Design system), CITE, Urdaneta City University.

## Stack
- **Framework:** Next.js 14 (App Router), React 18, TypeScript
- **Styling:** Tailwind CSS
- **Architecture:** Atomic Design (atoms &rarr; molecules &rarr; organisms &rarr; pages)

## Getting started
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`.

To build a production/static bundle:
```bash
npm run build
npm run start
```

## Pages
| Route | Description |
|---|---|
| `/` | Home &mdash; hero + searchable Heritage Grid of all sites |
| `/heritage/hundred-islands` | Hundred Islands National Park, Alaminos |
| `/heritage/bolinao-lighthouse` | Cape Bolinao Lighthouse, Bolinao |
| `/heritage/balungao-hot-spring` | Balungao Hot Spring, Balungao |

## Atomic Design structure
```
components/
  atoms/       Button, Typography, ColorTokens, Icon, Image
  molecules/   HeritageCard, SearchForm, NavigationItem
  organisms/   HeritageGrid, HeaderNavigation, SiteDetail
lib/
  sites-data.ts   Single source of truth for all heritage-site content
app/
  page.tsx                          Home
  heritage/hundred-islands/page.tsx
  heritage/bolinao-lighthouse/page.tsx
  heritage/balungao-hot-spring/page.tsx
```

Content is decoupled from presentation: every page reads from `lib/sites-data.ts`,
so adding a fourth heritage site only requires adding one object to that file &mdash;
no component changes needed.

## Accessibility (WCAG 2.1 AA)
- Semantic landmarks (`header`, `main`, `footer`, `nav`, `aside`)
- Visible focus rings on all interactive elements (`:focus-visible`)
- Skip-to-content link
- Descriptive `alt` text required on every image (enforced by the `Image` atom's types)
- `prefers-reduced-motion` respected in `globals.css`

## Performance
- Server Components by default; only `SearchForm` and `HeaderNavigation` are
  Client Components (they need interactivity)
- `next/image` for automatic responsive image sizing/lazy loading
- Route-level code splitting via the App Router
