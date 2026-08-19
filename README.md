# <img src="assets/logo.svg" width="32" height="32" align="center" alt="" /> StellarNest — Frontend

The marketing site and product surface for **StellarNest**, a family
financial coordination platform built on Stellar.

Most families manage money the same fragmented way: a joint bank account
for the obvious shared bills, a spreadsheet nobody fully trusts for
savings goals, a group chat for "can you approve this," and a lawyer on
retainer for the inheritance conversation nobody wants to have out loud.
None of it is programmable, and none of it actually enforces what the
family agreed to — a spending limit is a promise, not a rule; an
approval is a text message, not a signature.
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/5f1bd9dd-2d48-42da-83f2-b160e2d69c83" />

StellarNest replaces all of that with **one shared treasury per family**:
a Soroban smart contract on the Stellar network that holds the money and
enforces the rules — who can spend how much, how many approvals a large
withdrawal needs, how savings goals track contributions, when bills get
paid automatically, and how an inheritance vault distributes wealth to
the next generation once specific, family-set conditions are met. No
single person — not a parent, not StellarNest itself — can override
those rules once they're set, because they're checked by the contract on
every transaction, not by a person's judgment in the moment.

> One treasury. One family. Infinite trust.

**This repo is the part of StellarNest a person actually sees**: the
public marketing site explaining what the product does and why (home,
features, pricing, roadmap, docs, blog, and more — see [Pages](#pages)),
plus a `/app` route previewing what the treasury dashboard itself looks
like once it's wired up to real data. It's a Next.js application with no
backend of its own — every number, goal, bill, and family member you see
on this site today is realistic placeholder content defined in
`src/lib/data.ts`, standing in for what will eventually come from the
[`backend`](https://github.com/StellarNest-Org/backend)'s GraphQL API.
It's one of three StellarNest repos:

| Repo | Purpose |
|---|---|
| [`contracts`](https://github.com/StellarNest-Org/contracts) | The Soroban `treasury` contract |
| [`backend`](https://github.com/StellarNest-Org/backend) | GraphQL API, Postgres data layer, non-custodial Stellar integration |
| [`frontend`](https://github.com/StellarNest-Org/frontend) *(this repo)* | Marketing site + product preview (Next.js) |

## Table of contents

- [New to this stack? Start here](#new-to-this-stack-start-here)
- [Stack](#stack)
- [Pages](#pages)
- [Structure](#structure)
- [Component inventory](#component-inventory)
- [Design system](#design-system)
- [The `/app` dashboard preview](#the-app-dashboard-preview)
- [SEO & metadata](#seo--metadata)
- [Development](#development)
- [Testing what you changed](#testing-what-you-changed)
- [Accessibility & performance](#accessibility--performance)
- [Deployment](#deployment)
- [Contributing](#contributing)

## New to this stack? Start here

A few concepts recur throughout this codebase. If any of these are new
to you, this section should be enough to follow the rest of the README:

- **Next.js** is a framework built on top of React that adds file-based
  **routing** (a folder under `src/app/` becomes a URL — `src/app/about/`
  is `/about`), **rendering on the server** (pages are built to HTML
  before they reach the browser, which is faster and better for SEO than
  a blank page that fills in with JavaScript), and conventions for
  things every real site needs — metadata, sitemaps, image optimization
  — without extra libraries. The **App Router** (the `app/` directory,
  as opposed to the older `pages/` directory) is Next's current routing
  system; every route in this repo is a `page.tsx` file inside a folder
  named for its URL segment.
- **Server vs. Client Components.** In the App Router, every component
  is a Server Component by default — it renders once on the server and
  ships only HTML to the browser, no JavaScript for that component at
  all. A component becomes a **Client Component** (add `'use client'` at
  the top of the file) only when it needs interactivity — state, event
  handlers, browser APIs like `window`. In this repo, that's things like
  `Navbar` (menu open/close state), the theme toggle, the testimonials
  carousel, and any chart. Everything else — most of the marketing
  sections — is a Server Component, which keeps the amount of JavaScript
  sent to the browser small.
- **Turbopack** is Next's newer, faster bundler (the tool that turns all
  these `.tsx` files into what a browser can run) — as of Next.js 16
  it's the default for both `next dev` and `next build`, replacing
  Webpack.
- **Tailwind CSS** lets you style elements with utility classes directly
  in JSX (`className="rounded-2xl border p-6"`) instead of writing
  separate CSS files. **Tailwind v4** changed how theming works: instead
  of a `tailwind.config.js` file, colors/fonts/spacing are defined as
  plain CSS custom properties inside an `@theme` block in
  `src/app/globals.css` — that's why you won't find a config file in
  this repo, just that one CSS file.
- **Radix UI** provides unstyled, fully-accessible interactive
  components (keyboard navigation, correct ARIA attributes) that this
  repo wraps with its own Tailwind classes — e.g. `Accordion` in
  `src/components/ui/accordion.tsx` is Radix's accordion primitive with
  StellarNest's own look applied on top.
- **`next/font`** downloads and self-hosts Google Fonts (Fraunces,
  Inter, JetBrains Mono here) at build time, so the browser never makes
  a separate request to Google's servers — faster, and avoids a
  flash-of-different-font as the page loads.
- **`next/og`** generates images (like the Open Graph preview image you
  see when a link is shared on social media) on the fly from JSX/CSS,
  the same way a page renders — see `src/app/opengraph-image.tsx`. No
  static image file to keep in sync with the brand by hand.

## Stack

Next.js 16 (App Router, Turbopack, React 19) · TypeScript · Tailwind CSS 4
(CSS-first `@theme`, no `tailwind.config.js`) · Framer Motion · Radix UI
primitives (`accordion`, `slot`) · Recharts · React Hook Form + Zod v4 ·
`next-themes` for dark/light mode · TanStack Query · `next/font` (Fraunces
+ Inter + JetBrains Mono) · `next/og` for dynamically generated OG/Twitter
images and the Apple touch icon.

## Pages

| Route | What's there |
|---|---|
| `/` | Hero, animated stats, "how it works," all five feature sections (savings, bills, investing, inheritance, rules), roles & permission matrix, multi-asset strip, Stellar integration explainer, security grid, automation workflows, comparison table, testimonials carousel, FAQ, CTA |
| `/about` | Mission/story, values, team grid, stats |
| `/features` | The same five feature sections as the homepage in more depth, plus roles, assets, and automation |
| `/pricing` | Starter/Pro/Enterprise pricing cards, comparison table, FAQ |
| `/roadmap` | Shipped → now → next → later timeline |
| `/docs` | Guide index (getting started, treasury operations, inheritance vault, API reference) with real GraphQL and non-custodial-signing code samples |
| `/developers` | Repo links, tech stack by category, contributing pointer |
| `/blog` , `/blog/[slug]` | Four full posts on programmable treasuries, inheritance without probate, why Soroban, and kids' allowances |
| `/contact` | Validated contact form (React Hook Form + Zod) |
| `/privacy`, `/terms` | Legal pages |
| `/app` | **Product preview** — the treasury dashboard, described [below](#the-app-dashboard-preview) |
| `not-found` (404) | Branded "this nest is empty" page |

Every route also gets a generated `sitemap.xml`, `robots.txt`, a
`manifest.webmanifest`, and a dynamic Open Graph image — see
[SEO & metadata](#seo--metadata).

## Structure

```
src/
  app/
    <route>/page.tsx      one folder per route in the table above
    layout.tsx             root layout: fonts, ThemeProvider, QueryProvider, Navbar/Footer
    globals.css             Tailwind v4 theme tokens (@theme, @custom-variant dark)
    manifest.ts             PWA manifest (Next file convention)
    opengraph-image.tsx     dynamic 1200×630 OG image (next/og)
    apple-icon.tsx          dynamic 180×180 apple touch icon (next/og)
    icon.svg                 favicon — the canonical nest-mark SVG
    sitemap.ts, robots.ts    generated from lib/data.ts

  components/
    layout/          navbar (mega menu, mobile drawer, theme toggle), footer
    marketing/        hero, feature rows, roles section, comparison table,
                      testimonials carousel, FAQ accordion, pricing cards,
                      CTA section, roadmap timeline, contact form, stats band,
                      treasury illustration, asset strip, Stellar/security sections
    dashboard/        stat cards, portfolio area chart, allocation donut,
                      activity timeline (used on /app)
    ui/                button, card, badge, accordion, container/section
    nest-mark.tsx      the logo mark + wordmark, as React components
    social-icons.tsx   hand-rolled GitHub/X/Discord SVGs (lucide-react dropped brand icons)
    theme-provider.tsx, query-provider.tsx

  lib/
    data.ts    every piece of placeholder content: nav, roles, permission
               matrix, savings goals, bills, portfolio data, family members,
               assets, automations, family rules, testimonials, FAQ,
               pricing, comparison table, stats, roadmap, blog posts, docs
               sections, tech stack, repo list
    fonts.ts   next/font declarations (Fraunces, Inter, JetBrains Mono)
    utils.ts   cn() (clsx + tailwind-merge), formatCurrency, formatCompact

  types/
    index.ts   shared types for the content in lib/data.ts (NavLink, NavMenu,
               BlogPost, RoadmapPhase, PricingPlan, Testimonial, FamilyRoleDefinition)
```

All marketing content lives in `lib/data.ts` on purpose — swapping in
real content later (from the backend's GraphQL API, a CMS, whatever) is a
matter of replacing that one file's exports, not hunting through JSX
across thirty components.

## Component inventory

**Layout** — `Navbar` (scroll-aware glass background, hover mega-menu for
Product/Resources, mobile drawer, theme toggle) and `Footer`
(link columns generated from `lib/data.ts`'s `footerNav`, social icons).

**Marketing** — `Hero`, `StatsBand` (+`AnimatedCounter`, a
`requestAnimationFrame`-driven count-up that only fires once in view),
`HowItWorks`, `FeatureRow` (+`FeatureMockup`, which renders one of five
different mini-dashboards — savings/bills/investments/inheritance/rules
— based on a `kind` prop), `RolesSection` (role cards + the full
permission matrix table), `AssetStrip`, `StellarSection`,
`SecuritySection`, `AutomationSection` (+`AutomationList`),
`ComparisonSection`, `TestimonialsCarousel`, `FaqSection`,
`PricingCards`, `CtaSection`, `RoadmapTimeline`, `ContactForm`,
`TreasuryIllustration` (the floating-cards hero visual), `PageHero`
(shared sub-page header), `SectionHeader`.

**Dashboard** (`/app` only) — `StatCard`, `PortfolioChart` (Recharts
`AreaChart`), `AllocationDonut` (Recharts `PieChart`), `ActivityTimeline`.

**UI primitives** — `Button` (cva variants: primary/accent/outline/
ghost/link), `Card` (+Header/Title/Description/Content/Footer), `Badge`,
`Accordion` (Radix, used by the FAQ), `Container`/`Section`.

## Design system

A distinct visual identity from other StellarNest-adjacent products —
deliberately not another dark-mode/single-accent SaaS template:

- **Palette** — deep emerald/forest green (`--color-primary`) paired with
  antique gold (`--color-accent`), on a warm cream base in light mode
  (`#fbf8f1`) or a deep charcoal-green base in dark mode (`#0d1712`). A
  "family heritage / treasury" direction rather than a generic tech blue
  or violet. All tokens are CSS custom properties in
  `src/app/globals.css`, remapped for Tailwind via `@theme inline` so
  `bg-primary`, `text-accent`, etc. just work, and swapped per-theme
  under a `.dark` class (`@custom-variant dark`, driven by `next-themes`).
- **Typography** — Fraunces (a warm, expressive serif) for display
  headings, paired with Inter for body/UI text, and JetBrains Mono for
  code. The serif display face is the one deliberate typographic choice
  that sets this apart from an all-sans-stack SaaS look.
- **Logo** — a "nest" of three concentric **dashed** rings plus a solid
  center dot (`src/components/nest-mark.tsx`, mirrored exactly in
  `src/app/icon.svg` for the favicon and in the OG/apple-icon generators)
  — a woven-nest motif instead of a shield, badge, or ticket-style mark.
- **Motion** — Framer Motion for scroll-triggered reveals (`whileInView`)
  and the mega-menu/mobile-drawer transitions; a few CSS keyframes
  (`float`, `shimmer`) in `globals.css` for the hero's floating cards and
  the accent shimmer text effect.
- **Glassmorphism** — `.glass-panel` (`globals.css`) — a
  `backdrop-filter: blur()` + translucent card background, used for the
  sticky navbar, hero illustration, and testimonial cards.

## The `/app` dashboard preview

`/app` renders what using StellarNest actually looks like: eight stat
cards (Total Balance, Savings, Bills Due, Investments, Monthly Spending,
Upcoming Transfers, Inheritance Status, Pending Approvals), a portfolio
value area chart, an asset-allocation donut, savings-goal progress bars,
an upcoming-bills list, a recent-activity feed, the family/roles roster,
and the active rules list — all built from the same placeholder data in
`lib/data.ts` used elsewhere on the site. It's explicitly labeled a
**product preview** (see the banner at the top of the page): there's no
wallet connection or live data here yet. Wiring it up means pointing it
at [`StellarNest-Org/backend`](https://github.com/StellarNest-Org/backend)'s
GraphQL API and its non-custodial Stellar signing flow
(`/stellar/build` → sign client-side → `/stellar/submit`).

## SEO & metadata

- `src/app/layout.tsx` sets a title template, Open Graph and Twitter Card
  metadata, and theme-color per color scheme.
- `src/app/opengraph-image.tsx` and `apple-icon.tsx` generate real PNGs
  at request time via `next/og`'s `ImageResponse` — no static image
  asset to keep in sync with the brand, they're built from the same
  colors/marks as the rest of the site.
- `src/app/manifest.ts` is a proper PWA manifest (Next's file
  convention, served at `/manifest.webmanifest`).
- `src/app/sitemap.ts` and `robots.ts` are generated from `lib/data.ts`
  (every static route plus every blog post slug).
- Every page sets its own `title`/`description` via the `metadata`
  export, composed into the root template (`%s · StellarNest`).

## Development

```bash
npm install
npm run dev      # http://localhost:3000 (Turbopack)
npm run lint      # ESLint, flat config (eslint-config-next)
npm run build     # production build (Turbopack), also type-checks
npm run start     # serve the production build
```

There's no `.env` required to run the frontend today — all content is
local placeholder data in `lib/data.ts`. When the dashboard is wired to
the live backend, expect a `NEXT_PUBLIC_API_URL` (or similar) to be
added for the GraphQL endpoint.

## Testing what you changed

There's no component test suite yet (this repo is UI-heavy and
placeholder-data-driven, so the highest-value checks today are `npm run
lint` and `npm run build` — the build type-checks every page and fails
loudly on a bad import, a missing `key`, or an unresolved route). For
anything visual, run `npm run dev` and click through the affected pages
in both light and dark mode (the toggle is in the navbar) — the
`.github/workflows/ci.yml` workflow runs lint + build on every push/PR
but does not currently do visual regression testing.

## Accessibility & performance

- Semantic headings (`h1`→`h2`→`h3`) throughout; the accordion, tabs-style
  toggles, and mega-menu use Radix primitives for correct ARIA roles and
  keyboard navigation.
- Color contrast was chosen against both the cream/light and
  charcoal-green/dark backgrounds, not just one theme.
- `next/font` self-hosts and subsets all three typefaces (no external
  font request at runtime, no layout shift from a late font swap).
- Charts, the mega-menu, and the testimonials carousel are the only
  client components with real interactivity — everything else renders
  as a Server Component by default, keeping the client JS bundle small.
- `useInView`-gated animations (stats counters, feature mockups) don't
  run until scrolled into view, avoiding wasted work above the fold.

## Deployment

Built for Vercel — `npm run build` produces a standard Next.js
production build with no special adapter configuration required. Any
platform that runs `next build` + `next start` (or a Next-aware adapter)
works equally well.

## Contributing

Issues and PRs are welcome. Before opening a PR: `npm run lint` and
`npm run build` should both pass cleanly. See
[`StellarNest-Org/backend`](https://github.com/StellarNest-Org/backend)
for the API this will eventually consume, and
[`StellarNest-Org/contracts`](https://github.com/StellarNest-Org/contracts)
for the on-chain rules the product is built around.
