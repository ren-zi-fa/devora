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
    title: "Messaging & Communication",
    desc: "We build secure and user-friendly messaging platforms that make communication seamless and efficient.",
    img: chatSvg,
  },
  {
    title: "Fintech Solutions",
    desc: "From digital wallets to payment gateways, we create reliable fintech applications that simplify financial transactions.",
    img: fintech,
  },
  {
    title: "E-commerce Platforms",
    desc: "We design and develop e-commerce systems that help businesses reach more customers and increase sales.",
    img: ecom,
  },
  {
    title: "Education & E-Learning",
    desc: "We build digital solutions for schools, universities, and online learning platforms to enhance the education experience.",
    img: edu,
  },
  {
    title: "Healthcare & Telemedicine",
    desc: "We provide technology solutions that improve healthcare access through telemedicine and digital patient management.",
    img: health,
  },
];

export const works: Works[] = [
  {
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing ",
    desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil ratione numquam tempore impedit quo illo amet atque commodi error reprehenderit, quidem officia voluptatem placeat earum veniam ab corporis. Quam, ratione aliquid ipsam repellat magni quos consectetur minima incidunt obcaecati eius commodi nihil?",
    img: work1,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing ",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil ratione numquam tempore impedit quo illo amet atque commodi error reprehenderit, quidem officia voluptatem placeat earum veniam ab corporis. Quam, ratione aliquid ipsam repellat magni quos consectetur minima incidunt obcaecati eius commodi nihil?",
    img: work2,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing ",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil ratione numquam tempore impedit quo illo amet atque commodi error reprehenderit, quidem officia voluptatem placeat earum veniam ab corporis. Quam, ratione aliquid ipsam repellat magni quos consectetur minima incidunt obcaecati eius commodi nihil?",
    img: work3,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur, adipisicing ",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae nihil ratione numquam tempore impedit quo illo amet atque commodi error reprehenderit, quidem officia voluptatem placeat earum veniam ab corporis. Quam, ratione aliquid ipsam repellat magni quos consectetur minima incidunt obcaecati eius commodi nihil?",
    img: work4,
  },
];

export const services: Services[] = [
  {
    title: "Product Discovery",
    desc: "We’ve worked with many startups, armed only with an idea and endless enthusiasm. And we’ve helped big companies with equally big ambitions too.",
  },
  {
    title: "Product Design",
    desc: "This is what DECODE was founded on, and we love it. Messaging apps, social platforms, mobile banking – we’ve got the experience for any challenge.",
  },
  {
    title: "Software Engineering",
    desc: "This is what DECODE was founded on, and we love it. Messaging apps, social platforms, mobile banking – we’ve got the experience for any challenge.",
  },
];
