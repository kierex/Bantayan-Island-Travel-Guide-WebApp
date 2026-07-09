"use client";

import { useState, useMemo } from "react";
import { destinations } from "@/lib/data";
import type { Destination } from "@/types";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filtered = useMemo<Destination[]>(() => {
    let results = destinations;

    if (selectedCategory !== "all") {
      results = results.filter((d) => d.category === selectedCategory);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      results = results.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q) ||
          d.location.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q)
      );
    }

    return results;
  }, [query, selectedCategory]);

  return { query, setQuery, selectedCategory, setSelectedCategory, filtered };
}
