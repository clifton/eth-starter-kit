# ETH smart contract starter kit

## get started

tested with node.js v14

1. `npm install -g yarn`
2. `yarn install`
3. `npx hardhat compile`: generate typechain artifacts
4. `code .`: open in vs code
5. install recommended vscode extensions

## libraries

- typescript
  - typechain (types from compiled smart contracts)
  - eslint/solhint linting
  - prettier auto formatting
  - vscode defaults
- hardhat tools / devchain
- ethers
- waffle / chai testing

## usage

- compile: `npx hardhat compile`
- test: `npx hardhat test`
- deploy: `npx hardhat run script/deploy.ts`
- create your own scripts or smart contracts!

## sources

- [hardhat examples](https://hardhat.org/guides/waffle-testing.html)
- [mastering ethereum](https://github.com/ethereumbook/ethereumbook)
