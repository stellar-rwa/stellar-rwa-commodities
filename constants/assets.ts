export type CommodityCategory = 'Metals' | 'Energy' | 'Agriculture' | 'Environmental' | 'RareEarths';

export interface CommodityAsset {
  code: string;
  name: string;
  issuer: string;
  description: string;
  decimals: number;
  type: string;
  color: string;
  category: CommodityCategory;
  trending?: boolean;
  marketCap?: string;
}

export const COMMODITY_ASSETS: CommodityAsset[] = [
  // Precious Metals
  {
    code: "XGLD",
    name: "Gold Bullion",
    issuer: "GD...",
    description: "LBMA-certified physical gold, secured in Swiss vaults.",
    decimals: 7,
    type: "commodity",
    color: "#D4AF37",
    category: "Metals",
    trending: true,
    marketCap: "$14.2T"
  },
  {
    code: "XSLV",
    name: "Silver Fine",
    issuer: "SV...",
    description: "99.9% pure silver reserves, audited monthly.",
    decimals: 7,
    type: "commodity",
    color: "#C0C0C0",
    category: "Metals",
    marketCap: "$1.3T"
  },
  {
    code: "XPLT",
    name: "Platinum",
    issuer: "PT...",
    description: "Industrial-grade platinum, tokenized for liquid trading.",
    decimals: 7,
    type: "commodity",
    color: "#E5E4E2",
    category: "Metals"
  },
  {
    code: "XPAL",
    name: "Palladium",
    issuer: "PD...",
    description: "Rare metal for green tech, high scarcity value.",
    decimals: 7,
    type: "commodity",
    color: "#CED4DA",
    category: "Metals"
  },
  // Energy
  {
    code: "XOIL",
    name: "Brent Crude",
    issuer: "OL...",
    description: "Global benchmark crude oil barrels.",
    decimals: 7,
    type: "commodity",
    color: "#0F172A",
    category: "Energy",
    trending: true,
    marketCap: "$2.1T"
  },
  {
    code: "XNGS",
    name: "Natural Gas",
    issuer: "NG...",
    description: "Liquefied natural gas (LNG) units.",
    decimals: 7,
    type: "commodity",
    color: "#3B82F6",
    category: "Energy"
  },
  {
    code: "XURN",
    name: "Uranium U3O8",
    issuer: "UN...",
    description: "Clean energy fuel, highly regulated and secured.",
    decimals: 7,
    type: "commodity",
    color: "#22C55E",
    category: "Energy",
    trending: true
  },
  // Agriculture
  {
    code: "XWHT",
    name: "Milling Wheat",
    issuer: "WT...",
    description: "Premium European milling wheat bushels.",
    decimals: 7,
    type: "commodity",
    color: "#F59E0B",
    category: "Agriculture"
  },
  {
    code: "XCOCO",
    name: "Cocoa Bean",
    issuer: "CC...",
    description: "Grade-A West African cocoa reserves.",
    decimals: 7,
    type: "commodity",
    color: "#78350F",
    category: "Agriculture"
  },
  {
    code: "XCOF",
    name: "Arabica Coffee",
    issuer: "CF...",
    description: "Premium coffee bean inventory.",
    decimals: 7,
    type: "commodity",
    color: "#451A03",
    category: "Agriculture"
  },
  // Rare Earths
  {
    code: "XLIT",
    name: "Lithium Carbonate",
    issuer: "LI...",
    description: "Battery-grade lithium, essential for the EV transition.",
    decimals: 7,
    type: "commodity",
    color: "#F8FAFC",
    category: "RareEarths",
    trending: true
  },
  {
    code: "XNEO",
    name: "Neodymium",
    issuer: "NE...",
    description: "Rare earth element for high-performance magnets.",
    decimals: 7,
    type: "commodity",
    color: "#64748B",
    category: "RareEarths"
  },
  // Environmental
  {
    code: "XCARB",
    name: "Carbon Credits",
    issuer: "CR...",
    description: "Verified carbon removal units (VCRUs).",
    decimals: 7,
    type: "commodity",
    color: "#10B981",
    category: "Environmental",
    trending: true
  }
];
