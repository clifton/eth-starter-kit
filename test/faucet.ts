import { ethers } from 'hardhat';
import { expect, use } from 'chai';
import chaiAsPromised from 'chai-as-promised';
import { solidity } from 'ethereum-waffle';
import { BigNumber } from 'ethers';
import { parseEther } from 'ethers/lib/utils';
import { Faucet, Faucet__factory } from '../typechain-types';

use(solidity);
use(chaiAsPromised);

describe('Faucet', async () => {
  const [signer, wallet] = await ethers.getSigners();

  async function createFaucet(initialBalance: BigNumber): Promise<Faucet> {
    const FaucetFactory: Faucet__factory = (await ethers.getContractFactory(
      'Faucet',
      signer
    )) as never;
    const faucet = await FaucetFactory.deploy();
    await wallet.sendTransaction({
      to: faucet.address,
      value: initialBalance,
    });
    return faucet;
  }

  it('withdraws to a wallet', async () => {
    const faucet = await createFaucet(parseEther('100'));
    const amount = parseEther('0.05');
    expect(
      await faucet.connect(wallet).withdraw(amount)
    ).to.changeEtherBalances([faucet, wallet], [amount.mul(-1), amount]);
  });

  it('does not withdraw more than max', async () => {
    const faucet = await createFaucet(parseEther('100'));
    const amount = parseEther('.11');
    await expect(faucet.connect(wallet).withdraw(amount)).to.be.reverted;
  });

  it('can not withdraw bogus amounts', async () => {
    const faucet = await createFaucet(parseEther('100'));
    await expect(faucet.connect(wallet).withdraw(parseEther('1000000'))).to.be
      .reverted;
    await expect(faucet.connect(wallet).withdraw(parseEther('-0.05'))).to.be
      .reverted;
  });
});
