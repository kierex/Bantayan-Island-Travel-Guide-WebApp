"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Food } from "@/types";

interface FoodCardProps {
  food: Food;
  index?: number;
}

const typeColors: Record<string, string> = {
  seafood: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  local: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  dessert: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  drink: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
};

const typeLabels: Record<string, string> = {
  seafood: "Seafood",
  local: "Local Dish",
  dessert: "Dessert",
  drink: "Drink",
};

export function FoodCard({ food, index = 0 }: FoodCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={food.image}
          alt={food.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", typeColors[food.type])}>
            {typeLabels[food.type]}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{food.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3 line-clamp-3">
          {food.description}
        </p>
        <div className="space-y-1.5 text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-1.5">
            <DollarSign size={12} className="text-primary-500 shrink-0" />
            <span>{food.price}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <MapPin size={12} className="text-primary-500 shrink-0 mt-0.5" />
            <span className="line-clamp-2">{food.whereTryIt}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
