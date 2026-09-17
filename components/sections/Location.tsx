"use client";

import { motion } from "motion/react";
import { Clock3, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Location() {
  return (
    <section className="overflow-hidden bg-white px-6 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
            Encuéntranos
          </p>

          <h2 className="mt-3 font-serif text-4xl tracking-[-0.03em] text-[#171714] sm:text-5xl">
            Ven a visitarnos.
          </h2>
        </motion.div>

        <div className="mt-8 grid overflow-hidden rounded-[1.5rem] bg-[#F7F2E8] lg:grid-cols-[0.85fr_1.35fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-7 sm:p-8 lg:p-9"
          >
            <div className="space-y-6">
              <div>
                <MapPin size={19} className="text-[#C86B45]" />

                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#171714]/40">
                  Dirección
                </p>

                <p className="mt-1.5 text-sm leading-6 text-[#171714]">
                  {restaurant.address}
                </p>
              </div>

              <div>
                <Phone size={19} className="text-[#C86B45]" />

                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#171714]/40">
                  Reservas
                </p>

                <a
                  href={`tel:${restaurant.phone}`}
                  className="mt-1.5 block text-sm text-[#171714] transition-colors hover:text-[#C86B45]"
                >
                  {restaurant.phone}
                </a>
              </div>

              <div>
                <Clock3 size={19} className="text-[#C86B45]" />

                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-[#171714]/40">
                  Horarios
                </p>

                <div className="mt-2.5 space-y-1.5">
                  {restaurant.openingHours.map((item) => (
                    <div
                      key={item.days}
                      className="flex justify-between gap-4 text-xs"
                    >
                      <span className="text-[#171714]/70">
                        {item.days}
                      </span>

                      <span className="text-right text-[#171714]/40">
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-[300px] lg:h-auto lg:min-h-[330px]"
          >
            <iframe
              title="Ubicación del restaurante"
              src="https://www.google.com/maps?q=Arequipa,Peru&output=embed"
              className="h-full w-full border-0 grayscale"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}