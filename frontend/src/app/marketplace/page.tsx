"use client";

import { motion } from "framer-motion";
import { CommodityCard } from "@/components/commodity/CommodityCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const commodities = [
  {
    code: "XGLD",
    name: "Gold",
    price: 2342.50,
    change: 1.2,
    description: "Physical gold bullion, vaulted and audited.",
    color: "#c9a84c",
  },
  {
    code: "XSLV",
    name: "Silver",
    price: 28.45,
    change: -0.5,
    description: "Fine silver reserves, tokenized for trade.",
    color: "#94a3b8",
  },
  {
    code: "XOIL",
    name: "Crude Oil",
    price: 78.12,
    change: 2.4,
    description: "Brent Crude barrels, fractionalized.",
    color: "#1e293b",
  },
  {
    code: "XWHT",
    name: "Wheat",
    price: 562.00,
    change: -1.1,
    description: "Premium wheat bushels, globally tradable.",
    color: "#f59e0b",
  },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");

  const filtered = commodities.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Commodity <span className="text-gold">Marketplace</span></h1>
          <p className="text-muted-text max-w-2xl">
            Trade tokenized physical commodities with instant settlement and institutional security.
          </p>
        </div>

        <div className="flex flex-col sm:row gap-4 items-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-text" />
            <Input 
              placeholder="Search assets..." 
              className="pl-10 bg-surface border-border focus:border-gold"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2 ml-auto">
            <Badge variant="outline" className="bg-surface cursor-pointer hover:border-gold">All</Badge>
            <Badge variant="outline" className="bg-surface cursor-pointer hover:border-gold text-muted-text">Metals</Badge>
            <Badge variant="outline" className="bg-surface cursor-pointer hover:border-gold text-muted-text">Energy</Badge>
            <Badge variant="outline" className="bg-surface cursor-pointer hover:border-gold text-muted-text">Agriculture</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((commodity, index) => (
            <motion.div
              key={commodity.code}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <CommodityCard {...commodity} />
            </motion.div>
          ))}
        </div>
        
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="text-muted-text italic">No assets found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
