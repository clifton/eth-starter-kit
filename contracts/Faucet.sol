// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.7.5;

// from "Mastering Ethereum"
contract Faucet {
    address payable public owner;
    event Withdrawal(address indexed to, uint256 amount);
    event Deposit(address indexed from, uint256 amount);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner, 'can only be called by owner');
        _;
    }

    function withdraw(uint256 amount) public {
        require(amount <= 0.1 ether, 'amount must be less than .1 eth');
        require(
            address(this).balance >= amount,
            'Insufficient balance in faucet for withdrawal request'
        );

        msg.sender.transfer(amount);
        emit Withdrawal(msg.sender, amount);
    }

    function destroy() public onlyOwner {
        selfdestruct(owner);
    }

    receive() external payable {
        emit Deposit(msg.sender, msg.value);
    }
}
