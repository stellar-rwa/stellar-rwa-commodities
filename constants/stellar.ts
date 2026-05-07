export const stellarConfig = {
  network: process.env.NEXT_PUBLIC_STELLAR_NETWORK || "testnet",
  horizonUrl: process.env.NEXT_PUBLIC_HORIZON_URL || "https://horizon-testnet.stellar.org",
  sorobanRpcUrl: process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || "https://soroban-testnet.stellar.org",
  contracts: {
    commodityToken: process.env.NEXT_PUBLIC_COMMODITY_TOKEN_CONTRACT_ID,
    oracle: process.env.NEXT_PUBLIC_ORACLE_CONTRACT_ID,
    compliance: process.env.NEXT_PUBLIC_COMPLIANCE_CONTRACT_ID,
  },
  issuers: {
    main: "G...",
  }
};
