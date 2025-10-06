import styles from "@/styles/section.module.css";
import { useTranslation } from "react-i18next";
export default function About({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement | null>;
}) {
  const { t } = useTranslation();
  return (
    <section className={styles.about} ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {t(`about.head`)}
        </div>
        <p className=" text-lg md:text-2xl text-gray-600 leading-relaxed  mx-auto">
            {t(`about.desc`)}
        </p>
      </div>
    </section>
  );
}
