"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CommodityCard } from "@/components/commodity/CommodityCard";
import { COMMODITY_ASSETS, CommodityCategory } from "@/../../constants/assets";
import { Button } from "@/components/ui/button";

const CATEGORIES: { id: CommodityCategory | 'All', label: string }[] = [
  { id: 'All', label: 'All Assets' },
  { id: 'Metals', label: 'Precious Metals' },
  { id: 'Energy', label: 'Energy' },
  { id: 'Agriculture', label: 'Agriculture' },
  { id: 'RareEarths', label: 'Rare Earths' },
  { id: 'Environmental', label: 'Environmental' },
];

export function CommoditiesSection() {
  const [activeCategory, setActiveCategory] = useState<CommodityCategory | 'All'>('All');

  const filteredAssets = activeCategory === 'All' 
    ? COMMODITY_ASSETS 
    : COMMODITY_ASSETS.filter(a => a.category === activeCategory);

  // Mock prices for landing page visual
  const getMockPrice = (code: string) => {
    const hash = code.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hash % 1000) + 50.45;
  };

  const getMockChange = (code: string) => {
    const hash = code.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return parseFloat(((hash % 10) - 4.5).toFixed(2));
  };

  return (
    <section className="py-24 relative overflow-hidden" id="marketplace">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Institutional <span className="gold-gradient">Asset Classes</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
              Explore a curated selection of physical commodities, tokenized for the digital age. 
              Each asset is 100% collateralized by audited reserves.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 mt-12 p-2 glass rounded-full border border-white/5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat.id 
                    ? "bg-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]" 
                    : "text-slate-500 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredAssets.map((asset, index) => (
              <motion.div
                layout
                key={asset.code}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CommodityCard 
                  {...asset} 
                  price={getMockPrice(asset.code)}
                  change={getMockChange(asset.code)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
