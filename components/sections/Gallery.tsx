"use client";

import { motion } from "motion/react";

const videos = [
  "/images/cocina1.mp4",
  "/images/cocina2.mp4",
  "/images/cocina1.mp4",
  "/images/cocina2.mp4",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="overflow-hidden bg-[#171714] px-6 py-24 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* ========================================================= */}
        {/* TITULO */}
        {/* ========================================================= */}

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

        {/* ========================================================= */}
        {/* GALERIA DE VIDEOS */}
        {/* ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video}
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
              className={`group relative overflow-hidden rounded-[1.25rem] bg-[#24241F] ${
                index === 0 || index === 3
                  ? "aspect-[3/4]"
                  : "aspect-square"
              }`}
            >
              {/* ===================================================== */}
              {/* VIDEO */}
              {/* ===================================================== */}

              <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-full w-full object-cover"
              >
                <source src={video} type="video/mp4" />
              </motion.video>

              {/* ===================================================== */}
              {/* OSCURECIMIENTO */}
              {/* ===================================================== */}

              <div className="absolute inset-0 bg-black/10 transition-all duration-500 group-hover:bg-black/20" />

              {/* ===================================================== */}
              {/* DEGRADADO */}
              {/* ===================================================== */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

              {/* ===================================================== */}
              {/* NUMERO */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileHover={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.18em] text-white"
              >
                0{index + 1}
              </motion.div>

              {/* ===================================================== */}
              {/* INDICADOR SUPERIOR */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/20 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C86B45]" />
              </motion.div>

              {/* ===================================================== */}
              {/* BORDE HOVER */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="pointer-events-none absolute inset-0 rounded-[1.25rem] border border-[#C86B45]/40"
              />

              {/* ===================================================== */}
              {/* BRILLO */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "120%",
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/10 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}