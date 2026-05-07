"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { WalletConnect } from "@/components/stellar/WalletConnect";
import { Store, BookOpen, Info, Shield, ShieldCheck } from "lucide-react";

const navItems = [
  { name: "Global Markets", href: "/marketplace", icon: Store },
  { name: "Reserve Ledger", href: "/docs", icon: BookOpen },
  { name: "Institutional", href: "/about", icon: ShieldCheck },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-[100] w-full flex justify-center pt-6 px-4 pointer-events-none">
      <div className="container max-w-6xl glass rounded-full h-16 flex items-center justify-between px-8 border border-white/10 pointer-events-auto backdrop-blur-2xl">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-gold flex items-center justify-center text-black font-black text-xs rotate-3 group-hover:rotate-0 transition-transform">
              S
            </div>
            <span className="font-display text-xl font-black tracking-tighter text-white group-hover:text-gold transition-colors">
              STELLAR<span className="text-slate-300 font-light">CORE</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] transition-all hover:text-white",
                  pathname === item.href ? "text-gold" : "text-slate-500"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <WalletConnect />
        </div>
      </div>
    </nav>
  );
}
