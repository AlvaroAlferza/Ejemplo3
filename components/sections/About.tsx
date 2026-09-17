"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Leaf,
  Utensils,
  Wheat,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="overflow-hidden bg-[#F7F2E8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[2rem]">
            <motion.img
              src="/images/about.jpg"
              alt="Interior del restaurante"
              whileInView={{ scale: [1.08, 1] }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="aspect-[4/5] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="absolute -bottom-6 -right-3 rounded-2xl bg-[#C86B45] p-6 text-white shadow-xl sm:-right-6"
          >
            <p className="font-serif text-4xl">Desde</p>
            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/70">
              Arequipa, Perú
            </p>
          </motion.div>
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
              Nuestra historia
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-[#171714] sm:text-6xl">
              Tradición con una
              <br />
              mirada diferente.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#171714]/55">
              Creemos que la cocina peruana puede contar historias sin
              perder sus raíces. Trabajamos con ingredientes locales,
              técnicas contemporáneas y mucho respeto por nuestra
              tradición.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.2,
                },
              },
            }}
            className="mt-10 grid gap-5 sm:grid-cols-3"
          >
            {[
              {
                icon: Leaf,
                title: "Producto",
                text: "Ingredientes locales y frescos.",
              },
              {
                icon: Utensils,
                title: "Cocina",
                text: "Técnica y creatividad en cada plato.",
              },
              {
                icon: Wheat,
                title: "Origen",
                text: "Sabores con identidad peruana.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 25,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                      },
                    },
                  }}
                  whileHover={{ y: -5 }}
                  className="border-t border-[#171714]/10 pt-5"
                >
                  <Icon size={21} className="text-[#C86B45]" />

                  <h3 className="mt-4 text-sm font-semibold text-[#171714]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#171714]/45">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.a
            href="#contacto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ x: 5 }}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#171714]"
          >
            Conoce más sobre nosotros
            <ArrowUpRight size={17} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}