export const products = [
  {
    id: 1,
    name: "Adidas Classic T-Shirt",
    brandId: 1,
    categoryId: 1,
    description: "Classic cotton t-shirt with Adidas logo.",
    image: "asset-3.jpg",
    created_at: "2024-01-15",
    slug: "adidas-classic-t-shirt",
    colors: ["#F4DE6E", "#000000", "#1D39F4"],
  },
  {
    id: 2,
    name: "Nike Dri-FIT Hoodie",
    brandId: 2,
    categoryId: 2,
    description: "Moisture-wicking hoodie for workouts.",
    image: "asset-4.jpg",
    created_at: "2024-02-10",
    slug: "nike-dri-fit-hoodie",
    colors: ["#838382", "#F12D2D"],
  },
  {
    id: 3,
    name: "Puma Track Pants",
    brandId: 3,
    categoryId: 3,
    description: "Comfortable track pants with side pockets.",
    image: "asset-2.jpg",
    created_at: "2024-03-05",
    slug: "puma-track-pants",
    colors: ["#a91717", "#6a873a", "#cdbf9a"],
  },
];

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Bagaimana cara menjual minyak jelantah di Montana?",
    answer: "Anda cukup menghubungi tim kami melalui WhatsApp atau formulir kontak. Tim kami akan menjadwalkan penjemputan ke lokasi Anda, melakukan penimbangan secara transparan, dan melakukan pembayaran langsung di tempat."
  },
  {
    id: 2,
    question: "Berapa minimal jumlah minyak jelantah yang bisa dijemput?",
    answer: "Minimal penjemputan adalah 5 liter untuk area perkotaan. Untuk volume besar (seperti usaha restoran/katering), kami juga menyediakan wadah penampungan gratis."
  },
  {
    id: 3,
    question: "Apakah ada biaya untuk penjemputan minyak jelantah?",
    answer: "Layanan penjemputan 100% GRATIS tanpa dipungut biaya sepeser pun. Justru kami yang akan membayar minyak jelantah sisa Anda."
  },
  {
    id: 4,
    question: "Bagaimana sistem pembayaran minyak jelantah?",
    answer: "Pembayaran dilakukan secara instan langsung di lokasi setelah penimbangan selesai, baik melalui uang tunai maupun transfer bank/e-wallet."
  },
  {
    id: 5,
    question: "Minyak jelantah yang terkumpul digunakan untuk apa?",
    answer: "Minyak jelantah disalurkan ke pabrik pengolahan energi terbarukan resmi untuk diolah menjadi bahan bakar ramah lingkungan (Biodiesel)."
  }
];

