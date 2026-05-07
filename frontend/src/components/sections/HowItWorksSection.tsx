"use client";

import { motion } from "framer-motion";

const STEPS = [
  { 
    step: "01", 
    title: "Asset Custody", 
    desc: "Physical commodities secured in audited, ISO-certified vaults across global jurisdictions." 
  },
  { 
    step: "02", 
    title: "Stellar Tokenization", 
    desc: "Soroban smart contracts mint 1:1 collateralized tokens on the Stellar ledger." 
  },
  { 
    step: "03", 
    title: "Instant Settlement", 
    desc: "Execute trades, transfers, and redemptions with 3–5 second deterministic finality." 
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-32 bg-stellar-dark/30 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="font-display text-[clamp(36px,5vw,72px)] font-light uppercase text-celestial-white tracking-tight">
            From Vault to <span className="gold-gradient italic font-semibold">Chain</span>
          </h2>
          <div className="divider-gold w-64 mx-auto mt-8" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {STEPS.map((item, i) => (
            <motion.div 
              key={item.step} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="font-mono text-6xl font-medium text-gold/60 mb-8 group-hover:text-gold transition-colors">
                {item.step}
              </div>
              <h3 className="font-display text-2xl font-semibold text-celestial-white mb-4 uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="font-sans text-ghost-white leading-relaxed font-light text-base">
                {item.desc}
              </p>
              
              {i < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-[1px] bg-gold/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
