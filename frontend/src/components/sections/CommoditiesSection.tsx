"use client";

import { motion } from "framer-motion";
import { CommodityCard } from "@/components/commodity/CommodityCard";

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

export function CommoditiesSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex flex-col md:row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="font-display text-4xl font-bold mb-4">Supported <span className="text-gold">Assets</span></h2>
          <p className="text-muted-text max-w-xl">
            Real-world assets tokenized as Stellar-native assets. Every token is backed 1:1 by physical reserves in regulated vaults.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {commodities.map((commodity, index) => (
          <motion.div
            key={commodity.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CommodityCard {...commodity} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
