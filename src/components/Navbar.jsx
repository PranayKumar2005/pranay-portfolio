import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiArrowUpRight,
} from "react-icons/fi";
import { portfolioData } from "../data/portfolioData";

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Certifications", id: "certifications" },
  { name: "Roles", id: "roles" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 30);

      // Always show navbar when at the very top
      if (currentScrollY <= 20) {
        setShowNavbar(true);
      }
      // Scrolling down → hide navbar
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
        setMenuOpen(false);
      }
      // Scrolling up → show navbar
      else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const navbarOffset = 100;
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: sectionPosition - navbarOffset,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <AnimatePresence>
      {showNavbar && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4"
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 md:px-7 ${
              scrolled
                ? "border-white/15 bg-slate-950/90 shadow-2xl shadow-black/30 backdrop-blur-2xl"
                : "border-white/10 bg-slate-950/70 shadow-2xl shadow-black/20 backdrop-blur-xl"
            }`}
          >
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3"
              aria-label="Go to top"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-indigo-400/30 bg-indigo-500/10 font-bold text-indigo-300 transition duration-300 group-hover:border-indigo-400/50 group-hover:bg-indigo-500/20 group-hover:text-indigo-200">
                PK
              </div>

              <div className="hidden sm:block">
                <p className="text-sm font-bold tracking-wide text-white">
                  PRANAY
                </p>

                <p className="text-[10px] tracking-[0.25em] text-slate-500">
                  DEVELOPER
                </p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-5 lg:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative px-1 py-2 text-sm text-slate-400 transition duration-300 hover:text-white"
                >
                  {item.name}

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden items-center gap-2 md:flex">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2.5 text-slate-400 transition duration-300 hover:bg-white/5 hover:text-white"
              >
                <FiGithub size={18} />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2.5 text-slate-400 transition duration-300 hover:bg-white/5 hover:text-blue-400"
              >
                <FiLinkedin size={18} />
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="ml-2 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-slate-200"
              >
                Let's Talk
                <FiArrowUpRight size={15} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen((previous) => !previous)}
              className="rounded-xl border border-white/10 p-2.5 text-slate-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mx-3 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl sm:mx-4 md:hidden"
              >
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition duration-300 hover:bg-white/5 hover:text-white"
                    >
                      {item.name}
                    </button>
                  ))}

                  <div className="my-3 h-px bg-white/10" />

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    Let's Talk
                    <FiArrowUpRight size={15} />
                  </button>

                  <div className="mt-2 flex gap-2">
                    <a
                      href={portfolioData.personal.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
                    >
                      <FiGithub />
                      GitHub
                    </a>

                    <a
                      href={portfolioData.personal.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-blue-400"
                    >
                      <FiLinkedin />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}