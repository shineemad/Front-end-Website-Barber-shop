<div align="center">

  <br />

  <!-- Logo / Title -->
  <h1>
    <img src="https://img.shields.io/badge/BARON'S-BARBERSHOP-C9A84C?style=for-the-badge&labelColor=0B1F14&color=C9A84C" alt="Baron's Barbershop" />
  </h1>

  <p><em>Premium Gentlemen's Grooming Experience — Crafted with Precision.</em></p>

  <br />

  <!-- Badges -->

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react&logoColor=white&labelColor=20232a)
![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=flat-square&logo=vite&logoColor=white&labelColor=1a1a2e)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white&labelColor=0f172a)
![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=flat-square&logo=greensock&logoColor=white&labelColor=1a1a1a)
![License](https://img.shields.io/badge/License-MIT-gold?style=flat-square)

<br /><br />

  <!-- 🔗 LIVE DEMO LINK — replace the URL below after deploying -->
  <a href="https://baronbarbershop.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🌐  Live%20Demo-Visit%20Site-C9A84C?style=for-the-badge&labelColor=0B1F14" alt="Live Demo" />
  </a>

<br /><br />

---

</div>

## 📸 Preview

> _Screenshots / GIF of the site go here — replace the placeholder below_

<div align="center">
  <img src="1.png" alt="Baron's Barbershop Preview" width="100%" style="border-radius:8px;" />
</div>

---

## 🗂️ Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Tech Stack](#-tech-stack)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Animations Per Section](#-animations-per-section)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🪒 Overview

**Baron's Barbershop** is a premium, Awwwards-inspired barbershop website built with a focus on sophisticated visual storytelling, smooth GSAP animations, and a fully responsive layout.

The design language is:

- **Premium** — gold accents on deep forest green backgrounds
- **Gentleman** — refined serif typography (Playfair Display) paired with clean mono labels
- **Masculine** — bold compositions, strong contrasts, disciplined whitespace

---

## 🌐 Live Demo

> 🔗 **<a href="https://baronbarbershop.vercel.app/">live demo here</a>**
>

---

## 🛠️ Tech Stack

| Technology                               | Version | Purpose                              |
| ---------------------------------------- | ------- | ------------------------------------ |
| [React](https://react.dev)               | 18.2    | UI Component Framework               |
| [Vite](https://vitejs.dev)               | 5.2     | Build Tool & Dev Server              |
| [Tailwind CSS](https://tailwindcss.com)  | 3.4     | Utility-First Styling                |
| [GSAP](https://gsap.com)                 | 3.12    | Animations & ScrollTrigger           |
| [Google Fonts](https://fonts.google.com) | —       | Playfair Display · DM Sans · DM Mono |

---

## ✨ Features

- 🎬 **Awwwards-level GSAP animations** — clip-path reveals, slide-up text, magnetic buttons
- 🖱️ **Custom dual-layer cursor** — dot + ring with hover scale effect (desktop only)
- 📜 **ScrollTrigger per section** — each section has its own entrance animation
- 🖼️ **Parallax hero background** — smooth scrub parallax using GSAP
- 📣 **Infinite marquee ticker** — seamless CSS loop with CSS animation
- 🔢 **Animated stat counters** — count up from 0 on scroll
- 🖼️ **Masonry gallery** — clip-path reveal + hover scale
- 💬 **Auto-advancing testimonial slider** — smooth cross-fade every 5.5s
- 🎯 **Magnetic blob buttons** — GSAP-powered liquid blob follow effect
- 📱 **Fully responsive** — mobile, tablet, and desktop optimized
- ☰ **Animated mobile menu** — GSAP height/opacity transition
- 🌿 **Scroll-aware navbar** — background blur activates after 55px scroll
- ⚡ **Optimized performance** — lazy-loaded images, minimal re-renders

---

## 📁 Project Structure

```
Web Barber/
├── public/
│   └── favicon.svg
├── src/
│   ├── constants/
│   │   └── data.js               # All static data (services, pricing, testimonials, etc.)
│   ├── utils/
│   │   └── animations.js         # GSAP + ScrollTrigger setup & exports
│   ├── hooks/
│   │   └── useGSAP.js            # Custom hook: scoped GSAP context with auto-cleanup
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx        # Magnetic blob button component
│   │   │   ├── CustomCursor.jsx  # Dual-layer custom cursor (dot + ring)
│   │   │   └── SectionTitle.jsx  # Animated eyebrow + title + subtitle
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Fixed nav with scroll-aware bg + mobile menu
│   │   │   └── Footer.jsx        # Footer with stagger reveal animation
│   │   └── sections/
│   │       ├── Hero.jsx          # Full-screen hero with parallax BG
│   │       ├── Marquee.jsx       # Gold infinite ticker strip
│   │       ├── About.jsx         # Story section with counter stats
│   │       ├── Services.jsx      # 6-card services grid
│   │       ├── Gallery.jsx       # Masonry image gallery
│   │       ├── Pricing.jsx       # 3-tier pricing cards
│   │       ├── Testimonials.jsx  # Auto-advancing testimonial slider
│   │       └── Booking.jsx       # CTA section with opening hours
│   ├── App.jsx                   # Root component — composes all sections
│   ├── main.jsx                  # React DOM entry point
│   └── index.css                 # Tailwind imports + global styles + @keyframes
├── index.html                    # HTML shell (Google Fonts loaded here)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎞️ Animations Per Section

| Section          | GSAP Animations                                                                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Hero**         | Clip-path slide-up headline (3 lines), overlay fade-in, eyebrow reveal, CTA stagger, parallax BG scrub, scroll dot bounce      |
| **Marquee**      | Entrance opacity fade-in on scroll                                                                                             |
| **About**        | Image clip-path reveal, image parallax scrub, gold line scale-from-left, paragraph stagger fade-up, stat counters count from 0 |
| **Services**     | Cards stagger fade-up from below (Y + opacity)                                                                                 |
| **Gallery**      | Per-image clip-path reveal (staggered by column), hover scale on image                                                         |
| **Pricing**      | Cards stagger fade-up with opacity                                                                                             |
| **Testimonials** | Section fade-up entrance, quote cross-fade (opacity + Y) on slide change                                                       |
| **Booking**      | Gold line scale reveal, headline clip-path reveal, subtitle + buttons + hours stagger                                          |
| **Footer**       | Horizontal line scale-from-left, columns stagger fade-up                                                                       |
| **Navbar**       | Logo + links + CTA entrance animation on mount                                                                                 |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **v18+**
- npm **v9+**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/barons-barbershop.git

# 2. Navigate to the project directory
cd barons-barbershop

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

---

## 📜 Scripts

| Command           | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start development server at `localhost:5173` |
| `npm run build`   | Build for production (outputs to `dist/`)    |
| `npm run preview` | Preview the production build locally         |

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts, then copy your deployment URL and
# update the Live Demo badge at the top of this README.
```

### Deploy to Netlify

```bash
# Build first
npm run build

# Drag and drop the `dist/` folder to https://app.netlify.com/drop
# OR use Netlify CLI:
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

npm run build
npm run deploy
```

> 📌 **After deploying**, update the Live Demo link at the top of this file:
>
> ```
> https://your-deploy-url-here.vercel.app  ← replace with your actual URL
> ```

---

## 🎨 Design Tokens

| Token        | Value     | Usage                        |
| ------------ | --------- | ---------------------------- |
| `forest-950` | `#05110A` | Darkest BG (footer)          |
| `forest-900` | `#0B1F14` | Primary background           |
| `forest-800` | `#112818` | Card hover fill              |
| `forest-700` | `#163220` | Borders, dividers            |
| `gold-500`   | `#C9A84C` | Primary accent (CTAs, icons) |
| `gold-400`   | `#D4B86A` | Hover states                 |
| `cream-100`  | `#F5F0E8` | Primary text                 |
| `cream-300`  | `#C5BDB0` | Secondary text               |
| `cream-400`  | `#9E9589` | Muted text                   |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ☕ and precision.

**BARON'S** · _Est. 2009_ · Premium Gentlemen's Grooming

  <br />

[![GitHub Stars](https://img.shields.io/github/stars/your-username/barons-barbershop?style=social)](https://github.com/your-username/barons-barbershop)

</div>
