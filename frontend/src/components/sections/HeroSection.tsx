"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Globe, TrendingUp } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8 backdrop-blur-xl">
              <TrendingUp className="h-4 w-4 text-gold" />
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Institutional Asset Tokenization</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
              THE FUTURE OF <br />
              <span className="gold-gradient italic">COMMODITIES</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
              Access global liquidity with institutional-grade tokenization. 
              Secure, transparent, and settled on Stellar with sub-second finality.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-gold hover:scale-105 transition-transform text-black font-black px-10 h-16 text-lg rounded-full" asChild>
                <Link href="/marketplace">
                  ENTER MARKETPLACE <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 glass hover:bg-white/5 h-16 px-10 text-lg rounded-full font-bold" asChild>
                <Link href="/docs">
                  VIEW PROTOCOL
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 w-full glass p-8 rounded-3xl border border-white/5"
          >
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">$4.2B+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Total Valued Locked</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">128ms</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Avg Settlement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">15+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Global Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-white mb-1">Zero</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Custody Fees</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
