/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Lang } from "@/data/data";
import styles from "@/styles/header.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { SetURLSearchParams } from "react-router-dom";

type NavbarItems = {
  title: string;
  href: string;
  ref: React.RefObject<HTMLDivElement | null> | null;
};

interface NavProps {
  refService: React.RefObject<HTMLDivElement | null>;
  refExpertise: React.RefObject<HTMLDivElement | null>;
  refWork: React.RefObject<HTMLDivElement | null>;
  refAbout: React.RefObject<HTMLDivElement | null>;
  lang: any;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export function Navbar({
  refService,
  refExpertise,
  refWork,
  refAbout,
  searchParams,
  lang,

  setSearchParams,
}: NavProps): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const navbarItems: NavbarItems[] = [
    { title: "home", href: "#", ref: null },
    { title: "about", href: "#", ref: refAbout },
    { title: "services", href: "#", ref: refService },
    { title: "OurWork", href: "#", ref: refWork },
    { title: "expertise", href: "#", ref: refExpertise },
  ];
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const changeLanguage = (newLang: Lang) => {
    const params = new URLSearchParams(searchParams);
    params.set("lang", newLang);
    setSearchParams(params);
    i18n.changeLanguage(newLang);
  };

  const scrollTo = (
    e: React.MouseEvent<HTMLButtonElement>,
    ref: React.RefObject<HTMLDivElement | null> | null
  ) => {
    e.preventDefault();
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setIsOpen(false);
  };

  return (
    <header
      className={`shadow-md z-30 sticky top-0 transition-colors duration-300 bg-[var(--second-color)]`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-[var(--text-nav)]">Devora</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block text-lg">
          <ul className="flex space-x-8 items-center">
            {navbarItems.map((item, i) => (
              <li key={i}>
                <button
                  onClick={(e) => scrollTo(e, item.ref)}
                  className={clsx(styles.menuItem)}
                >
                  {t(`navbar.${item.title}`)}
                </button>
              </li>
            ))}

            <select
              className="text-xl focus:outline-none  bg-transparent cursor-pointer"
              value={lang}
              onChange={(e) => changeLanguage(e.target.value as Lang)}
            >
              <option value="id" className="text-black dark:text-white">
                🇮🇩 Indonesia
              </option>
              <option value="en" className="text-black dark:text-white">
                🇺🇸 English
              </option>
            </select>
          </ul>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? (
              // Close icon
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
              >
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-black"
              >
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className={styles.navmobile}>
          <ul className="flex flex-col space-y-4 p-4">
            {navbarItems.map((item, i) => (
              <li key={i}>
                <button
                  onClick={(e) => scrollTo(e, item.ref)}
                  className={clsx(styles.menuItem)}
                >
                  {t(`navbar.${item.title}`)}
                </button>
              </li>
            ))}
            <li>
              <select
                className="text-xl focus:outline-none text-black bg-transparent cursor-pointer"
                value={lang}
                onChange={(e) => changeLanguage(e.target.value as Lang)}
              >
                <option value="id">🇮🇩 Indonesia</option>
                <option value="en">🇺🇸 English</option>
              </select>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
