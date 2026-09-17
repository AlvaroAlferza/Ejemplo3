"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { dishes } from "@/data/dishes";
import SectionHeading from "@/components/ui/SectionHeading";
import DishCard from "@/components/ui/DishCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturedDishes() {
  const featured = dishes.filter((dish) => dish.featured).slice(0, 4);

  return (
    <section
      id="destacados"
      className="bg-[#F7F2E8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-between gap-7 md:flex-row md:items-end"
        >
          <SectionHeading
            eyebrow="La casa recomienda"
            title="Nuestros favoritos"
            description="Una selección de platos que representan nuestra forma de entender la cocina."
          />

          <motion.a
            href="#menu"
            whileHover={{ x: 5 }}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-[#171714]"
          >
            Ver carta completa
            <ArrowUpRight size={17} />
          </motion.a>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((dish) => (
            <motion.div key={dish.id} variants={itemVariants}>
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}