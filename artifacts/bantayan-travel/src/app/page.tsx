"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowDown, ChevronRight, Sun, Waves, Shell, Camera,
  MapPin, Activity, TreePine,
  Phone, Mail, Clock
} from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { DestinationCard } from "@/components/DestinationCard";
import { HotelCard } from "@/components/HotelCard";
import { ReviewCard } from "@/components/ReviewCard";
import { ActivityCard } from "@/components/ActivityCard";
import { FoodCard } from "@/components/FoodCard";
import { FAQSection } from "@/components/FAQSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { StatCounter } from "@/components/StatCounter";
import { ContactForm } from "@/components/ContactForm";
import { destinations, hotels, reviews, activities, foods } from "@/lib/data";

const featuredDestinations = destinations.filter((d) => d.featured);
const featuredBeaches = destinations.filter((d) => d.category === "beach").slice(0, 4);
const featuredAttractions = destinations.filter((d) => d.category !== "beach").slice(0, 4);

const whyVisitItems = [
  {
    icon: Waves,
    title: "Pristine White Beaches",
    description: "Miles of powder-soft white sand beaches with turquoise waters so clear you can see straight to the bottom.",
    color: "from-sky-400 to-cyan-500",
  },
  {
    icon: Shell,
    title: "World-Class Seafood",
    description: "Fresh-off-the-boat seafood including the famous Bantayan scallops, kinilaw, and grilled catch-of-the-day.",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: Sun,
    title: "Authentic Island Life",
    description: "Experience genuine Filipino island culture away from the tourist traps, with warm, welcoming local communities.",
    color: "from-yellow-400 to-orange-400",
  },
  {
    icon: TreePine,
    title: "Untouched Nature",
    description: "Pristine mangrove forests, natural caves, and offshore islands teeming with marine biodiversity.",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Activity,
    title: "Endless Activities",
    description: "From island hopping to kayaking, snorkeling, scooter tours, and tranquil sunset-watching from the beach.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: Camera,
    title: "Stunning Photography",
    description: "Every corner of the island is a photo opportunity — bamboo bridges, sandbars, and blazing tropical sunsets.",
    color: "from-rose-400 to-pink-500",
  },
];

const transportSteps = [
  {
    step: "01",
    title: "North Bus Terminal, Cebu City",
    description: "Take a bus or van bound for Hagnaya Port in San Remigio, northern Cebu.",
    detail: "Duration: 3-4 hours · Fare: PHP 100-130",
  },
  {
    step: "02",
    title: "Hagnaya Port",
    description: "Board a ferry or fastcraft operated by Jomalia or Archipelago Shipping to Santa Fe Port.",
    detail: "Duration: 1 hour · Fare: PHP 175-200 per person",
  },
  {
    step: "03",
    title: "Santa Fe Port, Bantayan Island",
    description: "You've arrived. Tricycles, scooters, and bicycles are available at the port for getting around.",
    detail: "Total journey: approximately 4-5 hours from Cebu City",
  },
];

