import { HardhatUserConfig } from 'hardhat/types';

import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';

const config: HardhatUserConfig = {
  solidity: {
    compilers: [{ version: '0.7.5' }],
  },
  networks: {
    hardhat: {},
    // rinkeby: {
    //   url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
    //   accounts: [RINKEBY_PRIVATE_KEY],
    // },
  },
};

// eslint-disable-next-line import/no-default-export
export default config;
