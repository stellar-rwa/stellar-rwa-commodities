"use client";

import { motion } from "framer-motion";

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6 uppercase tracking-tight">
            Institutional <span className="gold-gradient">Onboarding</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light">
            A seamless bridge between physical assets and digital liquidity. 
            Audited, compliant, and instantaneous.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { step: "01", title: "Identity Verification", desc: "Enterprise-grade KYC/AML screening via automated compliance hooks." },
            { step: "02", title: "Institutional Deposit", desc: "Settlement via USDC, XLM, or direct wire to regulated custodians." },
            { step: "03", title: "Reserve Verification", desc: "Proof-of-Reserve (PoR) validation across audited global vaults." },
            { step: "04", title: "Fractional Trade", desc: "High-frequency trading with sub-second finality on the Stellar ledger." },
          ].map((item, index) => (
            <motion.div 
              key={item.step} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-8 glass rounded-3xl border border-white/5 group hover:border-gold/30 transition-all"
            >
              <span className="text-8xl font-display font-black text-white/[0.02] absolute -top-8 -left-4 group-hover:text-gold/5 transition-colors">{item.step}</span>
              <div className="w-8 h-1 bg-gold mb-6 rounded-full group-hover:w-16 transition-all" />
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-wider">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
