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
  download_url?: string; // legacy link download (opsional)
  downloads?: {
    platform: "windows" | "linux" | "android" | "ios" | "web";
    url: string;
  }[];
  image?: string; // URL gambar, GIF, atau path video (opsional)
  thumbnail?: string; // URL thumbnail statis (opsional)
  video?: string; // URL video webm/mp4 (opsional)
  featured: boolean; // true = tampil di landing page preview
  year: number;
}

export const projects: Project[] = [
  {
    slug: "npy",
    title: "NPY: Network Pharmacology Pipeline",
    description: {
      id: "Pipeline otomatis untuk analisis network pharmacology, mengintegrasikan GeneCard, SwissTarget, PantherDB, dan STRING.",
      en: "Automated pipeline for network pharmacology analysis, integrating GeneCard, SwissTarget, PantherDB, and STRING.",
    },
    detail: {
      id: "NPY (Network Pharmacology Pipeline) adalah alat bantu riset biokimia yang mengotomatisasi pengumpulan data dari berbagai database bioinformatika. Pipeline ini mempercepat proses identifikasi target gen, prediksi interaksi obat, analisis jalur fungsional, dan konstruksi jaringan protein-protein interaction (PPI).",
      en: "NPY (Network Pharmacology Pipeline) is a biochemistry research tool that automates data collection from various bioinformatics databases. This pipeline accelerates the process of gene target identification, drug interaction prediction, functional pathway analysis, and protein-protein interaction (PPI) network construction.",
    },
    tags: [
      "Rust",
      "Bioinformatics",
      "Pharmacology",
      "Web Scraping",
      "CLI",
      "Automation",
    ],
    repo: "https://github.com/yumanuralfath/npy",
    downloads: [
      {
        platform: "windows",
        url: "https://github.com/yumanuralfath/npy/releases/download/1.0.0/NPY_Setup.exe",
      },
      {
        platform: "linux",
        url: "https://drive.google.com/file/d/1KOuJGJWasdytUrWLQO0tHArpDXoEM_O3/view?usp=sharing",
      },
    ],
    thumbnail:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1781699457/2026-06-17_19-20-55_qkkajv_poster.jpg",
    video:
      "https://res.cloudinary.com/dx8dogwhc/video/upload/v1781699248/2026-06-17_19-20-55_qkkajv.webm",
    featured: true,
    year: 2025,
  },
  {
    slug: "yomodoro",
    title: "Yomodoro: Pomodoro Tracker",
    description: {
      id: "Aplikasi pengatur waktu Pomodoro berbasis web yang terintegrasi dengan pelacak sesi kerja dan statistik produktivitas.",
      en: "Web-based Pomodoro timer application integrated with work session tracking and productivity statistics.",
    },
    detail: {
      id: "Yomodoro dirancang untuk meningkatkan produktivitas dengan memadukan teknik Pomodoro klasik dan pencatatan sesi kerja secara otomatis. Pengguna dapat melacak sesi fokus, mengelola riwayat tugas, dan melihat statistik performa kerja mereka. Dibangun menggunakan Laravel 13, Inertia.js (React), TailwindCSS v4, Radix UI, dan TypeScript.",
      en: "Yomodoro is designed to boost productivity by automatically combining the classic Pomodoro technique with work session logging. Users can track focus sessions, manage task history, and view work performance statistics. Built using Laravel 13, Inertia.js (React), TailwindCSS v4, Radix UI, and TypeScript.",
    },
    tags: ["Laravel", "Inertia.js", "React", "TypeScript", "TailwindCSS"],
    href: "https://yumana.gamer.gd/",
    repo: "https://github.com/yumanuralfath/yomodoro",
    thumbnail:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1783915323/2026-07-13_10-58-55_gpmgmt_poster.jpg",
    video:
      "https://res.cloudinary.com/dx8dogwhc/video/upload/v1783915245/2026-07-13_10-58-55_gpmgmt.mkv",
    featured: true,
    year: 2026,
  },
  {
    slug: "portfolio-website",
    title: "Portofolio Website V.2.0",
    description: {
      id: "Website portofolio pribadi versi kedua yang dibangun dengan Astro, TailwindCSS, dan TypeScript untuk menampilkan proyek dan profil secara interaktif.",
      en: "Second version of my personal portfolio website, built with Astro, TailwindCSS, and TypeScript to showcase projects and profile interactively.",
    },
    detail: {
      id: "Proyek ini dirancang ulang dengan fokus pada kecepatan performa dan estetika lab modern. Menggunakan Astro untuk static-site generation (SSG) super cepat, TailwindCSS untuk tata letak responsif, dan TypeScript demi keamanan kode. Dilengkapi dengan galeri proyek interaktif (dilengkapi video preview) serta dukungan multibahasa (i18n).",
      en: "This project is redesigned with a focus on speed performance and modern lab aesthetics. It uses Astro for super-fast static-site generation (SSG), TailwindCSS for responsive layouts, and TypeScript for code safety. Features include an interactive project gallery (with video previews) and multi-language support (i18n).",
    },
    tags: ["Astro", "TailwindCSS", "TypeScript", "i18n", "Responsive"],
    repo: "https://github.com/yumanuralfath/yumanuralfath_portfolio_V2",
    featured: true,
    image:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1783914683/screenshot_13072026_105006_fonogb.png",
    year: 2026,
  },
  {
    slug: "redio",
    title: "Redio: TUI Radio Player",
    description: {
      id: "Pemutar radio berbasis terminal (TUI) yang ringan dan cepat, dibangun dengan Rust untuk para pecinta command line.",
      en: "A lightweight and fast terminal-based (TUI) radio player built with Rust for command-line enthusiasts.",
    },
    detail: {
      id: "Redio menghadirkan pengalaman mendengarkan radio global langsung dari terminal Anda. Menggunakan Radio-Browser API, aplikasi ini menawarkan ribuan stasiun dari seluruh dunia. Dibangun dengan performa Rust dan framework Ratatui, Redio memberikan antarmuka yang responsif dengan konsumsi sumber daya yang minimal.",
      en: "Redio brings a global radio listening experience directly to your terminal. Powered by the Radio-Browser API, it offers thousands of stations worldwide. Built with the performance of Rust and the Ratatui framework, Redio provides a responsive interface with minimal resource consumption.",
    },
    tags: ["Rust", "TUI", "CLI", "Ratatui", "Tokio", "Radio-Browser API"],
    repo: "https://github.com/yumanuralfath/radio_browser_rust",
    downloads: [
      {
        platform: "linux",
        url: "https://crates.io/crates/redio",
      },
    ],
    thumbnail:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1781677818/2026-06-17_13-24-41_ahwhyu_poster.jpg",
    video:
      "https://res.cloudinary.com/dx8dogwhc/video/upload/v1781677675/2026-06-17_13-24-41_ahwhyu.webm",
    featured: true,
    year: 2026,
  },
  {
    slug: "baitul-mal",
    title: "Baitul Mal Plus",
    description: {
      id: "Aplikasi manajemen tabungan komunitas yang dirancang untuk membantu pengelolaan keuangan kelompok secara transparan.",
      en: "A community savings management app designed to help groups manage their finances transparently.",
    },
    detail: {
      id: "Berawal dari kebutuhan nyata komunitas lokal, Baitul Mal Plus membantu ibu-ibu pengajian dalam mencatat dan mengelola tabungan bersama secara digital. Dibangun dengan Flutter dan penyimpanan SQLite, aplikasi ini memastikan data tetap aman secara offline dan mudah diakses oleh siapa saja tanpa memerlukan infrastruktur cloud yang rumit.",
      en: "Born from the real needs of a local community, Baitul Mal Plus helps a local mosque group record and manage their collective savings digitally. Built with Flutter and SQLite storage, this app ensures data remains secure offline and easily accessible to anyone without needing complex cloud infrastructure.",
    },
    tags: ["Flutter", "Dart", "SQLite", "Mobile", "Local-first"],
    repo: "https://github.com/yumanuralfath/baitul_mal",
    downloads: [
      {
        platform: "android",
        url: "https://github.com/yumanuralfath/baitul_mal/releases/tag/v1.3.0",
      },
    ],
    thumbnail:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1781678927/baitul_tfcnqm_poster.jpg",
    video:
      "https://res.cloudinary.com/dx8dogwhc/video/upload/v1781678674/baitul_tfcnqm.webm",
    featured: true,
    year: 2026,
  },
  {
    slug: "api-c-openwrt",
    title: "OpenWrt C API",
    description: {
      id: "API performa tinggi untuk perangkat OpenWrt dengan sumber daya terbatas, ditulis seluruhnya dalam bahasa C.",
      en: "High-performance API for resource-constrained OpenWrt devices, written entirely in C.",
    },
    detail: {
      id: "Dirancang khusus untuk arsitektur RAMIPS MT76X8, proyek ini menunjukkan bagaimana C dapat digunakan untuk membangun layanan web yang sangat efisien pada perangkat router. Fokus utama adalah pada manajemen memori yang ketat dan kecepatan eksekusi.",
      en: "Designed specifically for the RAMIPS MT76X8 architecture, this project demonstrates how C can be used to build highly efficient web services on router devices. The main focus is on tight memory management and execution speed.",
    },
    tags: ["C", "OpenWrt", "Embedded", "Networking", "Low-level"],
    repo: "https://github.com/yumanuralfath/api_c_openwrt",
    featured: false,
    downloads: [
      {
        platform: "linux",
        url: "https://github.com/yumanuralfath/api_c_openwrt/releases/download/v1.1.9/api_c_1.1-3_mipsel_24kc.ipk",
      },
    ],
    year: 2025,
  },
  {
    slug: "alfath-save-ps2",
    title: "PS2 Virtual Memory Card Reader",
    description: {
      id: "Utilitas untuk membaca dan mengelola file save Virtual Memory Card PlayStation 2.",
      en: "A utility to read and manage PlayStation 2 Virtual Memory Card save files.",
    },
    detail: {
      id: "Sebuah proyek eksplorasi struktur data file biner. Aplikasi ini memungkinkan pengguna untuk membedah isi memory card PS2, mengekstrak ikon, dan mengelola save data langsung dari komputer menggunakan bahasa C. Proyek ini juga tersedia di AUR (Arch User Repository) dengan nama alfathsave.",
      en: "A project exploring binary file data structures. This application allows users to dissect PS2 memory card contents, extract icons, and manage save data directly from a computer using C. This project is also available on the AUR (Arch User Repository) as alfathsave.",
    },
    tags: ["C", "Reverse Engineering", "PS2", "Binary Parser", "AUR"],
    repo: "https://github.com/yumanuralfath/alfath_save_ps2",
    downloads: [
      {
        platform: "linux",
        url: "https://aur.archlinux.org/packages/alfathsave",
      },
    ],
    featured: false,
    image:
      "https://res.cloudinary.com/dx8dogwhc/image/upload/v1781681146/screenshot_17062026_142505_cykoa4.png",
    year: 2024,
  },
];

// Helper — dipakai di landing page
export const featuredProjects = projects.filter((p) => p.featured);

// Helper — dipakai di /projects (semua, urut tahun)
export const allProjects = [...projects].sort((a, b) => b.year - a.year);
