"use client";

import { motion } from "framer-motion";

const TICKER_ITEMS = [
  { label: "XAU/USD", value: "2,387.42", change: "+1.24%" },
  { label: "WTI CRUDE", value: "78.40", change: "-0.87%" },
  { label: "XLM/USD", value: "0.1142", change: "+2.11%" },
  { label: "HG COPPER", value: "4.52", change: "+0.43%" },
  { label: "NATGAS", value: "2.14", change: "-1.52%" },
  { label: "PLATINUM", value: "1,042.00", change: "+0.12%" },
  { label: "PALLADIUM", value: "984.50", change: "-0.34%" },
  { label: "RARE EARTH INDEX", value: "1,840.12", change: "+0.88%" },
];

export function LiveTicker() {
  return (
    <div className="w-full bg-void border-y border-gold/15 overflow-hidden h-12 flex items-center relative z-20">
      <div className="flex animate-ticker whitespace-nowrap">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
          <div key={i} className="flex items-center px-12 gap-3 border-r border-gold/10">
            <span className="font-sans text-[10px] font-black uppercase tracking-[0.25em] text-platinum">
              {item.label}
            </span>
            <span className="font-mono text-sm font-medium text-gold-light">
              {item.value}
            </span>
            <span className={`font-mono text-xs font-bold ${item.change.startsWith('+') ? 'text-ascent-green' : 'text-correction-rose'}`}>
              {item.change.startsWith('+') ? '▲' : '▼'} {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
