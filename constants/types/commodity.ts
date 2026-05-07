export type CommodityType = "commodity" | "asset";

export interface CommodityAsset {
  code: string;
  name: string;
  issuer: string;
  description: string;
  decimals: number;
  type: CommodityType;
  color: string;
}

export interface CommodityPrice {
  code: string;
  name: string;
  price: number;
  change: number;
  timestamp: string;
}

export interface PriceHistoryItem {
  timestamp: string;
  price: number;
}
