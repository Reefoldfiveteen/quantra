import { expect } from "chai";
import { ethers } from "hardhat";

describe("QuantraStake", () => {
  it("deposit & withdraw flow", async () => {
    const [owner] = await ethers.getSigners();

    // ERC‑20 mock
    const Token = await ethers.getContractFactory("ERC20Mock");
    const token = await Token.deploy("Mock", "MOCK", owner.address, 1_000_000);

    const Stake = await ethers.getContractFactory("QuantraStake");
    const stake = await Stake.deploy(token.target);

    await token.approve(stake.target, 1000n);
    await stake.deposit(1000n);

    expect(await stake.balanceOf(owner.address)).to.equal(1000n);

    await stake.withdraw(400n);
    expect(await stake.balanceOf(owner.address)).to.equal(600n);
  });
});
