import { ethers } from "hardhat";

async function main() {
  const tokenAddress = "0xYOUR_TESTNET_STABLECOIN";  // ganti nanti
  const Stake = await ethers.getContractFactory("QuantraStake");
  const stake = await Stake.deploy(tokenAddress);
  console.log("QuantraStake deployed to:", stake.target);
}
export default main;
