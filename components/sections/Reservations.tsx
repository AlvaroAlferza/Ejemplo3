"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  CalendarDays,
  Clock3,
  Users,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Reservations() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");
  const [error, setError] = useState("");

  const handleReservation = () => {
    if (!date || !time) {
      setError("Selecciona una fecha y una hora para continuar.");

      setTimeout(() => {
        setError("");
      }, 3500);

      return;
    }

    const message = `Hola, quiero reservar una mesa en ${
      restaurant.name
    }%0A%0A📅 Fecha: ${date}%0A🕐 Hora: ${time}%0A👥 Personas: ${people}`;

    window.open(
      `https://wa.me/${restaurant.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  const isComplete = date && time;

  return (
    <section
      id="reservas"
      className="relative overflow-hidden bg-[#171714] px-6 py-24 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-32"
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 70, 0],
            y: [0, -40, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#C86B45]/[0.06] blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-[550px] w-[550px] rounded-full bg-[#C86B45]/[0.045] blur-[110px]"
        />

        <div className="absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -70,
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
            {/* EYEBROW */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.1,
                duration: 0.6,
              }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C86B45]" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
                Reserva tu mesa
              </p>
            </motion.div>

            {/* TITLE */}
            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-6 max-w-2xl font-serif text-5xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-[4.6rem]"
            >
              Tu próxima
              <br />
              <span className="text-white/90">
                experiencia
              </span>
              <br />
              empieza aquí.
            </motion.h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.35,
                duration: 0.7,
              }}
              className="mt-7 max-w-md text-sm leading-7 text-white/45 sm:text-base"
            >
              Elige el día, la hora y el número de personas.
              Envíanos tu solicitud y te contactaremos por
              WhatsApp para confirmar tu mesa.
            </motion.p>

            {/* INFO */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="mt-9 flex items-center gap-4"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
                <Clock3
                  size={17}
                  strokeWidth={1.5}
                  className="text-[#C86B45]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-white/80">
                  Horario de atención
                </p>

                <p className="mt-1 text-xs text-white/35">
                  Lunes a domingo
                </p>
              </div>
            </motion.div>

            {/* SMALL DECORATIVE ELEMENT */}
            <motion.div
              initial={{
                opacity: 0,
                scaleX: 0,
              }}
              whileInView={{
                opacity: 1,
                scaleX: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
              className="mt-12 h-px w-32 origin-left bg-gradient-to-r from-[#C86B45] to-transparent"
            />
          </motion.div>

          {/* RESERVATION CARD */}
          <motion.div
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* OUTER GLOW */}
            <motion.div
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -inset-3 rounded-[2.5rem] bg-[#C86B45]/[0.06] blur-2xl"
            />

            {/* CARD */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#20201C] shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
              {/* CARD TOP DECORATION */}
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#C86B45]/[0.07] blur-3xl" />

              <div className="relative p-7 sm:p-9 lg:p-10">
                {/* HEADER */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                  }}
                  className="mb-9 flex items-start justify-between gap-5"
                >
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C86B45]">
                      Paso 01
                    </p>

                    <h3 className="mt-2 font-serif text-3xl tracking-[-0.02em] text-white">
                      Elige tu visita
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C86B45]/20 bg-[#C86B45]/10"
                  >
                    <Sparkles
                      size={17}
                      className="text-[#C86B45]"
                    />
                  </motion.div>
                </motion.div>

                {/* FIELDS */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* DATE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3,
                      duration: 0.6,
                    }}
                    className="sm:col-span-2"
                  >
                    <label className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                      Fecha
                    </label>

                    <div
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                        error && !date
                          ? "border-red-400/60"
                          : date
                            ? "border-[#C86B45]/40"
                            : "border-white/10"
                      } bg-white/[0.035]`}
                    >
                      <CalendarDays
                        size={18}
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#C86B45]"
                      />

                      <input
                        type="date"
                        value={date}
                        onChange={(e) => {
                          setDate(e.target.value);
                          setError("");
                        }}
                        className="h-14 w-full cursor-pointer bg-transparent pl-12 pr-4 text-sm text-white outline-none [color-scheme:dark]"
                      />

                      {date && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            scale: 0,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          className="absolute right-4 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-[#C86B45]"
                        >
                          <Check
                            size={13}
                            strokeWidth={2.5}
                            className="text-white"
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* TIME */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4,
                      duration: 0.6,
                    }}
                  >
                    <label className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                      Hora
                    </label>

                    <div
                      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${
                        error && !time
                          ? "border-red-400/60"
                          : time
                            ? "border-[#C86B45]/40"
                            : "border-white/10"
                      } bg-white/[0.035]`}
                    >
                      <Clock3
                        size={18}
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#C86B45]"
                      />

                      <input
                        type="time"
                        value={time}
                        onChange={(e) => {
                          setTime(e.target.value);
                          setError("");
                        }}
                        className="h-14 w-full cursor-pointer bg-transparent pl-12 pr-4 text-sm text-white outline-none [color-scheme:dark]"
                      />
                    </div>
                  </motion.div>

                  {/* PEOPLE */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5,
                      duration: 0.6,
                    }}
                  >
                    <label className="mb-2.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/35">
                      Personas
                    </label>

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]">
                      <Users
                        size={18}
                        strokeWidth={1.5}
                        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-[#C86B45]"
                      />

                      <select
                        value={people}
                        onChange={(e) =>
                          setPeople(e.target.value)
                        }
                        className="h-14 w-full cursor-pointer appearance-none bg-transparent pl-12 pr-4 text-sm text-white outline-none [color-scheme:dark]"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(
                          (number) => (
                            <option
                              key={number}
                              value={number}
                              className="bg-[#20201C]"
                            >
                              {number}{" "}
                              {number === 1
                                ? "persona"
                                : "personas"}
                            </option>
                          )
                        )}
                      </select>

                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/30">
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                        >
                          <path
                            d="M1 1L6 6L11 1"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* ERROR */}
                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -5,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-xs text-red-400">
                        {error}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* BUTTON */}
                <motion.button
                  onClick={handleReservation}
                  whileHover={{
                    y: -3,
                    scale: 1.01,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group relative mt-7 flex h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-[#C86B45] text-sm font-semibold text-white shadow-[0_15px_40px_rgba(200,107,69,0.18)]"
                >
                  {/* Shine */}
                  <motion.span
                    animate={{
                      x: ["-120%", "120%"],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />

                  <span className="relative">
                    {isComplete
                      ? "Continuar con WhatsApp"
                      : "Solicitar reserva"}
                  </span>

                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <ArrowUpRight size={18} />
                  </motion.span>
                </motion.button>

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#C86B45]" />

                  <p className="text-center text-[10px] tracking-wide text-white/25">
                    Confirmamos tu reserva directamente por WhatsApp
                  </p>
                </div>
              </div>

              {/* BOTTOM LINE */}
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.8,
                  duration: 1,
                }}
                className="h-[2px] origin-left bg-gradient-to-r from-transparent via-[#C86B45] to-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}