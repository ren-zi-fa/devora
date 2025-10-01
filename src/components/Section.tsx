import { expertise, services, works } from "@/data/data";
import styles from "@/styles/section.module.css";
import btnClass from "@/styles/button.module.css";
import ThemeToggle from "@/utils/theme";
import { useState } from "react";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h4 className={styles.heroTitle}>
        We're <span className={styles.heroHighlight}>DEVORA</span>
      </h4>

      <p className={styles.heroDescription}>
        Kami membantu perusahaan membangun software inovatif yang{" "}
        <span className="font-semibold">skalabel</span> dan{" "}
        <span className="font-semibold">berdampak</span>.
      </p>
      <h2 className={`${styles.heroTagline} flex items-center `}>
        <span>Bangun Solusi Digital yang Hebat</span>
        <ThemeToggle />
      </h2>

      <div className={styles.heroButtons}>
        <a href="#contact" className={btnClass["btn-warning"]}>
          Ayo Ngobrol
        </a>
        <a href="#services" className={btnClass["btn-primary"]}>
          Lihat Layanan Kami
        </a>
      </div>
      <div className={styles.bgDecorationYellow}></div>
      <div className={styles.bgDecorationIndigo}></div>
    </section>
  );
}

export function HowWeWork() {
  return (
    <section className="card">
      <h1>How we create the unique in-house feeling</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-12 text-left">
        <div className="">
          <h3>1 Project — 1 Team</h3>
          <p className="text-[var(--text-color)]">
            Our team focuses exclusively on your product’s success.
          </p>
        </div>
        <div className="">
          <h3>Extreme transparency</h3>
          <p className="text-[var(--text-color)]">
            Communicate daily with the whole team not just the team lead.
          </p>
        </div>
        <div className="">
          <h3>Consistent quality</h3>
          <p className="text-[var(--text-color)]">
            We create polished software products you won’t need to test twice.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FieldExpertise() {
  const [visibleCount, setVisibleCount] = useState(4);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const itemsToShow = isMobile ? expertise.slice(0, visibleCount) : expertise;

  return (
    <section className="card">
      <h1>
        Field Of Expertise
        <span className="text-xs md:text-xl block">
          We regularly dive deep into a wide range of industries and challenges,
          including…
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {itemsToShow.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 shadow bg-[var(--second-color)]"
          >
            <img
              src={item.img}
              alt={`logo${item.title}`}
              className="size-32 md:size-40 mx-auto"
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        ))}
      </div>

      {isMobile && visibleCount < expertise.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className={btnClass["btn-danger"]}
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

export function OurWork() {
  return (
    <section className="bg-[var(--third-color)] p-4 text-white">
      <div className="max-w-7xl mx-auto">
        <h1>
          Our Work
          <span className="text-xs md:text-xl block text-[var(--text-color)]">
            We’ve loved working with many fantastic companies, and are really
            proud of what we’ve achieved together.
          </span>
        </h1>
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1 place-items-center">
          {works.map((item, i) => (
            <div className="space-y-3 " key={i}>
              <img src={item.img} className="w-[422px]] h-[316px]" alt="" />
              <div className="text-3xl mb-2 ">{item.title}</div>
              <div className="">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="p-4 max-w-7xl mx-auto">
      <div className="text-5xl font-bold mb-6 text-left">Our Services</div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto">
        {services.map((item, i) => (
          <div
            className="flex flex-row p-4 border-t text-sm md:text-xl  "
            key={i}
          >
            <div className="w-1/3 font-bold pr-4">{item.title}</div>
            <div className="w-2/3">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
