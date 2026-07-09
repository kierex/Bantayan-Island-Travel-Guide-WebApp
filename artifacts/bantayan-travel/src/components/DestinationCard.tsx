"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavorites } from "@/hooks/useFavorites";
import type { Destination } from "@/types";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

const categoryColors: Record<string, string> = {
  beach: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  nature: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  resort: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  church: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  island: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
  restaurant: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  attraction: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
};

const categoryLabels: Record<string, string> = {
  beach: "Beach",
  nature: "Nature",
  resort: "Resort",
  church: "Heritage",
  island: "Island",
  restaurant: "Dining",
  attraction: "Attraction",
};

export function DestinationCard({ destination, index = 0 }: DestinationCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(destination.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <Link href={`/destinations/${destination.slug}`} className="block relative aspect-[4/3] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", categoryColors[destination.category])}>
            {categoryLabels[destination.category]}
          </span>
        </div>
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(destination.id);
          }}
          className={cn(
            "absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200",
            favorited
              ? "bg-rose-500 text-white"
              : "bg-white/90 text-gray-500 hover:bg-white hover:text-rose-500"
          )}
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={15} fill={favorited ? "currentColor" : "none"} />
        </button>
      </Link>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <Link href={`/destinations/${destination.slug}`}>
            <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg leading-snug hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-1">
              {destination.name}
            </h3>
          </Link>
          <div className="flex items-center gap-1 shrink-0 bg-amber-50 dark:bg-amber-900/20 px-2 py-0.5 rounded-full">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
              {destination.rating}
            </span>
          </div>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
          {destination.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin size={12} className="text-primary-500" />
            <span className="line-clamp-1">{destination.location.split(",")[0]}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{destination.entranceFee === "Free" ? "Free" : "Paid entry"}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
