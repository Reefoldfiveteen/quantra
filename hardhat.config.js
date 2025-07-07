import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config = /** @type {HardhatUserConfig} */ ({
  solidity: "0.8.20",
  networks: {
    // contoh testnet; tambahkan ENV key via repo Secrets kalo mau deploy
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_KEY}",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
});
export default config;
