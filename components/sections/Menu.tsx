"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search } from "lucide-react";
import { dishes } from "@/data/dishes";
import { categories } from "@/data/categories";
import DishCard from "@/components/ui/DishCard";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [search, setSearch] = useState("");

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesCategory =
        activeCategory === "Todos" ||
        dish.category === activeCategory;

      const matchesSearch =
        dish.name.toLowerCase().includes(search.toLowerCase()) ||
        dish.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section
      id="menu"
      className="bg-[#171714] px-6 py-24 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
            Nuestra carta
          </p>

          <h2 className="mt-4 max-w-3xl font-serif text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
            Comer bien también
            <br />
            es una experiencia.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/45">
            Descubre nuestra selección de entradas, platos de fondo,
            parrillas, postres y bebidas.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.15,
            duration: 0.7,
          }}
          className="mt-12 flex flex-col gap-5 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                whileTap={{ scale: 0.95 }}
                className={`relative shrink-0 rounded-full px-4 py-2 text-xs transition-colors ${
                  activeCategory === category
                    ? "bg-[#C86B45] text-white"
                    : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="relative w-full lg:max-w-xs">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar plato..."
              className="h-11 w-full rounded-full border border-white/10 bg-white/5 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#C86B45]"
            />
          </div>
        </motion.div>

        <motion.div
          layout
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <motion.div
                key={dish.id}
                layout
                initial={{
                  opacity: 0,
                  y: 25,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 15,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <DishCard dish={dish} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDishes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center text-white/40"
          >
            No encontramos platos con esa búsqueda.
          </motion.div>
        )}
      </div>
    </section>
  );
}