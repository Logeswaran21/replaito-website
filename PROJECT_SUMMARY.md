# Replaito Website Workspace Summary

## Overview

This repository contains two Next.js applications in a single workspace:

1. `replaito-website` (root project)
2. `replaito` (nested subproject)

The root project is a simple Next.js marketing site using React 18 and Next 14. The nested `replaito` folder contains a second Next.js app using Next 16, React 19, TypeScript, and Tailwind CSS.

---

## Root Project: `replaito-website`

### Location
- `c:\Users\admin\Desktop\AI_Projects\replaito-website`

### Purpose
- A marketing website for Replaito with landing, pricing, about, and contact pages.

### Tech stack
- Next.js `14.2.0`
- React `^18`
- React DOM `^18`

### Key files
- `package.json`: root dependency and script configuration
- `next.config.js`: minimal default Next.js config
- `app/layout.jsx`: page metadata and layout wrapper
- `app/page.jsx`: landing page with marketing sections, a WhatsApp chat mockup, feature cards, testimonials, and product messaging
- `app/about/page.jsx`: about page content and product values
- `app/pricing/page.jsx`: pricing page with plan comparison, FAQ, and onboarding CTA
- `app/contact/page.jsx`: contact page with a client-side contact form and support information
- `app/globals.css`: global styling shared across the root app

### Routes
- `/` — home page
- `/about` — about page
- `/pricing` — pricing page
- `/contact` — contact page

### Contents and features
- Home page includes hero banner, trust section, features, how it works, testimonial, business types, and CTA
- About page tells the product story, target audience, and company principles
- Pricing page lists Starter and Growth plans with comparison details and FAQs
- Contact page includes an interactive form and support contact cards
- Uses client-side React state in the contact form for submission simulation

### Scripts
- `npm run dev` — starts Next.js development server
- `npm run build` — builds the app for production
- `npm run start` — starts the Next.js production server

---

## Nested Subproject: `replaito`

### Location
- `c:\Users\admin\Desktop\AI_Projects\replaito-website\replaito`

### Purpose
- A separate Next.js app scaffolded with Create Next App and prepared for a more complete product site

### Tech stack
- Next.js `16.2.9`
- React `19.2.4`
- React DOM `19.2.4`
- TypeScript `^5`
- Tailwind CSS `^4`
- ESLint `^9`
- `eslint-config-next`
- `@types/node`, `@types/react`, `@types/react-dom`

### Key files
- `package.json`: nested app dependency and script configuration
- `next.config.ts`: default config placeholder
- `tsconfig.json`: TypeScript configuration
- `postcss.config.mjs`: PostCSS config for Tailwind
- `eslint.config.mjs`: ESLint config for the nested app
- `app/layout.tsx`: root layout with navigation and footer
- `app/page.tsx`: starter page content from Create Next App using Next.js default template
- `app/globals.css`: global styling for the nested app

### Current status
- The nested app is currently scaffolded and contains boilerplate starter content.
- It has a default home page that instructs editing `app/page.tsx` and includes Next.js/Vercel links.

### Scripts
- `npm run dev` — starts the `replaito` dev server
- `npm run build` — builds the `replaito` app
- `npm run start` — starts the `replaito` production server
- `npm run lint` — runs ESLint for the nested app

---

## Workspace notes

- The root workspace currently includes two independent Next.js projects, so tooling and scripts should be run from the appropriate directory.
- Root and nested apps are not currently integrated as a monorepo; they function as separate applications.
- The root project is the main marketing site, while the nested `replaito` directory appears to be a second Next.js project scaffold.

## Suggested next steps

- Decide whether the nested `replaito` app should be merged into the root project or maintained separately.
- Add documentation or README content in the root project to explain the workspace structure.
- If the `replaito` nested app is intended to be active, replace the default starter content with the actual product pages.
