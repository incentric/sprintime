# Sprintime Landing Page

Landing page dan blog statis berbasis Astro.

## Menjalankan proyek

```bash
npm install
npm run dev
```

Build produksi dijalankan dengan `npm run build`; hasilnya tersedia di `dist/`.

## Struktur

- `src/pages/` - route Astro (`/` dan `/blog/`)
- `src/components/` - komponen bersama
- `src/data/posts.ts` - sumber data artikel blog sementara
- `src/styles/` - token dan stylesheet global blog
- `public/assets/` - aset statis yang disajikan langsung oleh Astro

Landing lama dipertahankan sebagai sumber markup selama fase migrasi, sehingga tampilan produksi tidak berubah. Pengembangan halaman baru sebaiknya memakai komponen di `src/`. Saat aset baru ditambahkan, letakkan di `public/assets/` dan referensikan dari root URL (contoh: `/assets/gambar.png`).
