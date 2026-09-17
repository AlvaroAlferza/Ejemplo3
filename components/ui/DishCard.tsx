"use client";

import { motion } from "motion/react";
import { Flame, Heart, Leaf } from "lucide-react";
import type { Dish } from "@/data/dishes";

interface DishCardProps {
  dish: Dish;
}

export default function DishCard({ dish }: DishCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group overflow-hidden rounded-[1.5rem] bg-white"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <motion.img
          src={dish.image}
          alt={dish.name}
          whileHover={{ scale: 1.06 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

        <div className="absolute left-4 top-4 flex gap-2">
          {dish.spicy && (
            <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#171714] backdrop-blur">
              <Flame size={11} />
              Picante
            </span>
          )}

          {dish.vegetarian && (
            <span className="flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#171714] backdrop-blur">
              <Leaf size={11} />
              Veggie
            </span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#171714] backdrop-blur"
          aria-label="Agregar a favoritos"
        >
          <Heart size={16} />
        </motion.button>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C86B45]">
              {dish.category}
            </p>

            <h3 className="mt-2 font-serif text-2xl leading-tight text-[#171714]">
              {dish.name}
            </h3>
          </div>

          <p className="text-sm font-semibold text-[#171714]">
            S/ {dish.price.toFixed(2)}
          </p>
        </div>

        <p className="mt-3 text-sm leading-6 text-[#171714]/50">
          {dish.description}
        </p>
      </div>
    </motion.article>
  );
}