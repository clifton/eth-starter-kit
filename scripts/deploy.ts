/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import { ethers } from 'hardhat';

async function main(): Promise<void> {
  const [deployer] = await ethers.getSigners();

  console.log('Deploying contracts with the account:', deployer.address);

  console.log('Account balance:', (await deployer.getBalance()).toString());

  const HardhatTokenFactory = await ethers.getContractFactory('HardhatToken');
  const token = await HardhatTokenFactory.deploy();

  console.log('Token address:', token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
