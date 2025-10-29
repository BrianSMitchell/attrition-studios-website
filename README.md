# Attrition Studios Website

A modern, dark-themed portfolio website showcasing custom software development projects and services.

## 🎨 Design

Built with a futuristic neon aesthetic featuring:
- Dark space-themed background
- Neon cyan (#00d9ff), pink (#ff006e), and purple (#8b5cf6) accents
- Smooth animations and hover effects
- Fully responsive design

## 🚀 Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vercel** - Deployment platform

## 📦 Project Structure

```
attrition-studios-website/
├── app/
│   ├── components/
│   │   ├── Hero.tsx          # Landing section with animated logo
│   │   ├── Projects.tsx      # Portfolio showcase
│   │   ├── About.tsx         # Company story and expertise
│   │   ├── Services.tsx      # Service offerings
│   │   ├── Contact.tsx       # Contact form
│   │   └── Footer.tsx        # Site footer
│   ├── globals.css           # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page composition
├── public/
│   └── images/               # Static assets
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/attrition-studios-website.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Connect Custom Domain:**
   - In Vercel project settings, go to "Domains"
   - Add `www.attritionstudios.com`
   - Follow DNS configuration instructions

### Environment Variables

No environment variables required for basic deployment. Contact form functionality can be added later with services like:
- Formspree
- Resend
- SendGrid

## 📄 Features

### Sections

- **Hero** - Eye-catching landing with animated logo and CTAs
- **Projects** - Showcase of 4 key projects with live links
- **About** - Company story and core competencies
- **Services** - Detailed service offerings with icons
- **Contact** - Form for potential client inquiries
- **Footer** - Quick navigation and project links

### Highlights

✅ Smooth scroll navigation  
✅ Neon glow effects and animations  
✅ Responsive mobile-first design  
✅ SEO optimized metadata  
✅ Fast performance with Next.js  
✅ TypeScript for type safety  

## 🎯 Featured Projects

1. **Echo Valley Winery** - Restaurant website ([echovalleywine.com](https://www.echovalleywine.com))
2. **Attrition Game** - Browser-based strategy game ([attritiongame.dev](https://www.attritiongame.dev))
3. **Food Costing Software** - Restaurant management tool
4. **Point of Sale System** - Custom POS for hospitality (in development)

## 📝 Future Enhancements

- [ ] Add logo image to Hero section
- [ ] Implement functional contact form
- [ ] Add project screenshots/demos
- [ ] Create blog section
- [ ] Add case studies
- [ ] Implement dark/light mode toggle
- [ ] Add analytics (Google Analytics, Vercel Analytics)
- [ ] Create sitemap and robots.txt
- [ ] Add testimonials section

## 🤝 Contact

For inquiries, please use the contact form on the website or reach out through the featured projects.

---

© 2025 Attrition Studios. All rights reserved.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
