import { expect, use } from 'chai';
import { deployContract, MockProvider, solidity } from 'ethereum-waffle';
import { parseEther } from 'ethers/lib/utils';
import { BigNumber, Wallet } from 'ethers';
import { Faucet } from '../typechain/Faucet';
import FaucetFactory from '../artifacts/contracts/Faucet.sol/Faucet.json';

use(solidity);

describe('Faucet', () => {
  let provider: MockProvider;
  let wallet: Wallet;

  async function createFaucet(initialBalance: BigNumber): Promise<Faucet> {
    const signer = provider.getSigner();
    const faucet = (await deployContract(signer, FaucetFactory)) as Faucet;
    await wallet.sendTransaction({
      to: faucet.address,
      value: initialBalance,
    });
    return faucet;
  }

  beforeEach(async () => {
    provider = new MockProvider();
    [wallet] = provider.getWallets();
  });

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
