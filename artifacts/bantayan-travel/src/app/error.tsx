"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-red-50 to-white dark:from-gray-950 dark:to-gray-900 px-4">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center mx-auto mb-8">
          <RefreshCw className="text-red-600 dark:text-red-400" size={32} />
        </div>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
          Something Went Wrong
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
          We encountered an unexpected error. Don&apos;t worry — the island is still beautiful. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            <RefreshCw size={18} />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