const travelTips = [
  { icon: Sun, title: "Best Months", text: "December to May for sunny weather and calm seas. Peak season is March-May." },
  { icon: Clock, title: "ATM Access", text: "ATMs are available in Bantayan town and Santa Fe. Withdraw cash before arrival as machines may run dry during peak season." },
  { icon: Phone, title: "Mobile Signal", text: "Globe and Smart networks have coverage throughout the island. WiFi is available at most resorts." },
  { icon: MapPin, title: "Emergency Contacts", text: "Bantayan Island Hospital: +63 32 438 9017 · Police: 166 · Bureau of Fire: 160" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="overflow-x-hidden">
      {/* ============ HERO ============ */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85"
            alt="Bantayan Island beach with crystal blue waters and white sand"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-white/80 text-sm font-medium tracking-widest uppercase mb-4 border border-white/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Cebu, Philippines
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Bantayan Island
              <br />
              <span className="text-sky-300">Travel Guide</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover one of the Philippines&apos; most beautiful island paradises. Pristine beaches, crystal waters, and unforgettable experiences await.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/destinations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all shadow-elevated hover:shadow-2xl hover:scale-105 text-sm"
              >
                Explore Now
                <ChevronRight size={18} />
              </Link>
              <Link
                href="#popular-destinations"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all hover:scale-105 text-sm"
              >
                Popular Destinations
              </Link>
            </div>
          </motion.div>

          {/* Quick stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-14 inline-flex flex-wrap justify-center gap-x-8 gap-y-3 glass rounded-2xl px-8 py-4"
          >
            {[
              { label: "Beaches", value: "15+" },
              { label: "Hotels", value: "50+" },
              { label: "Activities", value: "20+" },
              { label: "Annual Visitors", value: "100K+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-white font-bold text-lg leading-none">{stat.value}</p>
                <p className="text-white/60 text-xs mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} className="text-white/60" />
        </motion.div>
      </section>

      {/* ============ WHY VISIT BANTAYAN ============ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Why Bantayan"
            title="Why Visit Bantayan Island?"
            subtitle="An island that has it all — natural beauty, rich culture, extraordinary food, and the warm spirit of Filipino hospitality."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyVisitItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED DESTINATIONS ============ */}
      <section id="popular-destinations" className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Must-See"
              title="Featured Destinations"
              subtitle="The most celebrated spots on Bantayan Island, each offering a unique experience."
              centered={false}
              className="mb-0"
            />
            <Link
              href="/destinations"
              className="hidden md:inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all"
            >
              View all <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
            >
              View all destinations <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ POPULAR BEACHES ============ */}
      <section className="section-padding bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Beaches"
              title="Popular Beaches"
              subtitle="From bustling beach strips to hidden coves, Bantayan's beaches are second to none."
              centered={false}
              className="mb-0"
            />
            <Link href="/beaches" className="hidden md:inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all">
              All beaches <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredBeaches.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ ATTRACTIONS ============ */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Attractions"
              title="Popular Tourist Attractions"
              subtitle="Beyond the beaches, Bantayan Island offers caves, mangroves, heritage churches, and island hopping adventures."
              centered={false}
              className="mb-0"
            />
            <Link href="/attractions" className="hidden md:inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all">
              All attractions <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredAttractions.map((dest, i) => (
              <DestinationCard key={dest.id} destination={dest} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACTIVITIES ============ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Things To Do"
              title="Activities on the Island"
              subtitle="Whether you're seeking adventure or relaxation, Bantayan Island has an activity for every type of traveler."
              centered={false}
              className="mb-0"
            />
            <Link href="/activities" className="hidden md:inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all">
              All activities <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {activities.slice(0, 8).map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ LOCAL FOODS ============ */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Food Guide"
              title="Local Foods to Try"
              subtitle="Bantayan Island's food scene is a love letter to the sea — fresh, simple, and unforgettable."
              centered={false}
              className="mb-0"
            />
            <Link href="/food" className="hidden md:inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all">
              Full food guide <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {foods.map((food, i) => (
              <FoodCard key={food.id} food={food} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOTELS ============ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Where to Stay"
              title="Hotel Recommendations"
              subtitle="From beachfront resorts to intimate boutique stays, Bantayan Island has accommodation for every budget."
              centered={false}
              className="mb-0"
            />
            <Link href="/hotels" className="hidden md:inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all">
              All hotels <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hotels.slice(0, 4).map((hotel, i) => (
              <HotelCard key={hotel.id} hotel={hotel} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRANSPORTATION ============ */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Getting There"
            title="Transportation Guide"
            subtitle="Getting to Bantayan Island is a journey in itself — and part of the adventure."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-5">
              {transportSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-600 text-white font-bold text-lg flex items-center justify-center font-display">
                    {step.step}
                  </div>
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 flex-1 card-shadow">
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1">{step.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{step.description}</p>
                    <p className="text-primary-600 dark:text-primary-400 text-xs font-medium">{step.detail}</p>
                  </div>
                </motion.div>
              ))}
              <Link
                href="/transportation"
                className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm mt-2 hover:gap-3 transition-all"
              >
                Full transportation guide <ChevronRight size={16} />
              </Link>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Santa Fe Port Bantayan Island"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3">
                <p className="text-white font-semibold text-sm">Santa Fe Port</p>
                <p className="text-white/70 text-xs">Main gateway to Bantayan Island</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Photo Gallery"
            title="A Visual Journey"
            subtitle="See the stunning beauty of Bantayan Island through the lens of travelers and locals alike."
          />
          <GalleryGrid />
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="py-20 gradient-ocean">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            <StatCounter value={100000} suffix="+" label="Annual Visitors" description="Travelers every year" index={0} />
            <StatCounter value={15} suffix="+" label="Destinations" description="Beaches & attractions" index={1} />
            <StatCounter value={50} suffix="+" label="Hotels" description="Accommodation options" index={2} />
            <StatCounter value={20} suffix="+" label="Activities" description="Things to see and do" index={3} />
          </div>
        </div>
      </section>

      {/* ============ TRAVEL TIPS ============ */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader
              eyebrow="Practical Info"
              title="Travel Tips"
              subtitle="Everything you need to know before you go."
              centered={false}
              className="mb-0"
            />
            <Link href="/travel-tips" className="hidden md:inline-flex items-center gap-1.5 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all">
              Full travel guide <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {travelTips.map((tip, i) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-5 card-shadow border border-gray-100 dark:border-gray-800"
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-3">
                  <tip.icon size={19} className="text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-1.5">{tip.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{tip.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REVIEWS ============ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Testimonials"
            title="What Travelers Say"
            subtitle="Real reviews from visitors who have experienced the magic of Bantayan Island."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 6).map((review, i) => (
              <ReviewCard key={review.id} review={review} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section-padding bg-white dark:bg-gray-950">
        <div className="container-custom">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about visiting Bantayan Island answered in one place."
          />
          <FAQSection />
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-3 transition-all"
            >
              Have more questions? Contact us <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Get in Touch"
                subtitle="Have a question about your trip to Bantayan Island? We're happy to help you plan the perfect visit."
                centered={false}
                className="mb-8"
              />
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Location", value: "Bantayan Island, Cebu, Philippines" },
                  { icon: Phone, label: "Phone", value: "+63 32 438 0000" },
                  { icon: Mail, label: "Email", value: "info@bantayan-island-guide.com" },
                  { icon: Clock, label: "Response Time", value: "Usually within 24 hours" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                      <Icon size={17} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-600">{label}</p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 card-shadow">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
