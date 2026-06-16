// src/data/projects.ts
// Semua data proyek ada di sini — tinggal edit file ini

export interface Project {
  slug: string; // untuk URL /projects#slug
  title: string;
  description: {
    id: string;
    en: string;
  };
  detail?: {
    id: string;
    en: string;
  };
  tags: string[];
  href?: string; // link live
  repo?: string; // link github
  image?: string; // URL gambar, GIF, atau path video (opsional)
  featured: boolean; // true = tampil di landing page preview
  year: number;
}

export const projects: Project[] = [
  {
    slug: "proyek-satu",
    title: "Nama Proyek Satu",
    description: {
      id: "Deskripsi singkat proyek ini dan masalah apa yang diselesaikan.",
      en: "A short description of this project and what problem it solves.",
    },
    detail: {
      id: "Penjelasan lebih panjang di halaman /projects. Bisa cerita tantangan teknis, keputusan arsitektur, atau hasil yang dicapai.",
      en: "A longer explanation on the /projects page. Can talk about technical challenges, architectural decisions, or results achieved.",
    },
    tags: ["Astro", "TypeScript", "Bun"],
    href: "https://proyek-satu.dev",
    repo: "https://github.com/usernamekamu/proyek-satu",
    image: "https://placehold.co/600x400/0a0a0c/00ffcc?text=Project+Preview",
    featured: true,
    year: 2024,
  },
  {
    slug: "proyek-dua",
    title: "Nama Proyek Dua",
    description: {
      id: "Deskripsi singkat proyek kedua yang langsung ke poinnya.",
      en: "A short description of the second project that gets straight to the point.",
    },
    tags: ["Go", "PostgreSQL", "Docker"],
    repo: "https://github.com/usernamekamu/proyek-dua",
    featured: true,
    year: 2024,
  },
  {
    slug: "proyek-tiga",
    title: "Nama Proyek Tiga",
    description: {
      id: "Proyek ketiga yang hanya tampil di halaman /projects.",
      en: "A third project that only appears on the /projects page.",
    },
    tags: ["Next.js", "Prisma", "Redis"],
    href: "https://proyek-tiga.dev",
    featured: false,
    year: 2023,
  },
  {
    slug: "proyek-empat",
    title: "Nama Proyek Empat",
    description: {
      id: "Proyek keempat. Tambah terus di sini.",
      en: "Fourth project. Keep adding more here.",
    },
    tags: ["Python", "FastAPI"],
    repo: "https://github.com/usernamekamu/proyek-empat",
    featured: false,
    year: 2023,
  },
];

// Helper — dipakai di landing page
export const featuredProjects = projects.filter((p) => p.featured);

// Helper — dipakai di /projects (semua, urut tahun)
export const allProjects = [...projects].sort((a, b) => b.year - a.year);
