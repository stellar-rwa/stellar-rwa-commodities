"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Total Valued Locked", value: "$4.27B", sub: "Institutional liquidity", trend: "+18.4%" },
  { label: "Active Nodes", value: "842", sub: "Distributed globally", trend: "Verified" },
  { label: "Avg. Latency", value: "128ms", sub: "Sub-second finality", trend: "-45.2%" },
  { label: "Protocol Security", value: "SOC-2", sub: "Type II compliant", trend: "Grade A" },
];

export function StatsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4 group-hover:text-gold transition-colors">
                {stat.label}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <h2 className="text-4xl md:text-5xl font-black text-white group-hover:text-glow transition-all">
                  {stat.value}
                </h2>
                <span className="text-[10px] font-black text-emerald uppercase tracking-tighter bg-emerald/10 px-2 py-0.5 rounded-full">
                  {stat.trend}
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light italic">
                {stat.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
