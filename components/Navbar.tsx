import { memo, type ReactElement } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/constants/data";
import { fadeInDown } from "@/lib/motion";

function Navbar(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (): void => setIsOpen(false);
  const toggleMenu = (): void => setIsOpen((prev) => !prev);

  const handleNavClick = (): void => closeMenu();

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      style={{ willChange: "transform, opacity" }}
      className="fixed top-0 right-0 left-0 z-50 border-b border-banking-border bg-banking-dark/80 backdrop-blur"
    >
      <nav
        className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 md:h-16 md:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a href="/" className="text-xl font-bold text-white" onClick={closeMenu}>
          N7
        </a>

        <ul className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-banking-muted transition-colors duration-200 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#request-demo"
          className="hidden rounded-sm border border-banking-blue px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-banking-blue md:inline-block"
        >
          REQUEST DEMO
        </a>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-xl text-white md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={toggleMenu}
        >
          <span aria-hidden>{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="overflow-hidden border-t border-banking-border bg-banking-dark/95 backdrop-blur md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-3 py-2.5 text-sm text-banking-muted transition-colors duration-200 hover:text-white"
                    onClick={handleNavClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#request-demo"
                  className="inline-block rounded-sm border border-banking-blue px-4 py-2 text-sm text-white transition-colors duration-200 hover:bg-banking-blue"
                  onClick={closeMenu}
                >
                  REQUEST DEMO
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default memo(Navbar);
