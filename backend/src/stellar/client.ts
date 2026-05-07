import { Horizon, Networks, rpc } from "@stellar/stellar-sdk";

const HORIZON_URL = process.env.NEXT_PUBLIC_HORIZON_URL || "https://horizon-testnet.stellar.org";
const SOROBAN_RPC_URL = process.env.NEXT_PUBLIC_SOROBAN_RPC_URL || "https://soroban-testnet.stellar.org";
const NETWORK_PASSPHRASE = process.env.NEXT_PUBLIC_STELLAR_NETWORK === "mainnet" 
  ? Networks.PUBLIC 
  : Networks.TESTNET;

export const horizonServer = new Horizon.Server(HORIZON_URL);
export const sorobanServer = new rpc.Server(SOROBAN_RPC_URL);

export const networkConfig = {
  horizonUrl: HORIZON_URL,
  sorobanRpcUrl: SOROBAN_RPC_URL,
  networkPassphrase: NETWORK_PASSPHRASE,
};
