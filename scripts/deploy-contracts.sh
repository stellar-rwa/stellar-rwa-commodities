#!/bin/bash

# Navigate to contracts directory
cd contracts

# Build all contracts
echo "Building contracts..."
stellar contract build

# Deploy individual contracts
echo "Deploying commodity_token..."
stellar contract deploy \
  --wasm target/wasm32v1-none/release/commodity_token.wasm \
  --source alice \
  --network testnet

echo "Deploying oracle..."
stellar contract deploy \
  --wasm target/wasm32v1-none/release/oracle.wasm \
  --source alice \
  --network testnet

echo "Deploying compliance..."
stellar contract deploy \
  --wasm target/wasm32v1-none/release/compliance.wasm \
  --source alice \
  --network testnet

echo "Deployment complete."
