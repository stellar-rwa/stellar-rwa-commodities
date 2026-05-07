# Security Policy

## Supported Versions

Currently, the following versions of StellarCommodity are supported with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of StellarCommodity seriously. If you believe you have found a security vulnerability, please report it to us by following these steps:

1. **Do not open a public issue.**
2. Email the vulnerability details to security@stellarcommodity.org.
3. Include as much information as possible, including steps to reproduce and the potential impact.

We will acknowledge your report within 48 hours and provide a timeline for resolution. We follow a coordinated disclosure policy.

## Security Controls

- **Role-Based Access Control (RBAC)**: All smart contracts implement strict RBAC for sensitive operations (minting, burning, freezing).
- **Sanitization**: All API inputs are validated using `zod` to prevent injection attacks.
- **Dependency Audits**: We run automated security scans on all NPM and Cargo dependencies.
