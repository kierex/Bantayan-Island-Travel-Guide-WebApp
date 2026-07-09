import type { Metadata } from "next";
import { DestinationCard } from "@/components/DestinationCard";
import { destinations } from "@/lib/data";

export const metadata: Metadata = {
  title: "Attractions",
  description: "Discover the top tourist attractions on Bantayan Island — from the 17th-century parish church to natural caves, mangrove gardens, and uninhabited offshore islands.",
};

const attractions = destinations.filter((d) => d.category !== "beach");

export default function AttractionsPage() {
  return (
    <div className="pt-16">
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Explore</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Tourist Attractions</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Beyond the beaches, Bantayan Island offers remarkable natural, cultural, and historical attractions waiting to be discovered.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((attraction, i) => (
            <DestinationCard key={attraction.id} destination={attraction} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
