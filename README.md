# N7 Banking — SDE Full Stack Frontend Assignment

A pixel-perfect, fully responsive frontend implementation of the 
N7 Banking design built with React.js, TypeScript, and Tailwind CSS.

## Live Demo
[ADD VERCEL LINK]

## Tech Stack
- React.js 18 + Vite
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

## Getting Started

```bash
npm install
npm run dev        # development server → http://localhost:5173
npm run build      # production build
npm run preview    # preview production build locally
```

## Project Structure
```
src/
├── components/     # One file per section
├── constants/      # All static data (data.ts)
├── hooks/          # Reusable hooks
├── types/          # TypeScript interfaces
└── App.tsx         # Root with lazy-loaded sections
```

## What's Implemented
- All 14 sections from Figma Frame 74 (1440×9560px)
- Responsive breakpoints: 375px / 768px / 1440px
- Scroll-triggered animations (Framer Motion whileInView)
- Interactive case studies carousel
- Auto-scrolling marquee ticker
- Mobile hamburger menu
- Lazy-loaded section components for performance
- TypeScript interfaces for all data shapes
- Constants/data separation for scalability
