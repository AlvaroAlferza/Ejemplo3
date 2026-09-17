"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { restaurant } from "@/data/restaurant";

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="bg-[#171714] px-6 py-16 text-[#F7F2E8] sm:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
          >
            <p className="font-serif text-4xl">
              {restaurant.name}
            </p>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
              {restaurant.description}
            </p>

            <motion.a
              href={restaurant.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 5 }}
              className="mt-7 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
            >
              <FaInstagram size={17} />
              Instagram
              <ArrowUpRight size={14} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Visítanos
            </p>

            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C86B45]"
                />

                <p className="text-sm leading-6 text-white/65">
                  {restaurant.address}
                </p>
              </div>

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#C86B45]"
                />

                <a
                  href={`tel:${restaurant.phone}`}
                  className="text-sm text-white/65 hover:text-white"
                >
                  {restaurant.phone}
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7 },
              },
            }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Horarios
            </p>

            <div className="space-y-4">
              {restaurant.openingHours.map((item) => (
                <div key={item.days} className="flex gap-3">
                  <Clock3
                    size={18}
                    className="mt-0.5 shrink-0 text-[#C86B45]"
                  />

                  <div>
                    <p className="text-sm text-white/75">
                      {item.days}
                    </p>

                    <p className="mt-1 text-sm text-white/45">
                      {item.hours}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 origin-left border-t border-white/10 pt-6 text-xs text-white/35"
        >
          © {new Date().getFullYear()} {restaurant.name}. Todos los
          derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}