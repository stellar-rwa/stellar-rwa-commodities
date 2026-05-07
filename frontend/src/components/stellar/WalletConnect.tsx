"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { toast } from "sonner";

export function WalletConnect() {
  const [connecting, setConnecting] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = async () => {
    setConnecting(true);
    // Mock connection for now
    setTimeout(() => {
      setAddress("GC...XXXX");
      setConnecting(false);
      toast.success("Wallet connected!");
    }, 1000);
  };

  if (address) {
    return (
      <Button variant="outline" className="border-gold/50 text-gold hover:bg-gold/10">
        <Wallet className="mr-2 h-4 w-4" />
        {address.slice(0, 4)}...{address.slice(-4)}
      </Button>
    );
  }

  return (
    <Button 
      onClick={handleConnect} 
      disabled={connecting}
      className="bg-gold hover:bg-gold-light text-black font-bold"
    >
      <Wallet className="mr-2 h-4 w-4" />
      {connecting ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
}
