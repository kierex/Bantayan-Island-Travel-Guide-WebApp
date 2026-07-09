import type { Metadata } from "next";
import { ActivityCard } from "@/components/ActivityCard";
import { activities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Activities",
  description: "Things to do on Bantayan Island — island hopping, snorkeling, diving, kayaking, scooter rental, fishing tours, sunset watching, and more outdoor adventures.",
};

export default function ActivitiesPage() {
  return (
    <div className="pt-16">
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Adventure</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Things To Do</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Whether you seek adrenaline or total relaxation, Bantayan Island offers activities that will make your trip unforgettable.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {activities.map((activity, i) => (
            <ActivityCard key={activity.id} activity={activity} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
