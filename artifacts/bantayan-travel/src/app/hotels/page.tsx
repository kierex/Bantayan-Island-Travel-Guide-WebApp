import type { Metadata } from "next";
import { HotelCard } from "@/components/HotelCard";
import { hotels } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hotels",
  description: "Where to stay on Bantayan Island — from luxurious beachfront resorts like Kota Beach Resort and Anika Island Resort to budget-friendly guesthouses and boutique villas.",
};

export default function HotelsPage() {
  return (
    <div className="pt-16">
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Accommodation</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Where to Stay</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            From luxury beachfront resorts to intimate boutique villas, Bantayan Island offers accommodation for every style and budget.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {hotels.map((hotel, i) => (
            <HotelCard key={hotel.id} hotel={hotel} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
