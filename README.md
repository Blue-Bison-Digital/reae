# REAE - Real Estate Appointment Engine

Marketing site for REAE — a done-for-you seller appointment system for real estate agents.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript (strict mode)
- Tailwind CSS v4
- Framer Motion (scroll animations)
- Lucide React (icons)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deploy to Vercel

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy to production
vercel --prod
```

After deploying:

1. Add custom domain in Vercel dashboard: `getreae.com`
2. Update DNS at your registrar to point to Vercel (Vercel will provide the records)

## Configuration

### Facebook Pixel

Replace `YOUR_PIXEL_ID_HERE` in `app/layout.tsx` with your actual Facebook Pixel ID.

### OG Image

Replace `public/og-image.png` with your actual Open Graph image (1200x630px recommended).

### Founder Photo

In `components/About.tsx`, replace the placeholder icon with an actual `<Image>` tag pointing to your headshot.
