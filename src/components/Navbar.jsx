import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import logoImage from "../images/logo.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const activeClass = ({ isActive }) =>
    isActive
      ? "text-lime-600 font-semibold"
      : "text-gray-700 dark:text-gray-200 hover:text-lime-600 transition";

  return (
    <header className="sticky top-0 z-50 border-b border-lime-200 dark:border-zinc-800 bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-24 px-6 flex items-center justify-between">

        {/* Logo */}

        <NavLink
          to="/"
          className="text-3xl font-bold text-lime-700"
        >
          <img
                src={logoImage}
                alt="Logo"
                className="rounded-3xl w-36"
                loading="eager"
                decoding="async"
            />
          
        </NavLink>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-10 text-lg">

          <NavLink
            to="/"
            className={activeClass}
          >
            Beranda
          </NavLink>

          <NavLink
            to="/katalog"
            className={activeClass}
          >
            Katalog
          </NavLink>

          <NavLink
            to="/kalkulator"
            className={activeClass}
          >
            Kalkulator Sampah
          </NavLink>

        </nav>

        {/* Desktop Dark Mode */}

        <div className="hidden md:flex items-center">

          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="border border-lime-400 rounded-full p-3 hover:bg-lime-100 dark:hover:bg-zinc-800 transition"
          >
            {darkMode ? (
              <Moon size={22} />
            ) : (
              <Sun size={22} />
            )}
          </button>

        </div>

        {/* Mobile Hamburger */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (

        <div className="md:hidden bg-white/30 dark:bg-zinc-900/30 border-t border-lime-200 dark:border-zinc-800">

          <nav className="flex flex-col gap-5 p-6">

            <NavLink
              to="/"
              className={activeClass}
              onClick={() => setOpen(false)}
            >
              Beranda
            </NavLink>

            <NavLink
              to="/katalog"
              className={activeClass}
              onClick={() => setOpen(false)}
            >
              Katalog
            </NavLink>

            <NavLink
              to="/kalkulator"
              className={activeClass}
              onClick={() => setOpen(false)}
            >
              Kalkulator Sampah
            </NavLink>

            <hr className="border-lime-200 dark:border-zinc-700" />

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="flex items-center justify-between rounded-xl border border-lime-300 dark:border-zinc-700 px-4 py-3 hover:bg-lime-50 dark:hover:bg-zinc-800 transition"
            >
              <span className="font-medium">
                {darkMode ? "Dark Mode" : "Light Mode"}
              </span>

              {darkMode ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </button>

          </nav>

        </div>

      )}

    </header>
  );
}

export default Navbar;