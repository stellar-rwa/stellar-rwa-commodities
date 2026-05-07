"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Next.js 15", category: "Frontend", description: "App Router & Server Components" },
  { name: "Soroban", category: "Smart Contracts", description: "Rust-based WASM contracts" },
  { name: "Stellar SDK", category: "Blockchain", description: "Native Horizon integration" },
  { name: "Tailwind v4", category: "Styling", description: "Modern CSS engine" },
  { name: "Drizzle ORM", category: "Database", description: "Type-safe DB interactions" },
  { name: "Better Auth", category: "Auth", description: "Secure session management" },
];

export function TechStackSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold mb-4">Built with Modern <span className="text-gold">Infrastructure</span></h2>
        <p className="text-muted-text max-w-2xl mx-auto">
          We use the latest technologies to ensure performance, security, and developer productivity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl border border-border bg-surface/30 hover:bg-surface/50 transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60 mb-2 block">{tech.category}</span>
            <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
            <p className="text-sm text-muted-text">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
