import { pgTable, text, timestamp, integer, doublePrecision, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  address: text("address").notNull().unique(),
  kycLevel: integer("kyc_level").default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const kycRecords = pgTable("kyc_records", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id).notNull(),
  status: text("status").notNull(), // 'pending', 'approved', 'rejected'
  data: text("data"), // Encrypted or JSON blob
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const assetConfigs = pgTable("asset_configs", {
  id: uuid("id").defaultRandom().primaryKey(),
  code: text("code").notNull().unique(),
  issuer: text("issuer").notNull(),
  contractId: text("contract_id"),
  description: text("description"),
  decimals: integer("decimals").default(7).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const priceHistory = pgTable("price_history", {
  id: uuid("id").defaultRandom().primaryKey(),
  assetCode: text("asset_code").notNull(),
  price: doublePrecision("price").notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});
