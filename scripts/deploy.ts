/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-console */
import { ethers } from 'hardhat';

async function main(): Promise<void> {
  const factory = await ethers.getContractFactory('Counter');

  // If we had constructor arguments, they would be passed into deploy()
  const contract = await factory.deploy();

  // The address the Contract WILL have once mined
  console.log('counter address:', contract.address);

  // The transaction that was sent to the network to deploy the Contract
  console.log('deploy transaction:', contract.deployTransaction.hash);

  // The contract is NOT deployed yet; we must wait until it is mined
  await contract.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
