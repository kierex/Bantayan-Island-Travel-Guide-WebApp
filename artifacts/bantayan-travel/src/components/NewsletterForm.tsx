"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    // In production: wire to Mailchimp, ConvertKit, Resend Audiences, etc.
    // For now, acknowledge the subscription with a success state.
    console.log("[Newsletter Subscription]", { email, timestamp: new Date().toISOString() });
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-2 text-emerald-400 text-sm">
        <CheckCircle size={16} />
        <span>You&apos;re subscribed. Thank you!</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2" aria-label="Newsletter subscription">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          autoComplete="email"
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 placeholder:text-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 min-w-0"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm rounded-lg transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-gray-950"
        >
          Join
        </button>
      </div>
      {error && (
        <p className="text-rose-400 text-xs" role="alert">{error}</p>
      )}
    </form>
  );
}
