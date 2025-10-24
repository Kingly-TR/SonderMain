# Sonder

A production-ready, modern homepage for Sonder - showcasing AI services that feel like magic.

## Overview

Sonder is a fast, responsive landing site built with Next.js 14 that serves as a hub for current and future AI-powered products including SonderMusic and SonderUni. The site features a premium, minimal design with tasteful animations and comprehensive product exploration capabilities.

## Tech Stack

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **shadcn/ui** + **Lucide React** for UI components and icons
- **next-themes** for dark/light mode support
- **ESLint** + **Prettier** for code quality

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   ├── products/[slug]/   # Dynamic product detail pages
│   └── legal/             # Privacy and terms pages
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation with theme toggle
│   ├── hero.tsx          # Animated hero section
│   ├── product-grid.tsx  # Interactive product explorer
│   └── ...               # Other sections and utilities
├── data/
│   └── products.ts       # Product data and utilities
└── lib/
    └── utils.ts          # Utility functions
```

## Adding a New Product

To add a new product to the site:

1. **Update the products data** in `src/data/products.ts`:
   ```typescript
   {
     slug: "your-product-slug",
     name: "Your Product Name",
     tagline: "Brief description of what it does",
     description: "Detailed description for the product page",
     status: "live" | "beta" | "coming_soon",
     href: "https://your-product-url.com", // Optional for live/beta
     tags: ["AI", "YourCategory"],
     icon: "LucideIconName", // Must be a valid Lucide React icon
   }
   ```

2. **The product will automatically appear** in:
   - Homepage product grid with search/filter functionality
   - Dynamic product detail page at `/products/your-product-slug`
   - Footer navigation
   - Roadmap section (if status is "beta" or "coming_soon")

## Customization

### Colors and Theming

The site uses a custom color palette defined in `src/app/globals.css`. Key brand colors:

- **Primary**: Near-black with subtle green accents
- **Secondary**: Soft grays and off-whites
- **Accent**: Green (#10b981 equivalent) for highlights

To customize colors, update the CSS custom properties in the `:root` and `.dark` selectors.

### Animations

Framer Motion animations are configured in individual components. Key animation settings:

- **Hero entrance**: Staggered fade-in with spring physics
- **Product cards**: Hover lift effects and micro-interactions
- **Scroll animations**: Triggered when elements enter viewport
- **Theme transitions**: Smooth color transitions on mode switch

To modify animations, edit the `motion.*` components and their `animate`, `transition`, and `whileHover` props.

### Fonts

The site uses:
- **Inter** for body text (clean, readable)
- **JetBrains Mono** for code/monospace elements

To change fonts, update the imports in `src/app/layout.tsx` and the corresponding CSS variables.

### Content

Main content areas to customize:

- **Hero section**: `src/components/hero.tsx`
- **About section**: `src/components/about-section.tsx` 
- **Product descriptions**: `src/data/products.ts`
- **SEO metadata**: `src/app/layout.tsx` and individual page files

## Features

### Interactive Product Explorer
- Real-time search across product names, taglines, and descriptions
- Tag-based filtering with visual feedback
- Status badges (Live, Beta, Coming Soon)
- Responsive grid layout with hover effects

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- High contrast color ratios
- Focus indicators
- Reduced motion support

### Performance
- Static generation for optimal loading
- Optimized images and fonts
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Lighthouse scores: 90+ across all metrics

### SEO
- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data markup
- Sitemap generation
- Proper heading hierarchy

## Deployment

The site is optimized for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **Any static hosting service**

For Vercel deployment:
```bash
npm run build
# Deploy via Vercel CLI or connect your GitHub repo
```

## Development

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Adding Components

1. Create new components in `src/components/`
2. Use shadcn/ui components as base: `npx shadcn@latest add [component]`
3. Follow the established patterns for animations and styling
4. Export from component files for clean imports

## License

This project is built for Sonder. All rights reserved.

## Support

For questions or support, contact [hello@sonder.com](mailto:hello@sonder.com).
