"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Leaf,
  Utensils,
  Wheat,
} from "lucide-react";

const restaurantImages = [
  "/images/restaurante1.jpg",
  "/images/restaurante2.jpg",
  "/images/restaurante3.jpg",
  "/images/restaurante4.jpg",
];

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % restaurantImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="nosotros"
      className="overflow-hidden bg-[#171714] px-6 py-24 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* IMÁGENES */}
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
            <div className="relative aspect-[4/5] w-full bg-[#24241F]">
              <AnimatePresence mode="sync">
                <motion.img
                  key={restaurantImages[currentImage]}
                  src={restaurantImages[currentImage]}
                  alt={`Interior de Casa Misti - imagen ${currentImage + 1}`}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  transition={{
                    opacity: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 4.5,
                      ease: "easeOut",
                    },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />

              {/* Número de imagen */}
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/70">
                  0{currentImage + 1}
                </span>

                <div className="h-px w-10 bg-white/30" />

                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Casa Misti
                </span>
              </div>

              {/* Indicadores */}
              <div className="absolute bottom-5 right-5 flex items-center gap-1.5">
                {restaurantImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Ver imagen ${index + 1}`}
                    onClick={() => setCurrentImage(index)}
                    className="group p-1"
                  >
                    <motion.span
                      animate={{
                        width: currentImage === index ? 22 : 5,
                        opacity: currentImage === index ? 1 : 0.4,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="block h-1 rounded-full bg-white"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -5,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
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

        {/* CONTENIDO */}
        <div>
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
              Nuestra historia
            </p>

            <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-[#F7F2E8] sm:text-6xl">
              Tradición con una
              <br />
              <span className="text-white/90">
                mirada diferente.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/50">
              Creemos que la cocina peruana puede contar historias sin
              perder sus raíces. Trabajamos con ingredientes locales,
              técnicas contemporáneas y mucho respeto por nuestra
              tradición.
            </p>
          </motion.div>

          {/* CARACTERÍSTICAS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
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
                  whileHover={{
                    y: -5,
                  }}
                  className="border-t border-white/10 pt-5"
                >
                  <Icon
                    size={21}
                    className="text-[#C86B45]"
                  />

                  <h3 className="mt-4 text-sm font-semibold text-[#F7F2E8]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-white/40">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* LINK */}
          <motion.a
            href="#contacto"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.6,
            }}
            whileHover={{
              x: 5,
            }}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#F7F2E8]"
          >
            Conoce más sobre nosotros
            <ArrowUpRight size={17} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}