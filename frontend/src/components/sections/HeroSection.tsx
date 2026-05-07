"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 4 + 2,
    }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setStars(generatedStars);
  }, []);

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layers - Always below z-10 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              "--duration": `${star.duration}s`,
            } as any}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[60%] h-[40%] bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute top-[10%] right-[10%] w-[50%] h-[60%] bg-stellar-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[30%] w-[40%] h-[50%] bg-purple-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-20 mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[clamp(52px,9vw,120px)] font-light tracking-[-0.04em] leading-[0.92] uppercase text-celestial-white mb-10">
              THE PHYSICAL WORLD <br />
              ON THE STELLAR <br />
              <span className="gold-gradient font-semibold italic">BLOCKCHAIN</span>
            </h1>
            
            <p className="font-sans text-ghost-white text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
              Institutional-grade tokenization of gold, energy, rare earths, and beyond — 
              settled atomically at 3–5 seconds per transaction.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-24">
              <Button 
                size="lg" 
                className="btn-primary h-16 px-12 text-sm rounded-none shimmer"
                onClick={() => console.log("Explore Assets Clicked")}
              >
                Explore Assets <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-secondary h-16 px-12 text-sm rounded-none"
                onClick={() => console.log("Read Protocol Clicked")}
              >
                Read the Protocol
              </Button>
            </div>
          </motion.div>

          {/* Stat Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full pt-16 border-t border-gold/15"
          >
            <div className="text-center">
              <div className="font-mono text-3xl font-medium text-gold-light mb-2 tracking-tighter">$2.4B TVL</div>
              <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-platinum font-bold">Total Value Locked</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-medium text-gold-light mb-2 tracking-tighter">847+</div>
              <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-platinum font-bold">Assets Tokenized</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-medium text-gold-light mb-2 tracking-tighter">3–5s</div>
              <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-platinum font-bold">Settlement</div>
            </div>
            <div className="text-center">
              <div className="font-mono text-3xl font-medium text-gold-light mb-2 tracking-tighter">0.00001</div>
              <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-platinum font-bold">XLM Fee</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
