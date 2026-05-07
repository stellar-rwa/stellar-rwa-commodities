"use client";

import { useParams } from "next/navigation";
import { COMMODITY_ASSETS } from "@stellar-commodity/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, TrendingDown, ShieldCheck, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AssetDetailPage() {
  const params = useParams();
  const assetCode = params.assetCode as string;
  const asset = COMMODITY_ASSETS.find(a => a.code === assetCode);

  if (!asset) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Asset Not Found</h1>
        <Button asChild>
          <Link href="/marketplace">Back to Marketplace</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/marketplace" className="inline-flex items-center text-muted-text hover:text-gold mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Marketplace
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl"
                style={{ backgroundColor: `${asset.color}20`, color: asset.color }}
              >
                {asset.code.slice(1)}
              </div>
              <div>
                <h1 className="text-4xl font-bold">{asset.name}</h1>
                <p className="text-muted-text uppercase tracking-widest font-mono">{asset.code}</p>
              </div>
              <Badge className="ml-auto bg-success/10 text-success border-success/20">
                <TrendingUp className="mr-1 h-3 w-3" /> +1.2%
              </Badge>
            </div>
            <p className="text-lg text-muted-text leading-relaxed">
              {asset.description} Every token is backed 1:1 by physical reserves stored in secure, audited vaults.
            </p>
          </motion.div>

          <Card className="bg-surface border-border">
            <CardHeader>
              <CardTitle>Asset Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-xs text-muted-text uppercase mb-1">Market Cap</p>
                  <p className="text-xl font-bold">$12.4M</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text uppercase mb-1">24h Volume</p>
                  <p className="text-xl font-bold">$1.2M</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text uppercase mb-1">Circulating Supply</p>
                  <p className="text-xl font-bold">5,290 {asset.code}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-text uppercase mb-1">Total Holders</p>
                  <p className="text-xl font-bold">1,842</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-surface/30 border border-border">
              <ShieldCheck className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-bold mb-2">Audited Reserves</h3>
              <p className="text-sm text-muted-text">Monthly audits by independent third parties.</p>
            </div>
            <div className="p-6 rounded-xl bg-surface/30 border border-border">
              <Zap className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-bold mb-2">Instant Minting</h3>
              <p className="text-sm text-muted-text">Convert your USDC to {asset.code} instantly.</p>
            </div>
            <div className="p-6 rounded-xl bg-surface/30 border border-border">
              <Globe className="h-8 w-8 text-gold mb-4" />
              <h3 className="font-bold mb-2">Global Liquidity</h3>
              <p className="text-sm text-muted-text">Trade 24/7 on the Stellar DEX.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-surface border-border border-gold/30">
            <CardHeader>
              <CardTitle className="text-xl">Tokenize {asset.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-background border border-border">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-text">Price</span>
                  <span className="text-success">+0.5%</span>
                </div>
                <div className="text-2xl font-bold">$2,342.50</div>
                <p className="text-[10px] text-muted-text">Last updated: 1 min ago</p>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-text uppercase">Amount to Mint</label>
                <div className="relative">
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    className="w-full bg-background border border-border rounded-lg h-12 px-4 focus:outline-none focus:border-gold transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold">{asset.code}</span>
                </div>
              </div>

              <Button className="w-full h-12 bg-gold hover:bg-gold-light text-black font-bold">
                Connect Wallet to Start
              </Button>
              <p className="text-[10px] text-center text-muted-text">
                By tokenizing, you agree to our Terms of Service and Privacy Policy. KYC level 2 required for minting.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-surface border-border">
            <CardHeader>
              <CardTitle className="text-sm">Compliance Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-xs">
                <span className="text-muted-text">Issuer Node</span>
                <span className="font-mono">{asset.issuer ? asset.issuer.slice(0, 8) : "G..."}...</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-text">SEP-0008</span>
                <span className="text-success flex items-center"><ShieldCheck className="h-3 w-3 mr-1" /> Enabled</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-muted-text">Protocol</span>
                <span>Soroban Protocol 26</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
