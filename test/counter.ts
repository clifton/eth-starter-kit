import { ethers } from 'hardhat';
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { solidity } from 'ethereum-waffle';
import { Counter, Counter__factory } from '../typechain-types';

use(solidity);
use(chaiAsPromised);

describe('Counter', (): void => {
  let counter: Counter;
  beforeEach(async () => {
    // 1
    const signers = await ethers.getSigners();
    // 2
    const counterFactory: Counter__factory = (await ethers.getContractFactory(
      'Counter',
      signers[0]
    )) as never;
    counter = await counterFactory.deploy();
    await counter.deployed();
    const initialCount = await counter.getCount();
    // 3
    expect(initialCount).to.eq(0);
    expect(counter.address).to.be.properAddress;
  });
  // 4
  describe('count up', async () => {
    it('should count up', async () => {
      await counter.countUp();
      const count = await counter.getCount();
      expect(count).to.eq(1);
    });
  });
  describe('count down', async () => {
    // 5
    it('should fail', async () => {
      // this test will fail
      await expect(counter.countDown()).to.be.reverted;
    });
    it('should count down', async () => {
      await counter.countUp();
      await counter.countDown();
      const count = await counter.getCount();
      expect(count).to.eq(0);
    });
  });
});
