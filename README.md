# ☀️ Sun Dental — Premium 3D Dental Website

A stunning, immersive 3D dental clinic website for **Sun Dental, Kalaburagi** built with React, TypeScript, Three.js, Framer Motion & Tailwind CSS.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

---

## 🧰 Tech Stack

| Tech | Purpose |
|------|---------|
| React 18 + TypeScript | Core framework |
| Vite | Build tool |
| Three.js + @react-three/fiber | 3D rendering |
| @react-three/drei | 3D helpers (OrbitControls, Stars, etc.) |
| Framer Motion | Animations & transitions |
| Tailwind CSS | Utility-first styling |

---

## 📁 Project Structure

```
sun-dental/
├── public/
│   └── tooth.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.tsx     # Glow cursor effect
│   │   ├── LoadingScreen.tsx    # Animated 3D loader
│   │   └── Navbar.tsx           # Sticky glass navbar
│   ├── sections/
│   │   ├── HeroSection.tsx      # Full 3D hero with tooth model
│   │   ├── MarqueeSection.tsx   # Scrolling marquee banner
│   │   ├── AboutSection.tsx     # Clinic info + glass cards
│   │   ├── ServicesSection.tsx  # Interactive 8-service grid
│   │   ├── ReviewsSection.tsx   # Auto-scroll review carousel
│   │   ├── LocationSection.tsx  # 3D map pin + address
│   │   ├── ContactSection.tsx   # Animated contact form
│   │   └── FooterSection.tsx    # Clean footer
│   ├── three/
│   │   ├── HeroScene.tsx        # Main Canvas wrapper
│   │   ├── ToothModel.tsx       # Custom 3D tooth geometry
│   │   ├── OrbitingTools.tsx    # Dental tools in orbit
│   │   └── ParticleField.tsx    # Floating particle background
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## ✨ Features

- 🦷 **Custom 3D Tooth Model** — Built with Three.js geometry, floating & rotating
- 🔧 **Orbiting Dental Tools** — Mirror, scaler, gems orbit the tooth
- ✨ **Particle Field** — Subtle floating particles in hero background
- 🪟 **Glassmorphism UI** — Frosted glass cards throughout
- 🎬 **Framer Motion Animations** — Scroll-triggered, hover, spring physics
- 🖱️ **Custom Glow Cursor** — Smooth trailing cursor with glow
- ⏳ **Loading Screen** — 3D spinning tooth loader
- 📱 **Fully Responsive** — Mobile + tablet + desktop
- 🗺️ **3D Location Pin** — Interactive Three.js map element
- 📝 **Animated Contact Form** — Glass inputs with floating labels
- ⭐ **Review Carousel** — Auto-scrolling testimonials
- 🔤 **Marquee Banner** — Smooth infinite scroll

---

## 🎨 Design System

**Colors:**
- Navy: `#050d1a` — base background
- Sky Crystal: `#00d4ff` — primary accent
- Mint: `#00ffcc` — secondary accent
- Ice Blue: `#a8edff` — subtle highlights

**Fonts:**
- Display: `Syne` (headings, bold)
- Body: `DM Sans` (paragraphs, UI)

---

## 📞 Clinic Info

- **Name:** Sun Dental
- **Address:** Shop No. 10, MBH Complex, Near Kharge Petrol Bunk, Sedam Road, Kalaburagi, Karnataka 585105
- **Phone:** 099646 11955
- **Hours:** Mon–Sun, 10:00 AM – 10:00 PM
- **Rating:** ⭐ 5.0 (786 Reviews)

