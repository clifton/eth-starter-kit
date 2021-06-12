// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import 'hardhat/console.sol';

contract Counter {
    uint256 private count = 0;

    event CountedTo(uint256 number);

    function getCount() public view returns (uint256) {
        return count;
    }

    function countUp() public returns (uint256) {
        // console.log('countUp: count=', count);
        uint256 newCount = count + 1;
        require(newCount > count, 'uint256 overflow');
        count = newCount;
        emit CountedTo(count);
        return count;
    }

    function countDown() public returns (uint256) {
        // console.log('countDown: count=', count);
        require(count > 0, 'count must be greater than 0');
        uint256 newCount = count - 1;
        require(newCount < count, 'uint256 underflow');
        count = newCount;
        emit CountedTo(count);
        return count;
    }
}
