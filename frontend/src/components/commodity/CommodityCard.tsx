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
}

export function CommodityCard({ code, name, price, change, description, color }: CommodityCardProps) {
  const isPositive = change >= 0;

  return (
    <Card className="bg-surface/50 border-border hover:border-gold/50 transition-all group overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start mb-2">
          <div 
            className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xs"
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            {code.slice(1)}
          </div>
          <Badge variant="outline" className={cn(
            "bg-transparent font-medium",
            isPositive ? "text-success border-success/30" : "text-danger border-danger/30"
          )}>
            {isPositive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
            {isPositive ? "+" : ""}{change}%
          </Badge>
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-xs text-muted-text font-mono uppercase tracking-widest">{code}</p>
        </div>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="mb-4">
          <span className="text-2xl font-bold">${price.toLocaleString()}</span>
          <span className="text-xs text-muted-text ml-2">per unit</span>
        </div>
        <p className="text-sm text-muted-text line-clamp-2">
          {description}
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" className="w-full justify-between hover:bg-gold/10 hover:text-gold group-hover:bg-gold/10 group-hover:text-gold px-0 transition-colors" asChild>
          <Link href={`/marketplace/${code}`}>
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
