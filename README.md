# 🚀 Portfolio Website — Setup & Deployment Guide

## Tech Stack
- **React 18** + **Vite 5** — fast development & build
- **CSS Modules** — scoped, collision-free styling
- **No external UI libraries** — 100% custom, lightweight

---

## 1. Instalasi & Jalankan Lokal

```bash
# Clone atau extract project ini
cd portfolio

# Install dependencies
npm install

# Jalankan development server
npm run dev
# → Buka http://localhost:5173
```

---

## 2. Konfigurasi: Ganti Placeholder dengan Data Asli

### A. Nama & Info Pribadi
| File | Placeholder | Ganti dengan |
|------|------------|--------------|
| `index.html` | `[Your Name]` | Nama lengkapmu |
| `src/components/Navbar.jsx` | `[YourName]` | Nama pendek/alias |
| `src/components/Hero.jsx` | `[Your Name]` | Nama lengkapmu |
| `src/components/Footer.jsx` | `[Your Name]` | Nama lengkapmu |

### B. Link Penting
| File | Variabel | Link |
|------|----------|------|
| `src/components/Navbar.jsx` | `YOUR_CV_LINK_HERE` | Google Drive link CV (set "Anyone with link can view") |
| `src/components/Hero.jsx` | `YOUR_CV_LINK_HERE` | Sama seperti di atas |
| `src/components/Contact.jsx` | `EMAIL` | Email aktifmu |
| `src/components/Contact.jsx` | `LINKEDIN` | URL profil LinkedIn |
| `src/components/Contact.jsx` | `GITHUB` | URL profil GitHub |

### C. Project Links (di `src/components/Projects.jsx`)
```js
// DapurSybilla
demoUrl: 'YOUR_DEMO_VIDEO_URL',      // Link Loom/YouTube (rekam layar aplikasimu)
caseStudyUrl: 'YOUR_CASE_STUDY_URL', // Link artikel Notion/Medium

// Digital Invitation Catalog
liveUrl: 'YOUR_LIVE_URL_HERE',       // URL deploy (Vercel/Netlify/GitHub Pages)
githubUrl: 'YOUR_GITHUB_REPO_URL',   // Link repo publik
```

### D. Screenshot DapurSybilla
1. Buat folder `public/img/`
2. Simpan 3 screenshot: `ds-home.png`, `ds-catalog.png`, `ds-admin.png`
3. Di `Projects.jsx`, ganti div `.screenshotPlaceholder` dengan:
```jsx
<img src="/img/ds-home.png" alt="DapurSybilla homepage" style={{ width: '100%', borderRadius: '4px' }} />
```

---

## 3. Build untuk Production

```bash
npm run build
# Output ada di folder /dist
```

---

## 4. Deploy ke Vercel (GRATIS — Rekomendasi)

### Cara termudah (via Vercel CLI):
```bash
npm install -g vercel
vercel
# Ikuti instruksi — pilih framework: Vite
```

### Atau via GitHub:
1. Push project ke GitHub: `git push origin main`
2. Buka [vercel.com](https://vercel.com) → Import Project
3. Pilih repo-mu → Deploy
4. Otomatis live! URL: `https://namamu.vercel.app`

### Custom Domain (opsional, ~$12/tahun):
- Beli domain `namamu.dev` di Namecheap/Cloudflare
- Di Vercel: Settings → Domains → Add → ikuti instruksi DNS

---

## 5. Deploy ke Netlify (Alternatif)

```bash
npm run build
# Upload folder /dist ke netlify.com/drop
```

---

## 6. Struktur File

```
portfolio/
├── public/
│   ├── favicon.svg
│   └── img/          ← taruh screenshot di sini
├── src/
│   ├── components/
│   │   ├── Navbar.jsx + .module.css
│   │   ├── Hero.jsx + .module.css
│   │   ├── About.jsx + .module.css
│   │   ├── Projects.jsx + .module.css
│   │   ├── Contact.jsx + .module.css
│   │   └── Footer.jsx + .module.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 7. Fitur yang Sudah Ada

- ✅ Custom animated cursor
- ✅ Smooth scroll navigation
- ✅ Typewriter effect di Hero (4 role bergantian)
- ✅ Scroll-triggered animations (fade up)
- ✅ Animated skill bars (About section)
- ✅ "Copy email" button di Contact
- ✅ Dark mode otomatis (via `prefers-color-scheme`)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ SEO meta tags di index.html
- ✅ Sticky navbar dengan blur effect saat scroll
- ✅ Browser mockup frame untuk DapurSybilla

---

## Tips Tambahan

- Jalankan `npm run build` → cek ukuran bundle (`dist/assets/`) — targetkan < 200kb JS
- Test di mobile: buka DevTools → Toggle device toolbar
- Validasi SEO: [web.dev/measure](https://web.dev/measure)
- Cek aksesibilitas: Lighthouse di Chrome DevTools
