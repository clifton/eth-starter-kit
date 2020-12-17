import { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: '0.7.5' }],
  },
  networks: {
    hardhat: {},
    networks: {
      // https://faucet.metamask.io/
      // ropsten: {
      //   url: `https://ropsten.infura.io/v3/${INFURA_PROJECT_ID}`,
      //   accounts: [`0x${ROPSTEN_PRIVATE_KEY}`],
      // },
    },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
