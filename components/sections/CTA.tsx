"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export default function CTA() {
  return (
    <section className="overflow-hidden bg-[#C86B45] px-6 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative z-10 max-w-4xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
            ¿Nos vemos?
          </p>

          <h2 className="mt-5 font-serif text-6xl leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[7rem]">
            Hagamos de hoy
            <br />
            algo especial.
          </h2>

          <p className="mt-8 max-w-lg text-base leading-7 text-white/70">
            Reserva una mesa y ven a disfrutar una experiencia creada
            alrededor de nuestra cocina.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <motion.a
              href="#reservas"
              whileHover={{
                scale: 1.04,
                y: -3,
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#171714] px-6 py-3.5 text-sm font-semibold text-white"
            >
              Reservar una mesa
              <ArrowUpRight size={17} />
            </motion.a>

            <motion.a
              href={`https://wa.me/${restaurant.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              whileHover={{
                scale: 1.04,
                y: -3,
                backgroundColor: "rgba(255,255,255,0.18)",
              }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 text-sm font-semibold"
            >
              <MessageCircle size={17} />
              WhatsApp
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute -right-10 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full border border-white/15 lg:block"
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -right-16 top-1/2 hidden h-96 w-96 -translate-y-1/2 rounded-full border border-dashed border-white/10 lg:block"
        />
      </div>
    </section>
  );
}