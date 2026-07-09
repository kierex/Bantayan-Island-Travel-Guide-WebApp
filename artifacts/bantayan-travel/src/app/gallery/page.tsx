import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery of Bantayan Island — stunning beach photography, island scenery, marine life, local food, cultural heritage, and more.",
};

export default function GalleryPage() {
  return (
    <div className="pt-16">
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Visual Story</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Photo Gallery</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A visual journey through the extraordinary beauty of Bantayan Island — captured through the lens of travelers who fell in love with this paradise.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <GalleryGrid />
      </div>
    </div>
  );
}
