import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact the Bantayan Island Travel Guide team with your questions about visiting Bantayan Island. We're happy to help you plan your perfect trip.",
};

export default function ContactPage() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Location",
      value: "Bantayan Island, Cebu, Philippines",
      subtitle: "Northern Cebu, Visayas Region",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+63 32 438 0000",
      subtitle: "Monday to Saturday, 8 AM - 6 PM",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@bantayan-island-guide.com",
      subtitle: "We respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "Mon - Sat: 8:00 AM - 6:00 PM",
      subtitle: "Sunday: 9:00 AM - 3:00 PM",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero */}
      <div className="gradient-ocean py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sky-300 text-sm font-semibold tracking-widest uppercase mb-3">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Have questions about Bantayan Island? We&apos;re here to help you plan the perfect trip.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-2">How Can We Help?</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8 leading-relaxed">
              Whether you have questions about transportation, accommodation, activities, or anything else about visiting Bantayan Island, our team is ready to assist you.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactItems.map(({ icon: Icon, title, value, subtitle }) => (
                <div key={title} className="bg-white dark:bg-gray-900 rounded-2xl p-5 card-shadow">
                  <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-primary-600 dark:text-primary-400" />
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">{title}</p>
                  <p className="text-primary-700 dark:text-primary-400 text-sm font-medium mb-0.5">{value}</p>
                  <p className="text-gray-400 text-xs">{subtitle}</p>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden card-shadow border border-gray-100 dark:border-gray-800">
              <iframe
                title="Bantayan Island Map"
                src="https://maps.google.com/maps?q=Bantayan+Island,+Cebu,+Philippines&z=12&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 card-shadow">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={20} className="text-primary-600 dark:text-primary-400" />
                <h2 className="font-display font-bold text-xl text-gray-900 dark:text-white">Send a Message</h2>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
