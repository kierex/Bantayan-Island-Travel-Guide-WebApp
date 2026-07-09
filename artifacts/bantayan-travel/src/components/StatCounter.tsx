"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  index?: number;
}

export function StatCounter({ value, suffix = "+", label, description, index = 0 }: StatCounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 leading-none">
        {inView ? <CountUp end={value} duration={2.5} separator="," suffix={suffix} /> : `0${suffix}`}
      </div>
      <p className="text-white font-semibold text-base mb-1">{label}</p>
      {description && <p className="text-white/60 text-sm">{description}</p>}
    </motion.div>
  );
}
