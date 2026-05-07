"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CommodityCardProps {
  code: string;
  name: string;
  price: number;
  change: number;
  category: string;
}

export function CommodityCard({ code, name, price, change, category }: CommodityCardProps) {
  const isPositive = change >= 0;

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Sparkline
  const generateSparkline = () => {
    const points = Array.from({ length: 12 }).map((_, i) => ({
      x: i * 10,
      y: 20 + Math.random() * 20,
    }));
    return points.map(p => `${p.x},${p.y}`).join(" ");
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="reveal group perspective-1000"
    >
      <Card className="glass rounded-none border-gold/15 group-hover:border-gold/40 transition-all duration-700 relative overflow-hidden h-full shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-6">
            <div className="w-10 h-10 rounded-none bg-gold flex items-center justify-center font-display text-void font-black text-sm border border-gold/20">
              {code.slice(0, 1)}
            </div>
            <div className="flex items-center gap-2">
               <div className="h-1.5 w-1.5 rounded-full bg-ascent-green relative">
                 <div className="absolute inset-0 rounded-full bg-ascent-green animate-pulse-ring" />
               </div>
               <span className="font-mono text-[10px] text-ascent-green tracking-widest uppercase font-bold">Live</span>
            </div>
          </div>
          <div>
            <div className="text-[10px] text-platinum font-bold uppercase tracking-[0.25em] mb-2">{category}</div>
            <h3 className="font-sans text-lg font-medium text-celestial-white group-hover:text-gold transition-colors tracking-widest uppercase">{name}</h3>
          </div>
        </CardHeader>
        
        <CardContent className="pb-8">
          <div className="mb-6">
            <div className="font-mono text-3xl font-medium text-gold-light tracking-tighter">
              ${price.toLocaleString()}
            </div>
            <div className={cn(
              "font-mono text-xs mt-1 font-bold",
              isPositive ? "text-ascent-green" : "text-correction-rose"
            )}>
              {isPositive ? '▲' : '▼'} {isPositive ? '+' : ''}{change}%
            </div>
          </div>
          
          <div className="w-full h-12 mb-8">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke={isPositive ? "#22C55E" : "#F43F5E"}
                strokeWidth="1.5"
                points={generateSparkline()}
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-6">
            <div>
              <div className="text-[9px] text-platinum uppercase font-bold mb-1 tracking-wider">Market Cap</div>
              <div className="font-mono text-[10px] text-ghost-white tracking-tight">$14.2B</div>
            </div>
            <div>
              <div className="text-[9px] text-platinum uppercase font-bold mb-1 tracking-wider">24h Vol</div>
              <div className="font-mono text-[10px] text-ghost-white tracking-tight">$284M</div>
            </div>
            <div>
              <div className="text-[9px] text-platinum uppercase font-bold mb-1 tracking-wider">Yield</div>
              <div className="font-mono text-[10px] text-ghost-white tracking-tight">4.2%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
