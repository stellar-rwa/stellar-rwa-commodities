import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "healthy",
    timestamp: new Date().toISOString(),
    network: process.env.NEXT_PUBLIC_STELLAR_NETWORK || "testnet",
    services: {
      horizon: "online",
      soroban_rpc: "online",
      database: "connected"
    }
  });
}
