"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CommodityCard } from "@/components/commodity/CommodityCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

const FEATURED = [
  { code: "XAU", name: "Gold Bullion", price: 2387.42, change: 1.24, category: "Precious Metals" },
  { code: "WTI", name: "Crude Oil", price: 78.40, change: -0.87, category: "Energy" },
  { code: "HG", name: "Fine Copper", price: 4.52, change: 2.11, category: "Industrial" },
  { code: "REI", name: "Rare Earth Index", price: 1840.12, change: 0.43, category: "Minerals" },
];

const MORE_ASSETS = [
  { code: "XAG", name: "Silver Bullion", price: 28.42, change: 0.84, category: "Precious Metals" },
  { code: "BRENT", name: "Brent Crude", price: 82.15, change: -1.24, category: "Energy" },
  { code: "ALU", name: "Aluminium", price: 2542.00, change: 1.52, category: "Industrial" },
  { code: "LITH", name: "Lithium Carbonate", price: 14200.0, change: -4.21, category: "Minerals" },
  { code: "PLAT", name: "Platinum", price: 1042.0, change: 0.12, category: "Precious Metals" },
  { code: "PALL", name: "Palladium", price: 984.5, change: -0.34, category: "Precious Metals" },
  { code: "NAT", name: "Natural Gas", price: 2.14, change: 1.88, category: "Energy" },
  { code: "WHT", name: "Soft Wheat", price: 624.0, change: 0.55, category: "Agriculture" },
];

export function CommoditiesSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-32 relative z-10" id="markets">
      <div className="container mx-auto px-4">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-[clamp(36px,5vw,72px)] font-light uppercase gold-gradient tracking-tight"
          >
            Markets Overview
          </motion.h2>
          <p className="font-sans text-platinum max-w-2xl mx-auto mt-6 font-semibold uppercase tracking-[0.25em] text-[10px]">
            Institutional asset tokenization settled on the Stellar ledger
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {FEATURED.map((asset) => (
            <CommodityCard key={asset.code} {...asset} />
          ))}
        </div>

        <AnimatePresence>
          {showMore && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 pb-12">
                {MORE_ASSETS.map((asset) => (
                  <CommodityCard key={asset.code} {...asset} />
                ))}
              </div>
              <div className="flex justify-center mb-16">
                <Link href="/markets" className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-gold hover:text-gold-light transition-all flex items-center gap-4 group">
                   View All Institutional Markets 
                   <div className="w-12 h-[1px] bg-gold group-hover:w-20 transition-all" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center">
          <Button 
            variant="outline" 
            className="btn-secondary h-16 px-12 rounded-none"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Fewer Assets ↑" : "+ 24 More Assets →"}
          </Button>
        </div>
      </div>
    </section>
  );
}
