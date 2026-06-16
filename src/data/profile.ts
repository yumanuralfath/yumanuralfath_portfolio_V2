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
  title: "Chemistry Graduate & Creative Coder",
  avatar:
    "https://res.cloudinary.com/dx8dogwhc/image/upload/v1781600575/me_jxbqtc.png",
  domain: "yumana.my.id",
  email: "yuma@yumana.my.id",
  location: "Pekanbaru, Indonesia",

  tagline: {
    id: "Sarjana Kimia yang hobi mengeksplorasi dunia lewat baris kode dan simulasi.",
    en: "Chemistry graduate exploring the world through code and simulations.",
  },

  bio_short: {
    id: "Saya seorang sarjana kimia yang jatuh cinta pada pemrograman. Bagi saya, koding adalah tempat bermain sekaligus laboratorium digital untuk mencoba berbagai ide.",
    en: "I am a chemistry graduate who fell in love with programming. To me, coding is both a playground and a digital laboratory for testing various ideas.",
  },

  bio_full: {
    id: [
      "Saya adalah seorang sarjana kimia yang menemukan keasyikan tersendiri di antara molekul dan algoritma. Latar belakang saya di Komputasi Kimia memang mengajarkan saya tentang presisi, tapi pemrograman memberikan saya kebebasan untuk berkreasi.",
      "Bagi saya, koding bukan sekadar kerja teknis, tapi hobi yang seru. Kadang saya menggunakannya untuk mensimulasikan fenomena sains, tapi seringkali saya hanya ingin membangun sesuatu yang menarik, fungsional, atau sekadar eksperimen kreatif.",
      "Di sini, saya memadukan pola pikir saintis yang terukur dengan hobi pemrograman yang eksploratif. Selamat datang di lab pribadi sekaligus ruang bermain digital saya.",
    ],
    en: [
      "I am a chemistry graduate who finds a unique joy between molecules and algorithms. While my background in Computational Chemistry taught me about precision, programming gives me the freedom to create.",
      "To me, coding isn't just technical work; it's an exciting hobby. Sometimes I use it to simulate scientific phenomena, but often I just want to build something interesting, functional, or simply a creative experiment.",
      "Here, I blend the measured mindset of a scientist with an exploratory programming hobby. Welcome to my personal lab and digital playground.",
    ],
  },

  links: {
    github: "https://github.com/yumanuralfath/",
    codeberg: "https://codeberg.org/yumana",
    linkedin: "https://linkedin.com/in/yumana",
    whatsapp: "https://wa.me/6282268975635",
    instagram: "https://instagram.com/yumana20",
    facebook: "https://facebook.com/yuma.nuralfath",
    discord: "https://discord.com/users/393721612358254592",
  },
};
