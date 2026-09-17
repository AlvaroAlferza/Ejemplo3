"use client";

import { motion } from "motion/react";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="overflow-hidden bg-[#171714] px-6 py-24 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
              Una mirada a Casa Misti
            </p>

            <h2 className="mt-4 font-serif text-5xl leading-none tracking-[-0.03em] sm:text-6xl">
              Momentos que
              <br />
              se disfrutan.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-white/40">
            Porque una buena experiencia empieza mucho antes del primer
            bocado.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={image}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -6,
              }}
              className={`group relative overflow-hidden rounded-[1.25rem] ${
                index === 0 || index === 3
                  ? "aspect-[3/4]"
                  : "aspect-square"
              }`}
            >
              <motion.img
                src={image}
                alt={`Galería ${index + 1}`}
                whileHover={{ scale: 1.08 }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.18em] text-white"
              >
                0{index + 1}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}