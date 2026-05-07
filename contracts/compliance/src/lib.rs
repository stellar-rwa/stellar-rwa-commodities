#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env};

#[contract]
pub struct Compliance;

#[contractimpl]
impl Compliance {
    pub fn register_kyc(env: Env, account: Address, level: u32) {
        todo!()
    }

    pub fn is_authorized(env: Env, account: Address) -> bool {
        true
    }
}
