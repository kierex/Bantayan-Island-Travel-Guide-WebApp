import type { Metadata } from "next";
import { DestinationsClient } from "./DestinationsClient";

export const metadata: Metadata = {
  title: "All Destinations",
  description: "Explore all destinations on Bantayan Island — beaches, natural attractions, heritage sites, and surrounding islands. Find your perfect spot with detailed guides and tips.",
};

export default function DestinationsPage() {
  return <DestinationsClient />;
}
