import { Asset } from "@stellar/stellar-sdk";
import { COMMODITY_ASSETS } from "@stellar-commodity/constants";

export function getStellarAsset(code: string) {
  const config = COMMODITY_ASSETS.find(a => a.code === code);
  if (!config) throw new Error(`Asset ${code} not found in config`);
  
  if (config.issuer === "G..." || !config.issuer) {
    // For local dev/testing if issuer not set
    return Asset.native();
  }
  
  return new Asset(config.code, config.issuer);
}

export function getAllStellarAssets() {
  return COMMODITY_ASSETS.map(a => getStellarAsset(a.code));
}
