"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { Review } from "@/types";

interface ReviewCardProps {
  review: Review;
  index?: number;
}

export function ReviewCard({ review, index = 0 }: ReviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="bg-white dark:bg-gray-900 rounded-2xl p-6 card-shadow flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden">
            <Image
              src={review.avatar}
              alt={review.name}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm">{review.name}</p>
            <p className="text-xs text-gray-400">{review.country}</p>
          </div>
        </div>
        <Quote size={20} className="text-primary-200 dark:text-primary-900" />
      </div>

      <div className="flex items-center gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200 dark:text-gray-700"}
          />
        ))}
        <span className="text-xs text-gray-400 ml-1">{review.date}</span>
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-4">
        &ldquo;{review.review}&rdquo;
      </p>

      <div className="flex items-center gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-800">
        <span className="text-xs text-gray-400">Visited:</span>
        <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
          {review.destination}
        </span>
      </div>
    </motion.div>
  );
}
