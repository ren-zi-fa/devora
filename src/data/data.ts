import chatSvg from "@/assets/chat.svg";
import health from "@/assets/heallth.svg";
import edu from "@/assets/edu.svg";
import ecom from "@/assets/ecom.svg";
import fintech from "@/assets/fintech.svg";
import work1 from "@/assets/work-1.webp";
import work2 from "@/assets/work-2.webp";
import work3 from "@/assets/work-3.webp";
import work4 from "@/assets/work-4.webp";

type Expertise = {
  img: string;
  title: string;
  desc: string;
};

type Works = Expertise;
type Services = Omit<Expertise, "img">;

export const expertise: Expertise[] = [
  {
    title: "Pesan & Komunikasi",
    desc: "Kami membangun platform pesan yang aman dan mudah digunakan untuk membuat komunikasi lebih lancar dan efisien.",
    img: chatSvg,
  },
  {
    title: "Solusi Fintech",
    desc: "Mulai dari dompet digital hingga payment gateway, kami membuat aplikasi fintech yang andal untuk mempermudah transaksi keuangan.",
    img: fintech,
  },
  {
    title: "Platform E-commerce",
    desc: "Kami merancang dan mengembangkan sistem e-commerce yang membantu bisnis menjangkau lebih banyak pelanggan dan meningkatkan penjualan.",
    img: ecom,
  },
  {
    title: "Pendidikan & E-Learning",
    desc: "Kami membangun solusi digital untuk sekolah, universitas, dan platform pembelajaran online guna meningkatkan pengalaman belajar.",
    img: edu,
  },
  {
    title: "Kesehatan & Telemedisin",
    desc: "Kami menyediakan solusi teknologi yang meningkatkan akses layanan kesehatan melalui telemedisin dan manajemen pasien digital.",
    img: health,
  },
];

export const works: Works[] = [
  {
    title: "Proyek Inovasi Digital",
    desc: "Kami mengembangkan solusi digital yang berfokus pada kebutuhan pengguna dengan teknologi terkini untuk memberikan pengalaman terbaik.",
    img: work1,
  },
  {
    title: "Transformasi Bisnis",
    desc: "Kami membantu perusahaan beradaptasi dengan era digital melalui sistem yang efisien, aman, dan mudah digunakan.",
    img: work2,
  },
  {
    title: "Pengembangan Produk Modern",
    desc: "Kami merancang dan membangun produk digital yang scalable dan siap mendukung pertumbuhan bisnis jangka panjang.",
    img: work3,
  },
  {
    title: "Kolaborasi Kreatif",
    desc: "Kami bekerja sama dengan klien untuk menciptakan solusi unik yang sesuai dengan visi, misi, dan tujuan bisnis mereka.",
    img: work4,
  },
];

export const services: Services[] = [
  {
    title: "Penemuan Produk",
    desc: "Kami telah bekerja dengan banyak startup yang hanya berbekal ide dan semangat besar. Kami juga membantu perusahaan besar dengan ambisi yang sama besar.",
  },
  {
    title: "Desain Produk",
    desc: "Inilah yang menjadi dasar DECODE, dan kami sangat menyukainya. Aplikasi pesan, platform sosial, mobile banking – kami punya pengalaman untuk semua tantangan.",
  },
  {
    title: "Rekayasa Perangkat Lunak",
    desc: "Kami membangun perangkat lunak dengan standar tinggi, mulai dari aplikasi sederhana hingga sistem kompleks yang dapat diandalkan.",
  },
];
