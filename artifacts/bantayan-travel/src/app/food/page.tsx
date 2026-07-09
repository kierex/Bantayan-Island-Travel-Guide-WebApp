import type { Metadata } from "next";
import { FoodCard } from "@/components/FoodCard";
import { foods } from "@/lib/data";

export const metadata: Metadata = {
  title: "Food Guide",
  description: "Bantayan Island food guide — fresh grilled seafood, scallops, kinilaw, danggit, chicken inasal, and other local Filipino dishes you must try on the island.",
};

export default function FoodPage() {
  return (
    <div className="pt-16">
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Culinary</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Local Food Guide</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Bantayan Island&apos;s food is a love letter to the sea — fresh, honest, and deeply satisfying. Here is what you absolutely cannot miss.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {foods.map((food, i) => (
            <FoodCard key={food.id} food={food} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
