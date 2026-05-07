"use client";

import { motion } from "framer-motion";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { label: "Total Value Locked", value: "$2.48B", detail: "Institutional liquidity" },
  { label: "Assets Tokenized", value: "847", detail: "Verified across 12 vaults" },
  { label: "Countries Accessible", value: "140+", detail: "Global market reach" },
  { label: "Avg Settlement", value: "3.2s", detail: "Deterministic finality" },
];

export function StatsSection() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 relative group"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gold group-hover:h-full transition-all duration-700" />
              <div className="font-mono text-3xl font-medium text-gold-light mb-4 tracking-tighter">
                <Counter value={stat.value} />
              </div>
              <h4 className="font-sans text-[10px] font-black text-celestial-white uppercase tracking-[0.3em] mb-2">
                {stat.label}
              </h4>
              <p className="font-sans text-[10px] text-platinum uppercase tracking-widest italic font-light">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
