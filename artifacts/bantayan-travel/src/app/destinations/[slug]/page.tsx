import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { destinations } from "@/lib/data";
import { DestinationDetail } from "./DestinationDetail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) return { title: "Destination Not Found" };
  return {
    title: destination.name,
    description: destination.description,
    openGraph: {
      title: `${destination.name} | Bantayan Island Travel Guide`,
      description: destination.description,
      images: [{ url: destination.image, width: 800, height: 600, alt: destination.name }],
    },
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  const related = destinations.filter((d) => d.category === destination.category && d.id !== destination.id).slice(0, 3);

  return <DestinationDetail destination={destination} related={related} />;
}
