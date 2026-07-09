import type { Metadata } from "next";
import {
  Calendar, Cloud, Wallet, Shield, Wifi, Phone,
  ShoppingBag, CreditCard
} from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Tips",
  description: "Essential travel tips for visiting Bantayan Island — best time to visit, weather, budget guide, safety advice, ATM access, packing list, and emergency contacts.",
};

const sections = [
  {
    icon: Calendar,
    title: "Best Time to Visit",
    color: "from-sky-400 to-blue-500",
    items: [
      { heading: "Peak Season (December - May)", text: "The dry season brings sunny skies, calm waters, and ideal beach conditions. The most popular months are March to May, when visibility for snorkeling and diving is at its best. Expect higher accommodation prices and more crowds during this period." },
      { heading: "Shoulder Season (December - February)", text: "Cooler temperatures and lower rainfall make these months excellent for visiting. Hotel rates are more reasonable than the peak March-May period, and the island is less crowded. The northeast trade winds (amihan) bring refreshing breezes." },
      { heading: "Wet Season (June - November)", text: "The rainy season brings occasional typhoons and rougher seas, but also fewer tourists and significantly lower hotel rates. Many activities and island hopping may be limited on rainy days. Monitor weather forecasts closely if visiting during this period." },
      { heading: "Avoid During Holy Week", text: "If you prefer a quiet experience, avoid visiting during Easter week (Holy Week) — Bantayan Island becomes extremely crowded with domestic tourists and accommodation prices surge." },
    ],
  },
  {
    icon: Cloud,
    title: "Weather & Climate",
    color: "from-cyan-400 to-sky-500",
    items: [
      { heading: "Average Temperature", text: "Bantayan Island has a tropical climate. Temperatures typically range from 25°C to 33°C (77°F to 91°F) throughout the year. Humidity is high year-round, so light, breathable clothing is essential." },
      { heading: "Rainfall", text: "The dry season (December-May) receives minimal rainfall. June through November can bring heavy afternoon rains and the occasional typhoon. Always pack a compact rain jacket or poncho." },
      { heading: "Sea Conditions", text: "The calmest seas for swimming and water activities are from November through April. From June to October, strong winds and waves can make some water activities unsafe." },
    ],
  },
  {
    icon: Wallet,
    title: "Budget Guide",
    color: "from-emerald-400 to-green-500",
    items: [
      { heading: "Budget Traveler (PHP 800-1,500/day)", text: "Stay in a budget guesthouse or fan room (PHP 400-700/night). Eat at local carinderias and market stalls for PHP 80-150 per meal. Use shared tricycles and rent a bicycle. Skip paid activities and enjoy the free public beaches." },
      { heading: "Mid-Range Traveler (PHP 2,000-4,000/day)", text: "Stay in a comfortable air-conditioned resort or guesthouse (PHP 1,500-3,000/night). Eat at mid-range beachfront restaurants (PHP 300-600 per meal). Rent a scooter (PHP 400-600/day) and do one island hopping tour." },
      { heading: "Comfort Traveler (PHP 5,000+/day)", text: "Stay at a beachfront resort like Kota Beach Resort or Anika Island Resort (PHP 3,000-8,000/night). Dine at the better resort restaurants, book private island hopping tours, and enjoy water sports and spa treatments." },
      { heading: "Money-Saving Tips", text: "Book accommodation in advance during peak season to lock in better rates. Eat where locals eat — the food is fresher and significantly cheaper than tourist restaurants. Negotiate prices for tricycle rides. Buy dried seafood (danggit) from the market, not from tourist shops." },
    ],
  },
  {
    icon: Shield,
    title: "Safety Information",
    color: "from-violet-400 to-purple-500",
    items: [
      { heading: "General Safety", text: "Bantayan Island is considered a safe destination for tourists. The local community is friendly and crime rates are low. Exercise the same common-sense precautions you would in any tourist destination — do not leave valuables unattended on the beach." },
      { heading: "Water Safety", text: "Swim only in designated areas and heed any warning flags or signs. Currents can be strong in some areas, especially during the wet season. Do not swim alone in isolated locations. Jellyfish can occasionally be present — ask locals about current conditions." },
      { heading: "Sun Protection", text: "The tropical sun is intense. Apply reef-safe SPF 50 sunscreen every 2 hours, wear a hat and UV-protective clothing, and seek shade during the hottest hours (11 AM - 3 PM). Sunburn is a common travel health issue." },
      { heading: "Coral and Marine Life", text: "Do not stand on, touch, or collect coral. Do not feed or chase marine animals. Wearing fins while snorkeling helps prevent accidental contact with the reef. Only use reef-safe, biodegradable sunscreen." },
    ],
  },
  {
    icon: CreditCard,
    title: "ATM & Money",
    color: "from-amber-400 to-orange-500",
    items: [
      { heading: "ATM Availability", text: "ATMs are available in Bantayan town (BDO, BPI, Metrobank) and Santa Fe (BDO). However, these machines frequently run out of cash during peak season and long weekends. Withdrawing cash in Cebu City before crossing is strongly recommended." },
      { heading: "Accepted Payment", text: "Most local restaurants, street food vendors, tricycle drivers, and smaller shops accept cash only. Larger resorts and some restaurants accept credit or debit cards. Do not rely on card payment as your primary payment method." },
      { heading: "Currency", text: "Philippine Peso (PHP) is the only accepted currency on the island. Money changers are not commonly available, so exchange currency before arriving." },
    ],
  },
  {
    icon: Wifi,
    title: "Internet & Communication",
    color: "from-blue-400 to-indigo-500",
    items: [
      { heading: "Mobile Networks", text: "Globe and Smart networks provide coverage throughout most of the island, including Santa Fe and Bantayan town. Signal can be weak in very remote areas. DITO Telecommunications also has limited coverage." },
      { heading: "WiFi Availability", text: "Most resorts, hotels, and restaurants in Santa Fe and Bantayan town offer free WiFi, though speeds can be slow during peak hours due to bandwidth limitations. Download maps, guides, and entertainment before arriving." },
      { heading: "Recommendations", text: "Purchase a local prepaid SIM card with a data plan in Cebu City for the most reliable connectivity. Globe and Smart offer competitive tourist data packages. Save offline maps of the island in Google Maps or Maps.me before departure." },
    ],
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    color: "from-rose-400 to-red-500",
    items: [
      { heading: "Police", text: "Bantayan Police Station: +63 32 438 9000 · National Emergency: 911" },
      { heading: "Medical", text: "Bantayan Island Community Hospital: +63 32 438 9017 · Located in Bantayan Town. For serious emergencies, evacuation to Cebu City may be required." },
      { heading: "Coast Guard", text: "Philippine Coast Guard Northern Cebu: +63 32 232 7111 · For maritime emergencies, accidents at sea, or rescue operations." },
      { heading: "Fire", text: "Bureau of Fire Protection Bantayan: 160 (national) · Local Tourist Assistance: +63 32 438 9000" },
    ],
  },
  {
    icon: ShoppingBag,
    title: "Packing Checklist",
    color: "from-teal-400 to-emerald-500",
    items: [
      { heading: "Clothing & Gear", text: "Light, quick-dry clothing for warm weather. Swimsuit and rash guard for beach days. A light jacket for air-conditioned buses and ferries. Comfortable walking sandals. Hat and sunglasses." },
      { heading: "Health & Safety", text: "Reef-safe sunscreen SPF 50+. Insect repellent (especially for mangrove areas and evenings). Personal medications and basic first-aid supplies. Hydration salts for hot days. Motion sickness medication for the ferry." },
      { heading: "Electronics & Documents", text: "Waterproof bag or dry bag for boat trips. Portable power bank. Camera or smartphone with offline maps downloaded. Copies of travel documents (passport, ID, bookings)." },
      { heading: "Money & Documents", text: "Sufficient Philippine Pesos in cash. Credit card as backup. Travel insurance documents. Philippine SIM card with data plan. Emergency contact numbers saved offline." },
    ],
  },
];

export default function TravelTipsPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Plan Your Trip</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Travel Tips</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know before you go — from the best time to visit to emergency contacts and packing essentials.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-14">
        {sections.map((section) => (
          <section key={section.title}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                <section.icon size={22} className="text-white" />
              </div>
              <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white">{section.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <div key={item.heading} className="bg-white dark:bg-gray-900 rounded-xl p-5 card-shadow">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{item.heading}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
