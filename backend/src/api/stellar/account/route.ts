import { NextRequest, NextResponse } from "next/server";
import { horizonServer } from "../../../stellar/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address is required" }, { status: 400 });
  }

  try {
    const account = await horizonServer.loadAccount(address);
    return NextResponse.json({
      id: account.id,
      sequence: account.sequence,
      balances: account.balances,
      subentry_count: account.subentry_count,
    });
  } catch (error: any) {
    console.error("Error loading account:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to load account",
      status: error.response?.status
    }, { status: error.response?.status || 500 });
  }
}
