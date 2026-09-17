"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Reservas", href: "#reservas" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-black/5 bg-[#F7F2E8]/90 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-10">
          <motion.a
            href="#inicio"
            whileHover={{ scale: 1.03 }}
            className={`font-serif text-2xl transition-colors ${
              scrolled ? "text-[#171714]" : "text-white"
            }`}
          >
            {restaurant.name}
          </motion.a>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.1 + index * 0.06,
                  duration: 0.5,
                }}
                whileHover={{ y: -2 }}
                className={`text-xs font-medium uppercase tracking-[0.14em] transition-colors ${
                  scrolled
                    ? "text-[#171714]/65 hover:text-[#171714]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#reservas"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 rounded-full bg-[#C86B45] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Reservar
              <ArrowUpRight size={14} />
            </motion.a>
          </nav>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(!open)}
            className={`lg:hidden ${
              scrolled ? "text-[#171714]" : "text-white"
            }`}
            aria-label="Abrir menú"
          >
            {open ? <X size={25} /> : <Menu size={25} />}
          </motion.button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{
              opacity: 1,
              clipPath: "inset(0 0 0% 0)",
            }}
            exit={{
              opacity: 0,
              clipPath: "inset(0 0 100% 0)",
            }}
            transition={{ duration: 0.45 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#171714] px-8 lg:hidden"
          >
            <div className="space-y-5">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.1 + index * 0.07,
                  }}
                  className="block font-serif text-4xl text-[#F7F2E8]"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}