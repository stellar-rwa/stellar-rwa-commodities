"use client";

import { motion } from "framer-motion";

const CREDENTIALS = [
  "3–5s Settlement",
  "0.00001 XLM Fees",
  "ISO 20022 Compliant",
  "Soroban Smart Contracts",
  "Institutional Security",
  "Deterministic Finality"
];

export function TechStackSection() {
  return (
    <section className="py-24 bg-void relative overflow-hidden border-y border-gold/10">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...CREDENTIALS, ...CREDENTIALS, ...CREDENTIALS].map((text, i) => (
          <div key={i} className="flex items-center px-12 gap-6 border-r border-gold/5">
            <div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_rgba(201,168,76,0.5)]" />
            <span className="font-sans text-xs font-black uppercase tracking-[0.4em] text-ghost-white">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
