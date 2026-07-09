"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import type { Hotel } from "@/types";

interface HotelCardProps {
  hotel: Hotel;
  index?: number;
}

export function HotelCard({ hotel, index = 0 }: HotelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={hotel.image}
          alt={hotel.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {hotel.featured && (
          <div className="absolute top-3 left-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary-600 text-white">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg leading-snug">
            {hotel.name}
          </h3>
          <div className="flex items-center gap-1 shrink-0 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded-full">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            <span className="text-xs font-semibold text-amber-700 dark:text-amber-400">
              {hotel.rating}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
          <MapPin size={11} className="text-primary-500" />
          <span>{hotel.location}</span>
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <span>{hotel.reviewCount.toLocaleString()} reviews</span>
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {hotel.description}
        </p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {hotel.amenities.slice(0, 4).map((amenity) => (
            <span
              key={amenity}
              className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {amenity}
            </span>
          ))}
          {hotel.amenities.length > 4 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500">
              +{hotel.amenities.length - 4}
            </span>
          )}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-600">From</p>
            <p className="font-bold text-primary-700 dark:text-primary-400 text-sm leading-tight">
              {hotel.priceRange.split(" - ")[0]}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-600">per night</p>
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-xl transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </motion.div>
  );
}
