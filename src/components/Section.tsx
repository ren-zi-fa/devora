import { expertise, services, works } from "@/data/data";
import styles from "@/styles/section.module.css";
import btnClass from "@/styles/button.module.css";
import ThemeToggle from "@/utils/theme";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t } = useTranslation();
  return (
    <section className={styles.heroSection}>
      <h4 className={styles.heroTitle}>
        We're <span className={styles.heroHighlight}>DEVORA</span>
      </h4>

      <p className={styles.heroDescription}>{t(`section.main_line`)}</p>
      <h2 className={`${styles.heroTagline} flex items-center `}>
        <span> {t(`section.second_line`)}</span>
        <ThemeToggle size="w-12" />
      </h2>

      <div className={styles.heroButtons}>
        <a href="#contact" className={btnClass["btn-warning"]}>
          {t(`section.button`)}
        </a>
        <a href="#services" className={btnClass["btn-primary"]}>
          {t(`section.sub_button`)}
        </a>
      </div>
      <div className={styles.bgDecorationYellow}></div>
      <div className={styles.bgDecorationIndigo}></div>
    </section>
  );
}

export function FieldExpertise({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const [visibleCount, setVisibleCount] = useState(4);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const itemsToShow = isMobile
    ? expertise.content.slice(0, visibleCount)
    : expertise.content;
  const { t } = useTranslation();
  return (
    <section className="card">
      <h1 className="text-2xl font-semibold lg:text-4xl ">
        {t(`expertise.head`)}
      </h1>
      <span className="text-md md:text-xl block mb-2">
        {" "}
        {t(`expertise.desc`)}
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6" ref={ref}>
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
            <h3 className={styles.title}>
              {item.key ? t(`expertise.${item.key}.title`) : item.title}
            </h3>
            <p className={styles.desc}>
              {item.key ? t(`expertise.${item.key}.desc`) : item.desc}
            </p>
          </div>
        ))}
      </div>

      {isMobile && visibleCount < expertise.content.length && (
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

export function OurWork({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const { t } = useTranslation();
  return (
    <section className="bg-[var(--third-color)] p-4 text-white capitalize">
      <div className="max-w-7xl mx-auto " ref={ref}>
        <h1 className="text-2xl font-semibold lg:text-4xl">
          {t(`works.head`)}
        </h1>
        <div className=" text-xl md:text-2xl mb-2">{t(`works.desc`)}</div>
        <div className="grid md:grid-cols-2 gap-2 grid-cols-1 place-items-center">
          {works.content.map((item, i) => (
            <div className="space-y-3 " key={i}>
              <img src={item.img} className="w-[422px]] h-[316px]" alt="" />
              <div className="text-3xl mb-2 ">
                {" "}
                {item.key ? t(`works.${item.key}.title`) : item.title}
              </div>
              <div className="">
                {" "}
                {item.key ? t(`works.${item.key}.desc`) : item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const { t } = useTranslation();
  return (
    <section className="p-4  max-w-7xl mx-auto">
      <div className=" text-3xl md:text-5xl font-bold mb-6 text-left capitalize">
        {t(`services.head`)}
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto" ref={ref}>
        {services.content.map((item, i) => (
          <div
            className="flex flex-row p-4 border-t text-sm md:text-xl  "
            key={i}
          >
            <div className="w-1/3 font-bold pr-4">
              {item.key ? t(`services.${item.key}.title`) : item.title}
            </div>
            <div className="w-2/3">
              {" "}
              {item.key ? t(`services.${item.key}.desc`) : item.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
