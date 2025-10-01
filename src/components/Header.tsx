import styles from "@/styles/header.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

export function Navbar(): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = ["Project", "Service", "How we work", "Team", "About us"];
  useEffect(() => {
    const handleScrol = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScrol);
    window.removeEventListener("scroll", handleScrol);
  }, []);

  return (
    <header
      className={`shadow-md z-30 sticky top-0 transition-colors duration-300 ${
        scrolled ? "bg-[var(--main-color)] " : "bg-[var(--second-color)]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-3xl font-bold text-[var(--text-nav">Devora</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block text-lg">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className={clsx(styles.menuItem)}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
              >
                <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-black"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355ZM18.75 16C18.75 16.4142 18.4142 16.75 18 16.75H6C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25H18C18.4142 15.25 18.75 15.5858 18.75 16ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25H6C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H18ZM18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H6C5.58579 8.75 5.25 8.41421 5.25 8C5.25 7.58579 5.58579 7.25 6 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8Z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[var(--main-color)] z-50 shadow-lg absolute top-full left-0 w-full animate-slideDown ">
          <ul className="flex flex-col space-y-4 p-4">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className={clsx(styles.menuItem, "block w-full")}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
