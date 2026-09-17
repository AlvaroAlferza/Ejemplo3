"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  CalendarDays,
  Clock3,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Reservations() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");

  const handleReservation = () => {
    const message = `Hola, quiero reservar una mesa en ${
      restaurant.name
    }%0A%0AFecha: ${date}%0AHora: ${time}%0APersonas: ${people}`;

    window.open(
      `https://wa.me/${restaurant.whatsapp}?text=${message}`,
      "_blank"
    );
  };

  return (
    <section
      id="reservas"
      className="bg-[#F7F2E8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
            Reserva tu mesa
          </p>

          <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.03em] text-[#171714] sm:text-6xl">
            Tu próxima
            <br />
            experiencia empieza aquí.
          </h2>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#171714]/50">
            Elige el día, la hora y el número de personas. Te
            contactaremos por WhatsApp para confirmar tu reserva.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm text-[#171714]/60">
            <Clock3 size={18} className="text-[#C86B45]" />
            Atención de lunes a domingo
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="rounded-[2rem] bg-[#171714] p-7 text-white sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/40">
                Fecha
              </label>

              <div className="relative">
                <CalendarDays
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C86B45]"
                />

                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-2 text-sm text-white outline-none focus:border-[#C86B45]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/40">
                Hora
              </label>

              <div className="relative">
                <Clock3
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C86B45]"
                />

                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="h-12 w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-2 text-sm text-white outline-none focus:border-[#C86B45]"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-white/40">
                Personas
              </label>

              <div className="relative">
                <Users
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C86B45]"
                />

                <select
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                  className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-white/5 pl-10 pr-3 text-sm text-white outline-none focus:border-[#C86B45]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                    <option
                      key={number}
                      value={number}
                      className="bg-[#171714]"
                    >
                      {number} {number === 1 ? "persona" : "personas"}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <motion.button
            onClick={handleReservation}
            whileHover={{
              scale: 1.02,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#C86B45] py-4 text-sm font-semibold text-white"
          >
            Solicitar reserva
            <ArrowUpRight size={17} />
          </motion.button>

          <p className="mt-4 text-center text-[11px] text-white/30">
            La reserva queda confirmada después de nuestra respuesta.
          </p>
        </motion.div>
      </div>
    </section>
  );
}