"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, DollarSign, Calendar, Star, ArrowLeft, Heart, Lightbulb, ChevronRight } from "lucide-react";
import { DestinationCard } from "@/components/DestinationCard";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";
import type { Destination } from "@/types";

interface Props {
  destination: Destination;
  related: Destination[];
}

export function DestinationDetail({ destination, related }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(destination.id);

  return (
    <div className="pt-16">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center gap-2 text-white/70 text-sm mb-3">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
              <ChevronRight size={14} />
              <span className="text-white">{destination.name}</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
            <div className="flex items-center gap-3 text-white/80 text-sm">
              <MapPin size={14} />
              <span>{destination.location}</span>
              <span className="text-white/40">·</span>
              <Star size={14} className="text-amber-400 fill-amber-400" />
              <span>{destination.rating} rating</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-start justify-between gap-4 mb-6">
                <Link href="/destinations" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                  <ArrowLeft size={16} />
                  Back to Destinations
                </Link>
                <button
                  onClick={() => toggleFavorite(destination.id)}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-xl border transition-colors text-sm font-medium",
                    favorited
                      ? "bg-rose-50 border-rose-200 text-rose-600 dark:bg-rose-900/20 dark:border-rose-800 dark:text-rose-400"
                      : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-rose-200 hover:text-rose-500"
                  )}
                >
                  <Heart size={15} fill={favorited ? "currentColor" : "none"} />
                  {favorited ? "Saved" : "Save"}
                </button>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8 text-lg">
                {destination.fullDescription}
              </p>

              {/* Visitor Tips */}
              {destination.tips.length > 0 && (
                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30 rounded-2xl p-6 mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb size={18} className="text-amber-600 dark:text-amber-400" />
                    <h3 className="font-bold text-amber-900 dark:text-amber-300 text-base">Visitor Tips</h3>
                  </div>
                  <ul className="space-y-2">
                    {destination.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-amber-800 dark:text-amber-300/80">
                        <span className="w-5 h-5 rounded-full bg-amber-200 dark:bg-amber-800/50 flex items-center justify-center text-amber-700 dark:text-amber-400 text-xs font-bold shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 card-shadow sticky top-24 space-y-5">
                <h3 className="font-bold text-gray-900 dark:text-white text-base">Quick Info</h3>

                {[
                  { icon: MapPin, label: "Location", value: destination.location },
                  { icon: Clock, label: "Opening Hours", value: destination.openingHours },
                  { icon: DollarSign, label: "Entrance Fee", value: destination.entranceFee },
                  { icon: Calendar, label: "Best Time to Visit", value: destination.bestTimeToVisit },
                  { icon: Star, label: "Rating", value: `${destination.rating} / 5.0` },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-600 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white leading-snug">{value}</p>
                    </div>
                  </div>
                ))}

                {/* Map Placeholder */}
                <div className="mt-4 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
                  <iframe
                    title="Bantayan Island Map"
                    src={`https://maps.google.com/maps?q=${destination.coordinates.lat},${destination.coordinates.lng}&z=14&output=embed`}
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16 pt-12 border-t border-gray-100 dark:border-gray-800">
            <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-8">Similar Places</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((dest, i) => (
                <DestinationCard key={dest.id} destination={dest} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
