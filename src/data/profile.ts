export interface Profile {
  name: string;
  title: string;
  avatar: string;
  domain: string;
  email: string;
  location: string;
  tagline: {
    id: string;
    en: string;
  };
  bio_short: {
    id: string;
    en: string;
  };
  bio_full: {
    id: string[];
    en: string[];
  };
  links: {
    github: string;
    linkedin: string;
    whatsapp: string;
    instagram: string;
    facebook: string;
    discord: string;
    codeberg: string;
  };
}

export const profile: Profile = {
  name: "Yuma Nur Alfath",
  title: "Software Developer",
  avatar: "/me.jpg",
  domain: "yumana.my.id",
  email: "yuma@yumana.my.id",
  location: "Pekanbaru, Indonesia",

  tagline: {
    id: "Software developer yang membangun produk web yang cepat dan mudah dipahami.",
    en: "Software developer building fast and intuitive web products.",
  },

  bio_short: {
    id: "Saya seorang software developer dengan fokus di web. Senang membangun hal yang berguna — dari UI yang responsif sampai sistem backend yang efisien.",
    en: "I'm a software developer focused on web technologies. I enjoy building useful things — from responsive UIs to efficient backend systems.",
  },

  bio_full: {
    id: [
      "Saya seorang software developer berbasis di Pekanbaru, Indonesia. Fokus saya adalah membangun produk web yang performan, aksesibel, dan mudah dipakai — baik untuk pengguna akhir maupun developer lain yang akan melanjutkan kode saya.",
      "Sekarang saya banyak bekerja dengan TypeScript, Go, dan ekosistem modern JavaScript. Saya percaya kode yang baik adalah kode yang mudah dibaca — oleh orang lain, atau oleh diri sendiri 6 bulan ke depan.",
      "Di luar kode, saya tertarik pada desain sistem, performa web, dan bagaimana produk teknologi bisa benar-benar membantu orang.",
    ],
    en: [
      "I'm a software developer based in Pekanbaru, Indonesia. My focus is on building performant, accessible, and user-friendly web products — for both end-users and fellow developers who will maintain my code.",
      "Currently, I work extensively with TypeScript, Go, and the modern JavaScript ecosystem. I believe good code is code that is easy to read — by others, or by myself 6 months from now.",
      "Beyond coding, I'm interested in system design, web performance, and how technological products can truly help people.",
    ],
  },

  links: {
    github: "https://github.com/yumanuralfath",
    codeberg: "https://codeberg.org/yuma",
    linkedin: "https://linkedin.com/in/yumanuralfath",
    whatsapp: "https://wa.me/6281234567890",
    instagram: "https://instagram.com/yuma.nur",
    facebook: "https://facebook.com/yuma.nur",
    discord: "https://discord.com/users/yuma",
  },
};
