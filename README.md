# Sentryl — Creative Showcase Website

> **AI Email Forensics for Microsoft Edge**  
> An editorial, cinematic web experience investigating suspicious Gmail and Outlook messages by exposing hidden forensic signals.

---

## 🛠️ Development & Build

This project is built with **Vite** and modular **Vanilla JavaScript (ES Modules)**, styled with tailored vanilla CSS and animated with **GSAP + ScrollTrigger** and **Lenis** smooth scrolling.

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
```bash
npm install
```

### Local Development Server
Starts the Vite dev server with hot module replacement (HMR):
```bash
npm run dev
```

### Production Build
Bundles and optimizes production assets into `/dist`:
```bash
npm run build
```

### Preview Production Build
Locally previews the production `/dist` build:
```bash
npm run preview
```

---

## 📂 Architecture & Directory Structure

```
sentryl/
├── public/
│   └── favicon.svg           # Sentryl monogram mark (#D7E2EA on #0C0C0C)
├── src/
│   ├── animations/
│   │   ├── intro.js          # Full 6-scene cinematic forensic intro timeline & replay
│   │   ├── lenis.js          # Lenis smooth scrolling engine synced to GSAP ticker
│   │   └── scroll.js         # GSAP ScrollTrigger entrances & signature scrub
│   ├── components/
│   │   ├── FAQ/              # Accordion component (FAQ.css, FAQ.js)
│   │   ├── Footer/           # Minimal footer & editorial modals (Footer.css, Footer.js)
│   │   ├── MailClient/       # Realistic desktop webmail simulator (MailClient.css)
│   │   ├── Menu/             # Three-dot morphing toggle & right drawer (Menu.css, Menu.js)
│   │   └── Navbar/           # Minimal fixed top navigation with logo replay (Navbar.css, Navbar.js)
│   ├── sections/
│   │   ├── Comparison/       # "Looks the same. / It isn't." split-screen (Comparison.css)
│   │   ├── Evidence/         # Evidence deconstruction vectors (Evidence.css)
│   │   ├── FinalCTA/         # Final conversion section & glow (FinalCTA.css)
│   │   ├── Hero/             # Editorial headline & MailClient stage (Hero.css)
│   │   ├── HowItWorks/       # 3-step investigation process (HowItWorks.css)
│   │   ├── Intro/            # 6-scene intro overlay & fragments (Intro.css)
│   │   ├── Philosophy/       # Signature statement scroll-scrub reveal (Philosophy.css)
│   │   ├── Privacy/          # Zero-telemetry & local inspection principles (Privacy.css)
│   │   └── Verdict/          # High-confidence verdict display (Verdict.css)
│   ├── styles/
│   │   ├── base.css          # CSS reset, box sizing, container primitives
│   │   ├── index.css         # Master stylesheet manifest importing all tokens, components & sections
│   │   ├── responsive.css    # Responsive breakpoints (1440px, 1024px, 390px)
│   │   ├── tokens.css        # Palette (#0C0C0C, #D7E2EA, cyan/red accents) & easings
│   │   └── typography.css    # Inter Tight (600), Inter (400/500), JetBrains Mono (labels)
│   └── main.js               # Application entrypoint & boot orchestration
├── index.html                # Semantic HTML5 document
├── package.json              # Project scripts & npm dependencies (vite, gsap, lenis)
└── README.md
```

---

## 🖼️ Open Graph Image Note (`og-image.png`)

> [!NOTE]  
> A placeholder image was **not** generated. Please capture a real 1200×630px high-resolution screenshot of the site (e.g., the Hero or Split-Screen Comparison section), save it as `og-image.png` inside the `public/` directory, and update the Open Graph `<meta property="og:image" content="/og-image.png">` tag in `index.html`.

---

## 📬 Contact & Support

For questions, inquiries, or feedback regarding Sentryl, contact:  
`sentrylsupport@gmail.com`
