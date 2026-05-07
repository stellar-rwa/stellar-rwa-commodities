export type StellarNetwork = "testnet" | "mainnet";

export interface StellarAccount {
  id: string;
  sequence: string;
  balances: StellarBalance[];
  subentry_count: number;
}

export interface StellarBalance {
  balance: string;
  limit?: string;
  asset_type: string;
  asset_code?: string;
  asset_issuer?: string;
  is_authorized?: boolean;
  is_authorized_to_maintain_liabilities?: boolean;
}

export interface StellarTransaction {
  id: string;
  hash: string;
  ledger: number;
  created_at: string;
  source_account: string;
  fee_charged: string;
  successful: boolean;
  memo?: string;
}
