import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Users, Calendar, Fish } from "lucide-react";

export const metadata: Metadata = {
  title: "About Bantayan Island",
  description: "Learn about the history, culture, festivals, economy, and tourism of Bantayan Island — a beautiful island municipality in the province of Cebu, Philippines.",
};

const quickFacts = [
  { icon: MapPin, label: "Location", value: "Province of Cebu, Visayas, Philippines" },
  { icon: Users, label: "Population", value: "Approximately 90,000 residents" },
  { icon: Calendar, label: "Founded", value: "Established in the 17th century" },
  { icon: Fish, label: "Known For", value: "Scallops, beaches, danggit (dried fish)" },
];

const historySections = [
  {
    title: "History",
    content: `Bantayan Island has a rich and layered history that stretches back well before Spanish colonization of the Philippine archipelago. Archaeological evidence suggests that the island was inhabited by indigenous Visayan peoples long before the arrival of European explorers. The island's name itself is believed to derive from the Visayan word "bantayan," meaning "a place of watchmen" or "watchtower," a reference to the island's strategic position in the Visayan Sea and its use as a lookout point against pirate raids from Moro raiders from Mindanao.

    The Spanish arrived on Bantayan Island in the early seventeenth century, and Augustinian missionaries began the process of Christianization that would profoundly shape the island's culture and identity. The construction of the Parish Church of Saints Peter and Paul in Bantayan Town — built from coral stones quarried from the surrounding seas — stands as the most enduring physical monument of this colonial period. Its thick walls and fortified structure reflect the dual purpose it served as a place of worship and a refuge against pirate attacks.

    Throughout the Spanish colonial period, Bantayan Island served as an important administrative center for the region. Its fertile fishing grounds and strategic position made it a valuable asset, and the island's fishing communities developed sophisticated techniques for harvesting the rich marine resources of the Visayan Sea. The island's tradition of excellence in fishing and seafood production — particularly its world-renowned scallops and danggit dried fish — is a direct continuation of practices that have been refined over centuries.`,
  },
  {
    title: "Culture",
    content: `Bantayan Island's culture is a vibrant expression of Cebuano identity, shaped by centuries of tradition, the Catholic faith, and an intimate relationship with the sea. The island's communities are organized around the rhythms of fishing — the tides, the seasons, and the migration patterns of fish — and this connection to the ocean permeates every aspect of daily life, from the food people eat to the festivals they celebrate.

    The people of Bantayan are known throughout the Philippines for their warmth, hospitality, and industriousness. The tradition of "bayanihan" — communal helping — remains strong, particularly in the fishing communities where families and neighbors cooperate in the maintenance of boats, nets, and the processing of the daily catch. This spirit of community extends naturally to the welcome that visitors receive on the island.

    The Catholic faith introduced by the Spanish missionaries is deeply woven into the fabric of island life. Every barangay has its own patron saint and chapel, and religious festivals punctuate the calendar year. The parish church in Bantayan Town is not merely a tourist attraction but an active center of spiritual life for the entire island community.`,
  },
  {
    title: "Festivals",
    content: `Bantayan Island comes alive throughout the year with festivals that celebrate its faith, culture, and heritage. The most significant of these is the Ati-Atihan Festival, held each January in honor of the Santo Niño (the Child Jesus). During this exuberant celebration, participants don traditional Ati costumes and body paint, dancing through the streets to the beat of drums in an electrifying display of faith and cultural pride. The festival draws visitors from across the Philippines and abroad.

    Fiesta celebrations in honor of each barangay's patron saint are held throughout the year, offering visitors an authentic glimpse into local traditions of feasting, music, and community gathering. The town fiesta of Santa Fe features a fluvial procession — a religious parade conducted on the water — that is particularly spectacular.

    The Holy Week celebrations on Bantayan Island are among the most moving in the Visayas. The island's deep Catholic faith is expressed through solemn processions, the Pabasa (chanting of Christ's passion), and elaborate dramatic reenactments of the Stations of the Cross. Despite the island becoming very crowded during this period, the religious observances themselves retain a profound dignity and sincerity that visitors from all backgrounds find deeply moving.`,
  },
  {
    title: "Economy",
    content: `Fishing is the economic lifeblood of Bantayan Island and has been so for as long as the island has been inhabited. The waters surrounding the island are extraordinarily productive, and the fishing industry supports a significant portion of the island's population directly or indirectly. Bantayan's scallops are harvested from the seabed and are regarded as among the finest in the Philippines for their size, sweetness, and quality. The island's danggit — salted and sun-dried rabbitfish — is equally celebrated and has become one of the most recognizable Filipino seafood products, sold in markets across the country.

    Agriculture plays a supporting role in the economy, with many families cultivating small plots of vegetables, coconuts, and fruit trees. Handicraft production, including the weaving of baskets and mats from local materials, provides supplementary income for some households.

    Tourism has become an increasingly important economic driver over the past two decades. The growth of the hospitality and tourism sector has created new livelihood opportunities for island residents in accommodation, food and beverage, transportation, and tour operations. The local government has actively promoted tourism while working to ensure that growth occurs in ways that preserve the island's natural environment and cultural heritage.`,
  },
  {
    title: "Tourism",
    content: `Bantayan Island's rise as a tourist destination is a relatively recent phenomenon. While the island was known to a small community of travelers and backpackers for many years, it gained significantly wider attention following its appearance in popular Philippine media, including the romantic film "Camp Sawi" which was filmed on location here.

    Today, Bantayan Island welcomes hundreds of thousands of visitors annually, drawn by the combination of pristine beaches, crystal-clear waters, affordable prices, and an authentic Philippine island atmosphere that is increasingly difficult to find in more developed destinations. The island has managed to retain much of its character despite this growth, partly because of its relative inaccessibility — the ferry journey from Hagnaya acts as a natural filter, deterring casual day-trippers and attracting travelers with a genuine desire to experience the island.

    The local tourism industry is largely community-based, with many accommodations, restaurants, and tour operations owned and run by island families rather than outside corporations. This means that tourism expenditure tends to recirculate within the local economy, benefiting the community broadly. The island's tourism authorities continue to work on balancing visitor growth with environmental conservation, recognizing that the natural beauty that attracts visitors is the island's most precious and irreplaceable asset.`,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1548625149-720754953e6e?w=1600&q=80"
          alt="Sts. Peter and Paul Parish Church, Bantayan Island"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Our Island</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">About Bantayan Island</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16">
        {/* Intro */}
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          Bantayan Island is a municipality in the province of Cebu in the Central Visayas region of the Philippines. Composed of Bantayan Island and surrounding smaller islands, it is situated in the northwestern part of Cebu Province in the Visayan Sea. The island is divided into three municipalities: Bantayan, Santa Fe, and Madridejos.
        </p>

        {/* Quick Facts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {quickFacts.map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white dark:bg-gray-900 rounded-2xl p-5 card-shadow text-center">
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3">
                <Icon size={18} className="text-primary-600 dark:text-primary-400" />
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-600 mb-1">{label}</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{value}</p>
            </div>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {historySections.map((section) => (
            <section key={section.title}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-8 bg-primary-600 rounded-full" />
                <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white">{section.title}</h2>
              </div>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-base">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Developer Credit */}
        <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-600 mb-1">This guide was developed by</p>
          <p className="font-display font-bold text-xl text-gray-900 dark:text-white">Vernie Esgana</p>
          <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm">BSIT 3 NORTH</p>
        </div>
      </div>
    </div>
  );
}
