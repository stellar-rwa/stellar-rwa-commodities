# 🌌 StellarCommodity

<div align="center">

**Institutional-Grade Physical Asset Tokenization on the Stellar Blockchain**

[![License: MIT](https://img.shields.io/badge/License-MIT-C9A84C.svg?style=for-the-badge&logo=opensourceinitiative&logoColor=white)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.0-000000.svg?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Stellar SDK](https://img.shields.io/badge/Stellar_SDK-15.1.0-080B1A.svg?style=for-the-badge&logo=stellar&logoColor=white)](https://www.npmjs.com/package/@stellar/stellar-sdk)
[![Soroban](https://img.shields.io/badge/Soroban_SDK-25.3.1-7B3FE4.svg?style=for-the-badge&logo=rust&logoColor=white)](https://crates.io/crates/soroban-sdk)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.0-3178C6.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[**Explore Marketplace**](https://stellar-rwa-commodities.vercel.app/marketplace) • [**Developer Docs**](https://stellar-rwa-commodities.vercel.app/docs) • [**Security Policy**](SECURITY.md) • [**Contributing**](CONTRIBUTING.md)

</div>

---

## 💎 The Vision

**StellarCommodity** is a production-grade, open-source infrastructure designed to bridge the gap between physical commodity markets and decentralized finance. By leveraging the **Stellar Network** and **Soroban Smart Contracts**, we provide a high-throughput, low-latency, and sub-cent fee environment for trading tokenized Gold, Silver, Crude Oil, and Wheat.

> "Democratizing access to physical assets through blockchain-native transparency and instant settlement."

---

## 🏛️ Premium Architecture

The project is architected as a high-performance **Monorepo**, ensuring a strict separation of concerns while maintaining type safety across the entire stack.

```text
📦 stellar-rwa-commodities
 ┣ 📂 frontend             # Next.js 15 UI with Luxury Dark Aesthetics
 ┃ ┣ 📂 src/app            # App Router & Dynamic Asset Routing
 ┃ ┣ 📂 src/components     # Premium shadcn/ui + Framer Motion Components
 ┃ ┗ 📜 proxy.ts           # Next.js 16/17 Proxy Middleware
 ┣ 📂 backend              # Core Business Logic & Off-Chain Services
 ┃ ┣ 📂 src/api            # Centralized API Route Handlers
 ┃ ┣ 📂 src/db             # Drizzle ORM Schema & Migrations
 ┃ ┗ 📂 src/stellar        # Specialized Horizon & Soroban RPC Clients
 ┣ 📂 contracts            # Soroban Smart Contracts (Rust/WASM)
 ┃ ┣ 📂 commodity_token    # Mint, Burn, Freeze, and Clawback logic
 ┃ ┣ 📂 oracle             # Price Feed Aggregator & Staleness Checks
 ┃ ┗ 📂 compliance         # KYC/AML Registry and Authorization
 ┣ 📂 constants            # Shared Single-Source-of-Truth
 ┃ ┣ 📜 assets.ts          # Global Asset Configurations (XGLD, XSLV, etc.)
 ┃ ┗ 📜 types              # Unified TypeScript Interfaces
 ┣ 📂 docs                 # Technical Documentation & Issue Backlogs
 ┣ 📂 monitoring           # Prometheus Metrics & Grafana Dashboards
 ┣ 📂 scripts              # Deployment & DevOps Automation
 ┣ 📂 tests                # Integration & E2E Test Suites
 ┗ 📂 ui-design            # Design Tokens & Visual Documentation
```

---

## 🛠️ Technology Stack

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | Next.js 15 + React 19 | Server Components, Turbopack, and Concurrent Rendering. |
| **Styling** | Tailwind CSS v4 | Cutting-edge utility-first CSS with CSS-native `@theme`. |
| **Animation** | Framer Motion | Cinematic transitions and fluid micro-interactions. |
| **Blockchain** | Soroban Protocol 26 | Next-gen WASM smart contracts on Stellar. |
| **Database** | Vercel Postgres | Serverless SQL for high availability and low latency. |
| **ORM** | Drizzle ORM | Headless, type-safe, and incredibly lightweight. |
| **Auth** | Better-Auth | Modern, extensible authentication for Web3. |

---

## 🚀 Key Features

### 🌍 Real-World Asset (RWA) Tokenization
*   **Asset-Backed Security**: Direct mapping of physical inventory to blockchain tokens.
*   **Clawback & Freeze**: Full regulatory compliance via Stellar's native asset controls.
*   **Instant Settlement**: Move from T+2 to 5-second finality.

### 📊 Institutional Dashboard
*   **Real-Time Analytics**: Live price feeds integrated with Soroban Oracles.
*   **Transaction Lineage**: Transparent audit trails for every mint and burn event.
*   **Portfolio Management**: Comprehensive view of commodity holdings across the Stellar network.

### 🧪 Developer First
*   **Comprehensive SDK**: Reusable backend logic via the `@stellar-commodity/backend` package.
*   **Type-Safe APIs**: Zod-validated endpoints with consistent response envelopes.
*   **CI/CD Pipeline**: Automated Rust testing and Next.js builds.

---

## 🚦 Getting Started

### 1. Environment Setup
Clone the repository and install dependencies using `pnpm`:

```bash
git clone https://github.com/stellar-wave/stellar-rwa-commodities.git
cd stellar-rwa-commodities
pnpm install
```

### 2. Smart Contract Development
Build and test the Soroban contracts:

```bash
pnpm contracts:build
pnpm contracts:test
```

### 3. Application Execution
Launch the full monorepo in development mode:

```bash
pnpm dev
```

The application will be live at `http://localhost:3000`.

---

## 🗺️ Roadmap

- [x] **Phase 1: Foundation** — Reusable UI components & API scaffolding.
- [x] **Phase 2: Core Contracts** — `commodity_token` & `oracle` implementation.
- [ ] **Phase 3: Integration** — Real-time price feed connection & KYC flow.
- [ ] **Phase 4: Ecosystem** — SEP-24/SEP-31 Anchor integration for on/off ramps.

---

## 🤝 Contributing

We welcome contributors from all backgrounds! Whether you're fixing a bug in the Rust contracts or polishing the Framer Motion animations in the frontend, your input is valuable.

1.  Check the [**Issues**](https://github.com/stellar-wave/stellar-rwa-commodities/issues) for open tasks.
2.  Follow the [**Contribution Guidelines**](CONTRIBUTING.md).
3.  Submit a Pull Request using our [**Template**](.github/PULL_REQUEST_TEMPLATE.md).

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <br />
  <sub>Built for the <b>Stellar Wave</b> Open Source Program</sub>
</div>
