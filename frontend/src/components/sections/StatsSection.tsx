"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Total Value Locked", value: "$142.5M", sub: "+12.3% this month" },
  { label: "Active Holders", value: "24,812", sub: "Across 140 countries" },
  { label: "Avg. Settlement", value: "5.2s", sub: "Network finality" },
  { label: "Transaction Fee", value: "<$0.01", sub: "Fixed network cost" },
];

export function StatsSection() {
  return (
    <section className="py-12 bg-surface/30 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-sm font-medium text-muted-text uppercase tracking-widest mb-2">{stat.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h2>
              <p className="text-xs text-gold font-medium">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
