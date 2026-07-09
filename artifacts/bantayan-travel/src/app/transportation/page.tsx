import type { Metadata } from "next";
import { Bus, Ship, Bike, Car, MapPin, DollarSign, Navigation } from "lucide-react";

export const metadata: Metadata = {
  title: "Transportation Guide",
  description: "How to get to Bantayan Island and how to get around — buses from Cebu City, ferries from Hagnaya Port, tricycles, scooter rental, bicycle rental, and more.",
};

const fromCebuSteps = [
  {
    icon: Bus,
    step: "Step 1",
    title: "Cebu City to Hagnaya Port",
    description: "From the North Bus Terminal in Cebu City, take an air-conditioned bus or van bound for Hagnaya Port in San Remigio, northern Cebu. Buses depart regularly from early morning. Several operators run this route including Ceres Liner.",
    details: [
      { label: "Duration", value: "3 - 4 hours" },
      { label: "Fare", value: "PHP 100 - 130" },
      { label: "Departures", value: "Every 30-60 minutes from 4:00 AM" },
      { label: "Terminal", value: "North Bus Terminal, Cebu City" },
    ],
  },
  {
    icon: Ship,
    step: "Step 2",
    title: "Hagnaya Port to Santa Fe Port",
    description: "From Hagnaya Port, board a ferry or fastcraft to Santa Fe Port on Bantayan Island. Two main operators service this route: Jomalia Shipping and Archipelago Philippines Inc. Fastcraft vessels are faster but slightly more expensive than the regular ferry.",
    details: [
      { label: "Duration", value: "45 min - 1 hour" },
      { label: "Ferry Fare", value: "PHP 175 - 200 per person" },
      { label: "Vehicle", value: "PHP 700 - 1,200 (motorcycle or car)" },
      { label: "First Trip", value: "Approximately 5:00 AM" },
      { label: "Last Trip", value: "Approximately 6:00 PM" },
    ],
  },
  {
    icon: MapPin,
    step: "Step 3",
    title: "Arrival at Santa Fe, Bantayan Island",
    description: "Welcome to Bantayan Island. Upon exiting the port, you will find tricycles, bicycle rentals, and scooter rental shops ready to take you to your accommodation or around the island.",
    details: [
      { label: "Total Journey", value: "Approximately 4.5 - 5 hours" },
      { label: "From Port", value: "Tricycles, scooters, bicycles available" },
      { label: "Tip", value: "Negotiate tricycle fare before boarding" },
    ],
  },
];

const gettingAroundOptions = [
  {
    icon: Car,
    name: "Tricycle",
    description: "The most common and affordable way to get around Bantayan Island. Tricycles are motorized three-wheelers with a sidecar, perfect for short distances between towns and beaches. Shared tricycles are cheaper; hire a whole unit for more convenience.",
    price: "PHP 10-20 per person (shared) / PHP 80-200 per trip (private)",
    coverage: "All towns and most beaches",
    tip: "For trips to remote beaches or at odd hours, negotiate a private hire.",
  },
  {
    icon: Bike,
    name: "Scooter / Motorcycle Rental",
    description: "The most popular choice among independent travelers. Renting a scooter gives you the freedom to explore the entire island on your own schedule, discovering hidden beaches and viewpoints that tricycles would not take you to.",
    price: "PHP 400 - 600 per day (with fuel)",
    coverage: "Entire island",
    tip: "Bring your driver's license. Always check the scooter condition before renting — test the brakes.",
  },
  {
    icon: Bike,
    name: "Bicycle Rental",
    description: "An eco-friendly and enjoyable way to explore the flatter parts of Bantayan Island. The island's main roads are paved and relatively flat, making cycling a comfortable option, especially in the early morning or late afternoon when temperatures are cooler.",
    price: "PHP 100 - 200 per day",
    coverage: "Santa Fe, Bantayan town, most beaches",
    tip: "Start early to avoid the midday heat. Bring water and a small backpack.",
  },
  {
    icon: Navigation,
    name: "Walking",
    description: "Many of Bantayan Island's main attractions in Santa Fe and Bantayan town are within comfortable walking distance of each other. The beach strip along Kota Beach is easily explored on foot.",
    price: "Free",
    coverage: "Town centers, nearby beaches",
    tip: "Wear comfortable sandals or footwear. The beach sand is easier to walk on in the morning.",
  },
];

const practicalTips = [
  "Download an offline map of Bantayan Island before departing from Cebu City, as signal can be unreliable in remote areas.",
  "The ferry schedule changes seasonally and may be affected by weather conditions. Always check current schedules at Hagnaya Port.",
  "During Holy Week and peak season, ferries get very crowded. Arrive early to secure a spot, especially if traveling with a vehicle.",
  "Fuel for scooters can be purchased from small sari-sari stores along the main roads — look for plastic bottles of fuel.",
  "Tricycle drivers often offer full-day island tours for PHP 600-1,000 — a great deal if you prefer not to drive yourself.",
  "Bring enough cash for transportation as card payment is not accepted by most local drivers and rental shops.",
];

export default function TransportationPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Getting There</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Transportation Guide</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Everything you need to know about getting to Bantayan Island and getting around once you arrive.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-20">
        {/* From Cebu */}
        <section>
          <div className="mb-10">
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-2">Route</p>
            <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-3">From Cebu City</h2>
            <p className="text-gray-500 dark:text-gray-400">
              There is no direct route to Bantayan Island by land and sea. The journey involves a bus or van ride across northern Cebu, followed by a ferry crossing. The entire trip takes approximately 4.5 to 5 hours.
            </p>
          </div>

          <div className="space-y-5">
            {fromCebuSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 card-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center shrink-0">
                    <step.icon size={22} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary-500 uppercase tracking-wider">{step.step}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{step.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{step.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <div key={detail.label} className="flex items-center gap-2 text-xs">
                          <span className="text-gray-400 dark:text-gray-600 font-medium min-w-[80px]">{detail.label}:</span>
                          <span className="text-gray-700 dark:text-gray-300 font-semibold">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Around */}
        <section>
          <div className="mb-10">
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-2">On the Island</p>
            <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-3">Getting Around</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Bantayan Island covers three main municipalities — Santa Fe, Bantayan, and Madridejos — connected by paved roads. Getting around is easy and affordable with several transport options available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {gettingAroundOptions.map((option) => (
              <div key={option.name} className="bg-white dark:bg-gray-900 rounded-2xl p-6 card-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                    <option.icon size={18} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white">{option.name}</h3>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">{option.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <DollarSign size={14} className="text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{option.price}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{option.coverage}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <p className="text-xs text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-3 py-2">
                    <span className="font-semibold">Tip: </span>{option.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section>
          <div className="mb-8">
            <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-widest uppercase mb-2">Helpful Notes</p>
            <h2 className="font-display font-bold text-3xl text-gray-900 dark:text-white mb-3">Practical Transportation Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practicalTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 bg-white dark:bg-gray-900 rounded-xl p-4 card-shadow">
                <span className="w-6 h-6 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
