"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations } from "@/lib/data";

const categories = [
  { value: "all", label: "All" },
  { value: "beach", label: "Beaches" },
  { value: "nature", label: "Nature" },
  { value: "island", label: "Islands" },
  { value: "attraction", label: "Attractions" },
  { value: "church", label: "Heritage" },
];

export function DestinationsClient() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    let results = destinations;
    if (category !== "all") results = results.filter((d) => d.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (d) => d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q) || d.location.toLowerCase().includes(q)
      );
    }
    return results;
  }, [query, category]);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Explore</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">All Destinations</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Discover every beach, island, and attraction Bantayan has to offer — from iconic landmarks to hidden gems.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat.value
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results count */}
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
          {filtered.length} destination{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg mb-2">No destinations found</p>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
