import { ethers } from 'hardhat';
import { expect, use } from 'chai';
import { solidity } from 'ethereum-waffle';
import { HardhatToken } from '../typechain';

use(solidity);

describe('HardhatToken contract', () => {
  it('Deployment should assign the total supply of tokens to the owner', async () => {
    const [owner] = await ethers.getSigners();

    const HardhatTokenFactory = await ethers.getContractFactory('HardhatToken');

    const hardhatToken = (await HardhatTokenFactory.deploy()) as HardhatToken;

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
