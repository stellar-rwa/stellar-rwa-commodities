import { NextResponse } from "next/server";
import { COMMODITY_ASSETS } from "@stellar-commodity/constants";

export async function GET() {
  return NextResponse.json({
    data: COMMODITY_ASSETS,
    timestamp: new Date().toISOString()
  });
}
