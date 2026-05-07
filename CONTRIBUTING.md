# 🤝 Contributing to StellarCommodity

Welcome to the **StellarCommodity** community! We are excited to have you here. This project is a production-grade, open-source infrastructure for tokenizing physical assets on the Stellar blockchain.

This project officially participates in the **Stellar Wave Program** powered by [Drips](https://drips.network). By contributing, you can earn rewards based on the complexity and impact of your work.

---

## 🌊 Stellar Wave Program

We use a point-based system to reward contributors. Each issue in our backlog is assigned a **Complexity Level** and a corresponding **Point Value**:

| Complexity | Points | Description |
| :--- | :--- | :--- |
| **Trivial** | 100 | Documentation fixes, small UI tweaks, or simple configuration. |
| **Medium** | 150 | Feature implementations, state management logic, or involved bug fixes. |
| **High** | 200 | Core smart contracts, security architecture, or complex backend integrations. |

### How to Participate
1.  **Find an Issue:** Browse our [GitHub Issues](https://github.com/stellar-wave/stellar-rwa-commodities/issues) and look for the `Wave: [Level]` labels.
2.  **Apply on Drips:** Navigate to the [Stellar Wave Program on Drips](https://drips.network/waves/stellar) and apply for the issue.
3.  **Wait for Assignment:** Once assigned by a maintainer, you can start working on the task.
4.  **Submit PR:** Submit your Pull Request before the Wave cycle ends (typically 7 days).
5.  **Earn Rewards:** Once your PR is merged, your points will be recorded for the current Wave's reward distribution.

---

## 🛠️ Development Guidelines

### Technical Stack
- **Frontend:** Next.js 15, React 19, Tailwind CSS v4, Framer Motion.
- **Backend:** NestJS, Prisma, PostgreSQL, Redis.
- **Smart Contracts:** Soroban SDK (Rust), Protocol 25/26.
- **Infrastructure:** Docker, Kubernetes, GitHub Actions.

### Code Quality Standards
- **TypeScript:** Use strict mode. Ensure all exported functions have TSDoc comments.
- **Rust:** Follow `clippy` suggestions. Ensure 100% test coverage for core logic.
- **CSS:** Use utility classes via Tailwind. Avoid inline styles or custom CSS files unless requested.
- **Security:** Never commit secrets. Use environment variables. Follow the "Checks-Effects-Interactions" pattern in contracts.

### Branching Strategy
We follow a structured branching convention:
- `feat/feature-name` — New features.
- `ui/component-name` — UI/UX improvements.
- `fix/issue-name` — Bug fixes.
- `contract/contract-name` — Smart contract logic.
- `sec/security-fix` — Security-related updates.

---

## 🚀 Pull Request Process

1.  **Fork & Clone:** Fork the repository and create your branch from `main`.
2.  **Atomic Commits:** Keep your commits small and descriptive.
3.  **Tests:** Ensure all existing tests pass and add new tests for your changes.
4.  **Documentation:** Update relevant documentation if your change introduces new functionality.
5.  **PR Template:** Fill out the Pull Request template completely, including the Issue number and complexity level.
6.  **Review:** Respond to reviewer feedback promptly. The Stellar Wave cycle moves fast!

---

## 📜 Code of Conduct

We are committed to providing a welcoming and inspiring community. Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the expectations for all participants.

---

## ⚖️ License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ for the <b>Stellar Wave</b> Program</sub>
</div>
