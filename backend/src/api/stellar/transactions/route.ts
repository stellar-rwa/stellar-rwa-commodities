import { NextRequest, NextResponse } from "next/server";
import { horizonServer } from "../../../stellar/client";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");
  const limit = parseInt(searchParams.get("limit") || "10");

  if (!address) {
    return NextResponse.json({ error: "Address is required" }, { status: 400 });
  }

  try {
    const txs = await horizonServer
      .transactions()
      .forAccount(address)
      .order("desc")
      .limit(limit)
      .call();

    return NextResponse.json({
      data: txs.records.map(tx => ({
        id: tx.id,
        hash: tx.hash,
        ledger: tx.ledger,
        created_at: tx.created_at,
        source_account: tx.source_account,
        fee_charged: tx.fee_charged,
        successful: tx.successful,
        memo: tx.memo,
      })),
      next_cursor: txs.records.length > 0 ? txs.records[txs.records.length - 1].paging_token : null
    });
  } catch (error: any) {
    console.error("Error loading transactions:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
