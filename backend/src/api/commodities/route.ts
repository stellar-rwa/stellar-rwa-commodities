import { NextResponse } from "next/server";
import { COMMODITY_ASSETS } from "@stellar-commodity/constants";

export async function GET() {
  const prices = COMMODITY_ASSETS.map(asset => {
    const basePrice = asset.code === "XGLD" ? 2342.50 : 
                     asset.code === "XSLV" ? 28.45 :
                     asset.code === "XOIL" ? 78.12 : 562.00;
    
    const variation = (Math.random() - 0.5) * 2;
    const currentPrice = basePrice + variation;
    const change = variation / basePrice * 100;

    return {
      code: asset.code,
      name: asset.name,
      price: parseFloat(currentPrice.toFixed(2)),
      change: parseFloat(change.toFixed(2)),
      timestamp: new Date().toISOString()
    };
  });

  return NextResponse.json({
    data: prices,
    timestamp: new Date().toISOString()
  });
}
