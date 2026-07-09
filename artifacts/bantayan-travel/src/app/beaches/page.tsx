import type { Metadata } from "next";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Beaches",
  description: "Explore the pristine white-sand beaches of Bantayan Island — from the famous Kota Beach and Sugar Beach to the secluded Paradise Beach. Find your perfect shoreline.",
};

const beaches = destinations.filter((d) => d.category === "beach");

export default function BeachesPage() {
  return (
    <div className="pt-16">
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Coastline</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Beaches of Bantayan</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Miles of powder-soft white sand and crystal-clear turquoise water. Bantayan Island has a beach for every type of traveler.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {beaches.map((beach, i) => (
            <DestinationCard key={beach.id} destination={beach} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
