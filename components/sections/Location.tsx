"use client";

import { motion } from "motion/react";
import { Clock3, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function Location() {
  return (
    <section className="overflow-hidden bg-white px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45]">
            Encuéntranos
          </p>

          <h2 className="mt-4 font-serif text-5xl tracking-[-0.03em] text-[#171714] sm:text-6xl">
            Ven a visitarnos.
          </h2>
        </motion.div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-[#F7F2E8] lg:grid-cols-[1fr_1.35fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="p-8 sm:p-10 lg:p-12"
          >
            <div className="space-y-8">
              <div>
                <MapPin size={21} className="text-[#C86B45]" />
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#171714]/40">
                  Dirección
                </p>
                <p className="mt-2 text-base leading-7 text-[#171714]">
                  {restaurant.address}
                </p>
              </div>

              <div>
                <Phone size={21} className="text-[#C86B45]" />
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#171714]/40">
                  Reservas
                </p>
                <a
                  href={`tel:${restaurant.phone}`}
                  className="mt-2 block text-base text-[#171714] hover:text-[#C86B45]"
                >
                  {restaurant.phone}
                </a>
              </div>

              <div>
                <Clock3 size={21} className="text-[#C86B45]" />
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[#171714]/40">
                  Horarios
                </p>

                <div className="mt-3 space-y-2">
                  {restaurant.openingHours.map((item) => (
                    <div
                      key={item.days}
                      className="flex justify-between gap-5 text-sm"
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
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="min-h-[400px]"
          >
            <iframe
              title="Ubicación del restaurante"
              src="https://www.google.com/maps?q=Arequipa,Peru&output=embed"
              className="h-full min-h-[400px] w-full border-0 grayscale"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}