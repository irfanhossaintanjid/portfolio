# Irfan Hossain — Full-Stack Developer Portfolio

A modern, high-performance, responsive portfolio web application crafted with a **Digital Architect** aesthetic. Featuring a cinematic multilingual animated greeting intro, interactive project case studies, dual-theme support (Midnight Blue & Light Slate), and accessible design.

> **Live Portfolio:** [https://irfanhossain.dev](https://irfanhossain.dev)  
> **Tagline:** *"Turning Ideas into Digital Solutions"*

---

## ✦ Key Features

1. **Cinematic Multilingual Animated Intro (`MultilingualGreeting`)**
   - Displays sequential greetings across 9 global languages: English (`Hello`), Spanish (`Hola`), French (`Bonjour`), Italian (`Ciao`), Japanese (`こんにちは`), Korean (`안녕하세요`), Arabic (`مرحباً` with RTL support), Hindi (`नमस्ते`), and Bengali (`হ্যালো`).
   - Symmetrical floating celestial ornaments (`✦ ◇` & `◇ ✦`) styled with electric blue and cyan accents.
   - Smooth 3–4 second intro that dissolves gracefully into the main website without jarring layout shifts.
   - Accessible keyboard-friendly **"Skip Intro"** button.
   - Respects `prefers-reduced-motion` settings.
   - Session-persistent in memory (plays on fresh load/reload, does not replay on client-side SPA navigation).

2. **Digital Architect Design System**
   - **Color Palette:**
     - Deep Midnight: `#0B1120`
     - Secondary Navy: `#172554`
     - Electric Blue: `#2563EB`
     - Bright Cyan: `#38BDF8`
     - White: `#F8FAFC`
   - Blueprint grid accents, ambient glow highlights, and dual-theme switcher (Midnight Dark & Clean Light).

3. **Project Showcase & Deep-Dive Case Studies**
   - **Framio:** Creative Studio Booking Marketplace — [Live App](https://framio-client.vercel.app) · [GitHub](https://github.com/irfanhossaintanjid/framio-client)
   - **BazarDor:** Commodity Market & Bengali Price Tracking Web Application — [Live App](https://bazardor-zeta-henna.vercel.app/) · [GitHub](https://github.com/irfanhossaintanjid/bazardor)
   - **FitLog:** Workout & Fitness Tracking Web Application — [Live App](https://fit-log-orpin-two.vercel.app/) · [GitHub](https://github.com/irfanhossaintanjid/assignment-6)
   - **Dev Stack Builder:** Interactive Developer Tool & Architecture Configurator — [Live App](https://dev-stack-builder.netlify.app/) · [GitHub](https://github.com/irfanhossaintanjid/assignment-5)
   - Includes real screenshots, technical breakdowns, engineering challenges, architecture details, and verified repository links.

4. **Interactive Contact Section & Modal**
   - Multi-channel direct contact cards (Email with 1-click clipboard copy, GitHub, LinkedIn).
   - Validated contact form with mailto fallback and optional Formspree API endpoint support.
   - Resume download action with fallback modal and direct mail request.

5. **Accessibility & SEO**
   - Semantic HTML5 structure, ARIA dialogs, accessible labels, and focus rings.
   - Open Graph, Twitter Cards, canonical tags, `sitemap.xml`, and `robots.txt`.
   - Zero-dependency client-side SEO page title manager.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Bundler & Dev Server:** [Vite 8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** Lightweight custom RouterContext with history API support
- **State & Theme:** React Context API with persistent localStorage theme preference

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   ├── profile.jpg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── images/
│       ├── profile.jpg
│       └── projects/
│           ├── framio.png
│           ├── bazardor.png
│           └── fitlog.png
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── AnimatedBackground.jsx
│   │   │   ├── CustomCursor.jsx
│   │   │   ├── MultilingualGreeting.jsx
│   │   │   ├── PageTransition.jsx
│   │   │   ├── ProjectPreview.jsx
│   │   │   ├── ResumeModal.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── Seo.jsx
│   │   │   ├── SocialIcons.jsx
│   │   │   ├── TechIcons.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   ├── MobileNavigation.jsx
│   │   │   └── Footer.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── ProjectCard.jsx
│   │       └── Contact.jsx
│   ├── context/
│   │   ├── RouterContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/
│   │   ├── personal.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   └── useScrollReveal.js
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   └── ProjectDetailPage.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
- `npm` or `pnpm`

### Installation

```bash
# Clone the repository
git clone https://github.com/irfanhossaintanjid/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```
Open your browser at `http://localhost:5173`.

### Code Quality & Linting

```bash
# Run ESLint validation
npm run lint
```

### Production Build & Preview

```bash
# Compile optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment to Vercel

1. Push your code to your GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import the `portfolio` repository.
4. Keep the default build configuration:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **"Deploy"**.

---

## 📄 License & Attribution

Designed and engineered by **Irfan Hossain** © 2026. All rights reserved.
