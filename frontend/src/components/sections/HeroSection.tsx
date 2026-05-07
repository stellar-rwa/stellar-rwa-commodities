"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-stellar-blue/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-8">
            <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-medium text-muted-text uppercase tracking-wider">Stellar Wave Open-Source Program</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">
            Tokenizing Physical <br />
            <span className="text-gold-gradient">Commodities</span> on Stellar
          </h1>
          
          <p className="text-lg md:text-xl text-muted-text max-w-2xl mx-auto mb-10 leading-relaxed">
            A production-grade platform for fractional ownership of gold, silver, crude oil, and wheat. Built with Soroban smart contracts for institutional-grade reliability.
          </p>
          
          <div className="flex flex-col sm:row justify-center gap-4">
            <Button size="lg" className="bg-gold hover:bg-gold-light text-black font-bold px-8 h-12" asChild>
              <Link href="/marketplace">
                Explore Marketplace <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-surface h-12" asChild>
              <Link href="/docs">
                Read Documentation
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center gap-3 p-6 glass-card">
            <ShieldCheck className="h-10 w-10 text-gold" />
            <h3 className="font-bold">Institutional Security</h3>
            <p className="text-sm text-muted-text">SEP-compliant APIs and audited Soroban contracts.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 glass-card">
            <Zap className="h-10 w-10 text-gold" />
            <h3 className="font-bold">Instant Settlement</h3>
            <p className="text-sm text-muted-text">5-second finality with sub-cent transaction costs.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 glass-card">
            <Globe className="h-10 w-10 text-gold" />
            <h3 className="font-bold">Global Access</h3>
            <p className="text-sm text-muted-text">Democratizing access to global commodity markets.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
