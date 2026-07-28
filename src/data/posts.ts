export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: 'menyusun-okr-yang-bisa-dieksekusi',
    title: 'Menyusun OKR yang Benar-Benar Bisa Dieksekusi Tim',
    excerpt: 'Ubah tujuan ambisius menjadi langkah mingguan yang jelas, terukur, dan tetap terhubung ke pekerjaan sehari-hari.',
    category: 'OKR',
    date: '18 Juli 2026',
    readTime: '6 menit baca',
    image: '/assets/okr-management.png',
    featured: true,
  },
  {
    slug: 'ritme-sprint-yang-sehat',
    title: 'Membangun Ritme Sprint yang Sehat untuk Tim',
    excerpt: 'Panduan praktis menata planning, daily check-in, dan retrospective tanpa menambah beban rapat.',
    category: 'Sprint',
    date: '11 Juli 2026',
    readTime: '5 menit baca',
    image: '/assets/sprint-execution.png',
  },
  {
    slug: 'dari-strategi-ke-tugas-harian',
    title: 'Dari Strategi ke Tugas Harian: Menjaga Arah Tetap Selaras',
    excerpt: 'Cara membuat setiap prioritas tim memberi dampak nyata terhadap tujuan organisasi.',
    category: 'Strategi',
    date: '3 Juli 2026',
    readTime: '7 menit baca',
    image: '/assets/strategy-planning.png',
  },
  {
    slug: 'mengukur-progres-tanpa-micromanage',
    title: 'Mengukur Progres Tanpa Micromanage',
    excerpt: 'Gunakan indikator yang tepat untuk menciptakan visibilitas, kepercayaan, dan keputusan yang lebih cepat.',
    category: 'Produktivitas',
    date: '26 Juni 2026',
    readTime: '4 menit baca',
    image: '/assets/task-progress-tracking.png',
  },
];
