"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Wallet, TrendingUp, History, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="font-display text-4xl font-bold mb-2">Account <span className="text-gold">Dashboard</span></h1>
          <p className="text-muted-text">Manage your commodity portfolio and transaction history.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-surface border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-text uppercase tracking-wider">Total Balance</CardTitle>
              <Wallet className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$42,560.80</div>
              <p className="text-xs text-success flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" /> +2.5% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-surface border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-text uppercase tracking-wider">Active Assets</CardTitle>
              <Badge className="bg-gold/10 text-gold border-gold/20">4 Tokens</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">XGLD, XSLV, XOIL</div>
              <p className="text-xs text-muted-text mt-1">Diversified portfolio</p>
            </CardContent>
          </Card>

          <Card className="bg-surface border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-text uppercase tracking-wider">KYC Status</CardTitle>
              <Badge className="bg-success/10 text-success border-success/20 uppercase text-[10px]">Verified</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">Level 2</div>
              <p className="text-xs text-muted-text mt-1">Institutional limit: Unlimited</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <History className="h-5 w-5 text-gold" /> Recent Activity
            </h2>
          </div>
          <Card className="bg-surface border-border overflow-hidden">
            <Table>
              <TableHeader className="bg-white/5">
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Asset</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { type: "buy", asset: "XGLD", amount: "1.5 oz", value: "$3,513.75", status: "completed", date: "May 06, 2026" },
                  { type: "sell", asset: "XOIL", amount: "50 bbl", value: "$3,906.00", status: "completed", date: "May 04, 2026" },
                  { type: "buy", asset: "XSLV", amount: "100 oz", value: "$2,845.00", status: "completed", date: "May 01, 2026" },
                  { type: "receive", asset: "XWHT", amount: "200 bu", value: "$1,124.00", status: "completed", date: "Apr 28, 2026" },
                ].map((tx, i) => (
                  <TableRow key={i} className="hover:bg-white/5 border-border">
                    <TableCell className="capitalize">
                      <div className="flex items-center gap-2">
                        {tx.type === "buy" ? <ArrowDownLeft className="h-4 w-4 text-success" /> : <ArrowUpRight className="h-4 w-4 text-gold" />}
                        {tx.type}
                      </div>
                    </TableCell>
                    <TableCell className="font-bold">{tx.asset}</TableCell>
                    <TableCell>{tx.amount}</TableCell>
                    <TableCell>{tx.value}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-success/5 text-success border-success/20 capitalize">{tx.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-muted-text">{tx.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </div>
  );
}
