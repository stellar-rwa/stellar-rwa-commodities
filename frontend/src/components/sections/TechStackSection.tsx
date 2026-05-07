"use client";

import { motion } from "framer-motion";
import { Cpu, Shield, Globe, Zap, Database, Lock } from "lucide-react";

const technologies = [
  { name: "Soroban WASM", icon: Cpu, category: "Blockchain", description: "Next-gen Rust contracts with predictable performance." },
  { name: "Stellar Horizon", icon: Globe, category: "Network", description: "Global ledger with 5-second finality and sub-cent fees." },
  { name: "Next.js 16", icon: Zap, category: "Infrastructure", description: "High-performance server-side rendering for institutional speed." },
  { name: "AES-256 Vaults", icon: Lock, category: "Security", description: "Military-grade encryption for all sensitive off-chain data." },
  { name: "Drizzle Core", icon: Database, category: "Storage", description: "Deterministic and type-safe relational mapping." },
  { name: "SEP Compliance", icon: Shield, category: "Protocol", description: "Full integration with Stellar Ecosystem Proposals (SEP-24, SEP-10)." },
];

export function TechStackSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">
            Built for <span className="gold-gradient">Scale</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Our infrastructure is engineered for maximum uptime and uncompromising security. 
            Audited by industry leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] glass border border-white/5 group hover:border-gold/20 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gold/10 transition-all duration-500">
                <tech.icon className="h-8 w-8 text-slate-400 group-hover:text-gold transition-colors" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-3 block">{tech.category}</span>
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-glow transition-all">{tech.name}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
