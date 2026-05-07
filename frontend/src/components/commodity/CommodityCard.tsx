import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CommodityCardProps {
  code: string;
  name: string;
  price: number;
  change: number;
  description: string;
  color: string;
  category: string;
  trending?: boolean;
}

export function CommodityCard({ code, name, price, change, description, color, category, trending }: CommodityCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="glass border-white/10 hover:border-gold/40 transition-all duration-700 group overflow-hidden relative shadow-2xl">
      {trending && (
        <div className="absolute top-0 right-0 px-4 py-1.5 bg-gold text-black text-[9px] font-black uppercase tracking-tighter rounded-bl-2xl z-20 shadow-lg">
          Institutional
        </div>
      )}
      
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-6">
          <div 
            className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-base shadow-2xl border border-white/20 transition-transform group-hover:scale-110 duration-500"
            style={{ 
              background: `linear-gradient(135deg, ${color}30, ${color}05)`,
              color: color,
              boxShadow: `0 0 30px ${color}15`
            }}
          >
            {code.slice(1)}
          </div>
          <Badge variant="outline" className={cn(
            "bg-white/5 font-black text-[10px] uppercase tracking-widest py-1.5 px-3 border-white/10 backdrop-blur-md",
            isPositive ? "text-emerald border-emerald/30" : "text-ruby border-ruby/30"
          )}>
            {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {isPositive ? "+" : ""}{change}%
          </Badge>
        </div>
        <div>
          <div className="text-[10px] text-gold font-black uppercase tracking-[0.3em] mb-2">{category}</div>
          <h3 className="text-2xl font-black text-white group-hover:text-glow transition-all duration-500 tracking-tight">{name}</h3>
          <p className="text-[9px] text-slate-500 font-mono uppercase tracking-[0.2em] mt-1">Asset Code: {code} • Soroban Audit 1.0</p>
        </div>
      </CardHeader>
      
      <CardContent className="pb-8">
        <div className="mb-6">
          <div className="flex items-baseline gap-1.5">
            <span className="text-3xl font-black text-white tracking-tighter">${price.toLocaleString()}</span>
            <span className="text-[10px] text-slate-500 font-black uppercase tracking-widest">USD / Unit</span>
          </div>
        </div>
        <p className="text-[13px] text-slate-300 leading-relaxed line-clamp-3 font-normal">
          {description}
        </p>
      </CardContent>
      
      <CardFooter className="pt-5 border-t border-white/5 bg-white/[0.03]">
        <Button variant="ghost" className="w-full justify-between hover:bg-transparent text-slate-400 hover:text-white px-0 transition-all duration-300" asChild>
          <Link href={`/marketplace/${code}`} className="flex items-center w-full">
            <span className="text-[10px] font-black uppercase tracking-[0.25em]">Access Liquidity</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-500" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
