#![no_std]
use soroban_sdk::{contract, contractimpl, Address, Env, String, Vec};

#[contract]
pub struct Oracle;

#[contractimpl]
impl Oracle {
    pub fn update_price(env: Env, asset_code: String, price: i128, timestamp: u64) {
        todo!()
    }

    pub fn get_price(env: Env, asset_code: String) -> i128 {
        0
    }
}
