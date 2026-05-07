"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet, LogOut } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function WalletConnect() {
  const [connecting, setConnecting] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = async () => {
    setConnecting(true);
    // Mock connection for institutional settlement
    setTimeout(() => {
      setAddress("GC7A...2B4C");
      setConnecting(false);
      toast.success("Institutional Vault Connected", {
        description: "Ready for atomic settlement on Stellar.",
      });
    }, 1200);
  };

  const handleDisconnect = () => {
    setAddress(null);
    toast.info("Vault Disconnected");
  };

  if (address) {
    return (
      <Button 
        variant="outline" 
        onClick={handleDisconnect}
        className="btn-secondary h-10 px-6 text-[10px] rounded-none border-gold-light text-gold-light group relative overflow-hidden"
      >
        <span className="flex items-center group-hover:opacity-0 transition-opacity">
          <Wallet className="mr-2 h-3.5 w-3.5" />
          <span className="font-mono">{address.slice(0, 4)}...{address.slice(-4)}</span>
        </span>
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-gold-dark/20">
          <LogOut className="mr-2 h-3.5 w-3.5" />
          Disconnect
        </span>
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleConnect} 
      disabled={connecting}
      className="btn-secondary h-10 px-6 text-[10px] rounded-none hidden md:flex"
    >
      <Wallet className="mr-2 h-3.5 w-3.5" />
      {connecting ? "Synchronizing..." : "Connect Wallet"}
    </Button>
  );
}
