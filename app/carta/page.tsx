"use client";

import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChefHat,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { dishes } from "@/data/dishes";
import { categories } from "@/data/categories";

const ease = [0.22, 1, 0.36, 1];

export default function CartaPage() {
  return (
    <main className="min-h-screen bg-[#F7F2E8] text-[#171714]">
      {/* ========================================================= */}
      {/* HERO CARTA */}
      {/* ========================================================= */}

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden bg-[#171714] text-white">
        {/* VIDEO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.8,
            ease,
          }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>

          {/* OSCURECIMIENTO SUAVE */}
          <div className="absolute inset-0 bg-black/25" />

          {/* DEGRADADO INFERIOR */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
        </motion.div>

        {/* VOLVER */}
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
            ease,
          }}
          className="absolute left-6 top-7 z-20 sm:left-8 lg:left-10"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-5 py-2.5 text-sm text-white/85 backdrop-blur-md transition-all duration-300 hover:border-white/45 hover:bg-black/30 hover:text-white"
          >
            <motion.span
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={16} />
            </motion.span>

            Volver
          </Link>
        </motion.div>

        {/* CONTENIDO CENTRADO */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center sm:px-8">
          {/* EYEBROW */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease,
            }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease,
              }}
              className="h-px bg-[#C86B45]"
            />

            <span className="text-xs uppercase tracking-[0.3em] text-white/80">
              Casa Misti
            </span>

            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease,
              }}
              className="h-px bg-[#C86B45]"
            />
          </motion.div>

          {/* TITULO */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 55,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease,
            }}
            className="font-serif text-6xl leading-[0.9] tracking-[-0.05em] drop-shadow-[0_4px_25px_rgba(0,0,0,0.35)] sm:text-7xl md:text-8xl lg:text-[8rem]"
          >
            Nuestra carta
          </motion.h1>

          {/* DESCRIPCION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.75,
              duration: 0.8,
              ease,
            }}
            className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:text-lg"
          >
            Descubre nuestra selección de platos, preparados con dedicación y
            pensados para disfrutar cada momento.
          </motion.p>

          {/* DECORACION */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
              ease,
            }}
            className="mx-auto mt-9 flex items-center justify-center gap-3"
          >
            <span className="h-1 w-1 rounded-full bg-[#C86B45]" />
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span className="h-1 w-1 rounded-full bg-white/30" />
          </motion.div>
        </div>

        {/* INDICADOR */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/65 sm:flex"
        >
          <Utensils size={13} />

          Explora nuestra selección

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </motion.div>

        {/* BORDE */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* ========================================================= */}
      {/* INTRO CARTA */}
      {/* ========================================================= */}

      <section className="border-b border-black/10 bg-[#F7F2E8]">
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-6 py-12 sm:px-8 md:flex-row md:items-center lg:px-10"
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="flex items-center gap-4"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -15,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.6,
                ease,
              }}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#C86B45]/10 text-[#C86B45]"
            >
              <ChefHat size={20} strokeWidth={1.5} />
            </motion.div>

            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="text-sm font-medium"
              >
                Preparaciones hechas con dedicación
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                className="mt-1 text-xs text-black/45"
              >
                Ingredientes seleccionados · Preparación artesanal
              </motion.p>
            </div>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease,
            }}
            className="max-w-md text-sm leading-6 text-black/50 md:text-right"
          >
            Nuestra carta cambia con las estaciones y con los productos que
            encontramos en su mejor momento.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* CARTA */}
      {/* ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="space-y-28">
          {categories
            .filter((category) => category !== "Todos")
            .map((category, categoryIndex) => {
              const categoryDishes = dishes.filter(
                (dish) => dish.category === category
              );

              if (categoryDishes.length === 0) return null;

              return (
                <motion.section
                  key={category}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  {/* ================================================= */}
                  {/* CABECERA CATEGORIA */}
                  {/* ================================================= */}

                  <div className="mb-12 flex items-end justify-between border-b border-black/10 pb-6">
                    <div className="flex items-end gap-5">
                      {/* NUMERO */}
                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                          ease,
                        }}
                        className="mb-2 text-xs tracking-[0.2em] text-[#C86B45]"
                      >
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </motion.span>

                      {/* TITULO CATEGORIA */}
                      <motion.h2
                        initial={{
                          opacity: 0,
                          y: 30,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.08,
                          duration: 0.8,
                          ease,
                        }}
                        className="font-serif text-4xl tracking-[-0.04em] sm:text-5xl md:text-6xl"
                      >
                        {category}
                      </motion.h2>
                    </div>

                    {/* CONTADOR */}
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.6,
                      }}
                      className="hidden text-xs uppercase tracking-[0.16em] text-black/30 sm:block"
                    >
                      {categoryDishes.length}{" "}
                      {categoryDishes.length === 1 ? "opción" : "opciones"}
                    </motion.span>
                  </div>

                  {/* ================================================= */}
                  {/* GRID DE PLATOS */}
                  {/* ================================================= */}

                  <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
                    {categoryDishes.map((dish, index) => (
                      <motion.article
                        key={dish.id}
                        initial={{
                          opacity: 0,
                          y: 45,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.12,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.1,
                          ease,
                        }}
                        className="group relative"
                      >
                        <motion.div
                          whileHover={{
                            y: -5,
                          }}
                          transition={{
                            duration: 0.35,
                            ease,
                          }}
                          className="relative flex gap-5 overflow-hidden rounded-[1.5rem] border border-black/[0.07] bg-white/45 p-4 transition-all duration-500 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:p-5"
                        >
                          {/* IMAGEN */}
                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.92,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: index * 0.1 + 0.15,
                              duration: 0.65,
                              ease,
                            }}
                            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1.1rem] bg-black/5 sm:h-32 sm:w-32"
                          >
                            <motion.img
                              src={dish.image}
                              alt={dish.name}
                              className="h-full w-full object-cover"
                              whileHover={{
                                scale: 1.1,
                              }}
                              transition={{
                                duration: 0.7,
                                ease,
                              }}
                            />

                            <div className="absolute inset-0 bg-black/5 transition-colors duration-500 group-hover:bg-transparent" />
                          </motion.div>

                          {/* INFO */}
                          <div className="min-w-0 flex-1 py-1">
                            {/* NOMBRE + PRECIO */}
                            <div className="flex items-start justify-between gap-3">
                              <motion.h3
                                initial={{
                                  opacity: 0,
                                  y: 15,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: index * 0.1 + 0.2,
                                  duration: 0.55,
                                  ease,
                                }}
                                className="font-serif text-[1.45rem] leading-[1.05] tracking-[-0.025em]"
                              >
                                {dish.name}
                              </motion.h3>

                              <motion.span
                                initial={{
                                  opacity: 0,
                                  scale: 0.8,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: index * 0.1 + 0.3,
                                  duration: 0.5,
                                  ease,
                                }}
                                className="shrink-0 rounded-full bg-[#C86B45]/10 px-3 py-1 text-xs font-semibold text-[#C86B45]"
                              >
                                S/ {dish.price}
                              </motion.span>
                            </div>

                            {/* DESCRIPCION */}
                            <motion.p
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              whileInView={{
                                opacity: 1,
                                y: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay: index * 0.1 + 0.35,
                                duration: 0.55,
                                ease,
                              }}
                              className="mt-3 text-sm leading-6 text-black/50"
                            >
                              {dish.description}
                            </motion.p>

                            {/* DESTACADO */}
                            {dish.featured && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  x: -12,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  x: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: index * 0.1 + 0.45,
                                  duration: 0.5,
                                  ease,
                                }}
                                className="mt-4 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#C86B45]"
                              >
                                <motion.span
                                  initial={{
                                    scale: 0,
                                  }}
                                  whileInView={{
                                    scale: 1,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    delay: index * 0.1 + 0.5,
                                    duration: 0.4,
                                  }}
                                  className="h-1.5 w-1.5 rounded-full bg-[#C86B45]"
                                />

                                Recomendado por la casa
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      </motion.article>
                    ))}
                  </div>
                </motion.section>
              );
            })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA FINAL */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-t border-black/10 bg-[#171714] text-white">
        {/* DECORACION */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[20%] hidden lg:block"
        >
          <Utensils
            size={90}
            strokeWidth={0.5}
            className="text-white/[0.04]"
          />
        </motion.div>

        {/* DECORACION IZQUIERDA */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[8%] bottom-[15%] hidden lg:block"
        >
          <Utensils
            size={55}
            strokeWidth={0.5}
            className="text-white/[0.025]"
          />
        </motion.div>

        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:px-8 lg:py-32">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
          >
            {/* EYEBROW */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-xs uppercase tracking-[0.28em] text-[#C86B45]"
            >
              Una experiencia para compartir
            </motion.p>

            {/* TITULO */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease,
              }}
              className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1] tracking-[-0.04em] sm:text-5xl md:text-6xl"
            >
              Haz de tu próxima visita un momento especial.
            </motion.h2>

            {/* TEXTO */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.25,
                duration: 0.7,
              }}
              className="mx-auto mt-6 max-w-xl text-sm leading-6 text-white/50 sm:text-base"
            >
              Reserva tu mesa y disfruta de una experiencia pensada para
              compartir, celebrar y disfrutar.
            </motion.p>

            {/* BOTON */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                ease,
              }}
              className="mt-9"
            >
              <Link
                href="/#reservas"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C86B45] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b95d3a] hover:shadow-[0_15px_35px_rgba(200,107,69,0.2)]"
              >
                Reservar una mesa

                <motion.span
                  whileHover={{
                    x: 4,
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ArrowUpRight size={17} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}