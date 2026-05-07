"use client";

import { motion } from "framer-motion";
import { CommodityCard } from "@/components/commodity/CommodityCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const commodities = [
  {
    code: "XGLD",
    name: "Gold Bullion",
    price: 2387.42,
    change: 1.24,
    category: "Precious Metals",
  },
  {
    code: "XSLV",
    name: "Silver Bullion",
    price: 28.45,
    change: -0.5,
    category: "Precious Metals",
  },
  {
    code: "XOIL",
    name: "Crude Oil (WTI)",
    price: 78.12,
    change: 2.4,
    category: "Energy",
  },
  {
    code: "XWHT",
    name: "Premium Wheat",
    price: 562.00,
    change: -1.1,
    category: "Agriculture",
  },
  {
    code: "XCOP",
    name: "Fine Copper",
    price: 4.52,
    change: 2.11,
    category: "Industrial",
  },
  {
    code: "XNGS",
    name: "Natural Gas",
    price: 2.14,
    change: -1.52,
    category: "Energy",
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = commodities.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || 
                          c.code.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-24 relative z-10">
      <div className="flex flex-col gap-16">
        <div className="max-w-4xl">
          <h1 className="font-display text-[clamp(42px,6vw,84px)] font-light tracking-[-0.04em] leading-[0.92] uppercase text-celestial-white mb-8">
            Commodity <span className="gold-gradient italic font-semibold">Marketplace</span>
          </h1>
          <p className="font-sans text-ghost-white text-xl font-light leading-relaxed max-w-2xl">
            Trade tokenized physical commodities with institutional-grade security. 
            All assets are 1:1 collateralized and settled atomically on Stellar.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between pb-12 border-b border-gold/15">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-platinum" />
            <Input 
              placeholder="Search by symbol or asset name..." 
              className="pl-12 h-14 bg-vault/50 border-gold/10 rounded-none focus-visible:ring-gold/30 text-ghost-white placeholder:text-void-mist"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <SlidersHorizontal className="mr-4 h-4 w-4 text-gold" />
            {["All", "Precious Metals", "Energy", "Agriculture", "Industrial"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 h-10 font-sans text-[10px] font-black uppercase tracking-[0.2em] transition-all border ${
                  activeCategory === cat 
                  ? "bg-gold text-void border-gold" 
                  : "bg-transparent text-platinum border-gold/20 hover:border-gold/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((commodity, index) => (
            <motion.div
              key={commodity.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <CommodityCard {...commodity} />
            </motion.div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-48 glass">
            <p className="font-display text-2xl text-platinum italic">No assets found matching your criteria.</p>
            <button 
              onClick={() => {setSearch(""); setActiveCategory("All");}}
              className="mt-8 text-gold uppercase tracking-widest text-xs hover:text-gold-light"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
