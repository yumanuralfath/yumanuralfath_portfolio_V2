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
  repo?: string; // link repo (general)
  frontend_repo?: string; // link repo frontend (opsional)
  backend_repo?: string; // link repo backend (opsional)
  download_url?: string; // link download (opsional)
  image?: string; // URL gambar, GIF, atau path video (opsional)
  featured: boolean; // true = tampil di landing page preview
  year: number;
}

export const projects: Project[] = [
  {
    slug: "redio",
    title: "Redio TUI app radio player",
    description: {
      id: "Deskripsi singkat proyek ini dan masalah apa yang diselesaikan.",
      en: "A short description of this project and what problem it solves.",
    },
    detail: {
      id: "Penjelasan lebih panjang di halaman /projects. Bisa cerita tantangan teknis, keputusan arsitektur, atau hasil yang dicapai.",
      en: "A longer explanation on the /projects page. Can talk about technical challenges, architectural decisions, or results achieved.",
    },
    tags: ["Astro", "TypeScript", "Bun"],
    repo: "https://github.com/usernamekamu/proyek-satu",
    download_url: "https://github.com/usernamekamu/proyek-satu/releases",
    image:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1781598313/redio_euwkxw.gif",
    featured: true,
    year: 2026,
  },
  {
    slug: "baitul-mal",
    title: "Baitul Mal Plus",
    description: {
      id: "Deskripsi singkat proyek kedua yang langsung ke poinnya.",
      en: "A short description of the second project that gets straight to the point.",
    },
    tags: ["Flutter", "Sqlite"],
    repo: "https://github.com/yumanuralfath/baitul_mal",
    download_url:
      "https://github.com/yumanuralfath/baitul_mal/releases/tag/v1.2.5",
    image:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1781598561/baitul_xhwwgv.gif",
    featured: true,
    year: 2026,
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
