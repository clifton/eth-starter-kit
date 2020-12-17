/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import { HardhatRuntimeEnvironment, HardhatUserConfig } from 'hardhat/types';
import { task } from 'hardhat/config';

import 'hardhat-typechain';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import { formatEther, isAddress } from 'ethers/lib/utils';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: '0.7.5' }],
  },
  networks: {
    hardhat: {},
    // https://faucet.metamask.io/
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
    //   accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
    // },
  },
};

task('balance', "Prints an account's balance")
  .addParam('account', "The account's address")
  .setAction(async ({ account }, hre: HardhatRuntimeEnvironment) => {
    if (!isAddress(account)) {
      console.log('invalid address:', account || 'none');
    } else {
      const balance = await hre.ethers.provider.getBalance(account);
      console.log('balance:', formatEther(balance), 'ETH');
    }
  });

// eslint-disable-next-line import/no-default-export
export default config;
