"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Activity } from "@/types";

interface ActivityCardProps {
  activity: Activity;
  index?: number;
}

const difficultyColor = {
  easy: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  moderate: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  challenging: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
};

export function ActivityCard({ activity, index = 0 }: ActivityCardProps) {
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
          src={activity.image}
          alt={activity.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <span className={cn("text-xs font-semibold px-2 py-0.5 rounded-full", difficultyColor[activity.difficulty])}>
            {activity.difficulty.charAt(0).toUpperCase() + activity.difficulty.slice(1)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{activity.name}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
          {activity.description}
        </p>
        <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
          <div className="flex items-center gap-1">
            <DollarSign size={12} className="text-primary-500" />
            <span>{activity.price.split(" - ")[0]}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} className="text-primary-500" />
            <span>{activity.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
