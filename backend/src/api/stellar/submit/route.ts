import { NextRequest, NextResponse } from "next/server";
import { Transaction, TransactionBuilder, Networks } from "@stellar/stellar-sdk";
import { horizonServer } from "../../../stellar/client";

export async function POST(request: NextRequest) {
  try {
    const { xdr } = await request.json();

    if (!xdr) {
      return NextResponse.json({ error: "XDR is required" }, { status: 400 });
    }

    const tx = new Transaction(xdr, process.env.NEXT_PUBLIC_STELLAR_NETWORK === "mainnet" ? Networks.PUBLIC : Networks.TESTNET);
    const result = await horizonServer.submitTransaction(tx);

    return NextResponse.json({
      hash: result.hash,
      ledger: result.ledger,
      successful: true,
    });
  } catch (error: any) {
    console.error("Error submitting transaction:", error);
    return NextResponse.json({ 
      error: error.message || "Failed to submit transaction",
      extras: error.response?.data?.extras
    }, { status: 500 });
  }
}
