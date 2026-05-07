"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { WalletConnect } from "@/components/stellar/WalletConnect";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-[100] w-full h-16 bg-void/85 backdrop-blur-md border-b border-gold/15">
      <div className="container h-full mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gold flex items-center justify-center font-display text-void font-black text-xs tracking-tighter shadow-[0_0_15px_rgba(201,168,76,0.3)]">
            SC
          </div>
          <span className="font-display text-xl font-light tracking-[-0.04em] text-celestial-white uppercase">
            Stellar<span className="font-semibold text-gold">Commodity</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {["Markets", "Commodities", "Protocol", "Docs"].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`}
              className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-ghost-white hover:text-gold transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <WalletConnect />
          <Button 
            className="btn-primary h-10 px-8 text-[10px] rounded-none shimmer relative z-[110]"
            onClick={() => window.location.href = '/app'}
          >
            Launch App
          </Button>
        </div>
      </div>
    </nav>
  );
}
