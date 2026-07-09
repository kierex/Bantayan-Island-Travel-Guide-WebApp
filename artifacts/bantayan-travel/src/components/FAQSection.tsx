"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.07 }}
          className="bg-white dark:bg-gray-900 rounded-2xl card-shadow overflow-hidden"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between p-5 text-left"
            aria-expanded={openId === faq.id}
          >
            <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base pr-4">
              {faq.question}
            </span>
            <span className="shrink-0 w-8 h-8 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
              {openId === faq.id ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>
          <AnimatePresence>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <div className="px-5 pb-5">
                  <div className="pt-1 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mt-3">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
