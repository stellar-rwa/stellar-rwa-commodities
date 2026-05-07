"use client";

import { motion } from "framer-motion";

export function WhyStellarSection() {
  const codeSnippet = `// Soroban Smart Contract
pub fn settle_commodity(
    e: Env, 
    vault_id: BytesN<32>, 
    amount: i128
) {
    // 1. Verify physical reserve
    let reserve = e.storage().get(&vault_id);
    assert!(reserve >= amount);

    // 2. Atomic blockchain transfer
    token::transfer(&e, &from, &to, &amount);

    // 3. Finality in 3-5 seconds
    e.events().publish((symbol!("settle"),), amount);
}`;

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-display text-[clamp(36px,4vw,64px)] font-light uppercase text-celestial-white tracking-tight mb-8">
              Why <span className="gold-gradient italic font-semibold">Stellar</span>
            </h2>
            <div className="space-y-6 font-sans text-ghost-white text-lg font-light leading-relaxed">
              <p>
                Stellar was built from the ground up for asset issuance. Unlike general-purpose chains, 
                its native compliance features and specialized ledger ensure that physical asset 
                representation is both legally binding and technically sound.
              </p>
              <p>
                With Soroban, we implement Turing-complete logic that bridges off-chain custody 
                audit trails with on-chain liquidity, ensuring zero-gap settlement.
              </p>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-none border-gold/15 relative group"
          >
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gold-light/60">
              soroban_settlement.rs
            </div>
            <pre className="font-mono text-sm leading-relaxed overflow-x-auto text-ghost-white">
              {codeSnippet.split('\n').map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-platinum/30 select-none">{(i + 1).toString().padStart(2, '0')}</span>
                  <span dangerouslySetInnerHTML={{ 
                    __html: line
                      .replace(/\/\/.*/, '<span class="text-ascent-green">$0</span>')
                      .replace(/(pub fn|let|assert!)/g, '<span class="text-gold-light">$1</span>')
                      .replace(/(&e|&from|&to|&amount|e|Env|vault_id|BytesN<32>|i128)/g, '<span class="text-celestial-white">$1</span>')
                  }} />
                </div>
              ))}
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
