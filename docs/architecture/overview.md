# Architecture Overview

StellarCommodity is designed as a modular, production-grade platform for tokenizing real-world commodities.

## System Components

1.  **Frontend (Next.js 15):** A modern React application using Turbopack for fast builds and Tailwind v4 for styling. It provides the landing page, marketplace, and dashboard.
2.  **Smart Contracts (Soroban):** Three core contracts written in Rust:
    *   `commodity_token`: Handles the token logic (mint, burn, transfer, compliance).
    *   `oracle`: Manages price feeds for commodities.
    *   `compliance`: Maintains a registry of KYC-verified users.
3.  **API Layer:** Next.js Route Handlers provide SEP-compliant endpoints (SEP-0001, SEP-0010, SEP-0012) and internal utility APIs.
4.  **Database (Drizzle + Postgres):** Stores off-chain data such as user profiles, KYC status, and price history.

## Data Flow

1.  **Tokenization:** A user completes KYC -> Compliance contract registers the user -> User deposits funds -> Admin mints commodity tokens to user's address.
2.  **Trading:** Users trade tokens on the Stellar Decentralized Exchange (SDEX) or via atomic swaps.
3.  **Pricing:** The Oracle contract receives price updates from external sources -> Frontend queries the contract/API to display real-time prices.
