# Muhammed Batuhan Bayram — Portfolio

Modern, hızlı ve erişilebilir kişisel site. Next.js App Router, Tailwind CSS ve Framer Motion ile geliştirildi.

## Tech
- Next.js 16 (App Router, `src/app`)
- Tailwind CSS v4
- Framer Motion, lucide-react, react-icons

## Scripts
```bash
npm run dev     # local development (opsiyonel)
npm run build   # production build
npm start       # run the built app
```

## Deploy

### Vercel (önerilen)
1) Reponu Vercel’e bağla (Import Project).
2) Framework: Next.js. Build Command: `npm run build`. Output: otomatik.
3) Ortam değişkenlerini (varsa) Vercel Dashboard’dan ekle ve Deploy.

### Cloudflare Pages
1) Pages → Connect to Git → Framework preset: Next.js
2) Build Command: `npm run build`  •  Output dir: `.next`
3) Node compatibility’yi aç. SSR özellikleri için Pages’in Next.js entegrasyonu aktif olmalıdır.

## İçerik / Varlıklar
- Sertifika görselleri: `public/certs/...`
- Sertifika verileri: `src/data/certificates.js`

## Çalışma Notları
- SEO & meta: `src/app/layout.js`, `src/app/robots.js`, `src/app/sitemap.js`
- Ana sayfa: `src/app/page.js`
- Navigasyon/Altlık: `src/components/Nav.js`, `src/components/Footer.js`

## Env
- `.env*` dosyaları `.gitignore` içinde. Prod env’leri doğrudan Vercel/Cloudflare üzerinden tanımlayın.

## Lisans
MIT © Muhammed Batuhan Bayram
