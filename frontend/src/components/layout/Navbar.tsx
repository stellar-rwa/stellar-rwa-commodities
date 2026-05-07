"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WalletConnect } from "@/components/stellar/WalletConnect";
import { LayoutDashboard, Store, BookOpen, Info } from "lucide-react";

const navItems = [
  { name: "Marketplace", href: "/marketplace", icon: Store },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Docs", href: "/docs", icon: BookOpen },
  { name: "About", href: "/about", icon: Info },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-display text-2xl font-bold tracking-tighter text-gold">
              STELLAR<span className="text-white">COMMODITY</span>
            </span>
          </Link>
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold",
                  pathname === item.href ? "text-gold" : "text-muted-text"
                )}
              >
                <item.icon className="h-4 w-4" />
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
