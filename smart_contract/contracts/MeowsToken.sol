//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

//Utility Methods
library SafeMath {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}

//Meows Token contract interfaces
interface MERC20 {
    function getAddress() external view returns(address);
    function totalSupply() external view returns(uint256);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);

    function transfer(address recipient, uint256 amount) external returns (bool);
    function approve(address owner, address spender, uint256 amount) external returns (bool);
    function transferForm(address sender, address recipient, uint256 amount) external returns (bool);

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spander, uint256 value);
}

/**
 Meows Token contract implements
    symbol: MEOWS
    decimals: 0
    totalSupply: 10000000000
*/
contract ERC20Basic is MERC20 {

    string public constant name = "Meows Token";
    string public constant symbol = "MEOWS";
    uint8 public constant decimals = 0;

    mapping(address => uint256) balances;
    mapping(address => mapping (address => uint256)) allowed;

    uint256 totalSupply_ = 10000000000;

    using SafeMath for uint256;

    constructor() {
        balances[msg.sender] = totalSupply_;
    }

    function getAddress() public override view returns(address) {
        return address(this);
    }

    function totalSupply() public override view returns(uint256) {
        return totalSupply_;
    }

    function balanceOf(address tokenOwner) public override view returns (uint256) {
        return balances[tokenOwner];
    }

    function transfer(address receiver, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(numTokens);
        balances[receiver] = balances[receiver].add(numTokens);
        emit Transfer(msg.sender, receiver, numTokens);
        return true;
    }

    function approve(address owner, address delegate, uint256 numTokens) public override returns (bool) {
        allowed[owner][delegate] = numTokens;
        emit Approval(owner, delegate, numTokens);
        return true;
    }

    function allowance(address owner, address delegate) public override view returns (uint) {
        return allowed[owner][delegate];
    }

    function transferForm(address owner, address buyer, uint256 numTokens) public override returns (bool) {
        require(numTokens <= balances[owner]);
        require(numTokens <= allowed[owner][msg.sender]);

        balances[owner] = balances[owner].sub(numTokens);
        allowed[owner][buyer] = allowed[owner][buyer].sub(numTokens);
        balances[buyer] = balances[buyer].add(numTokens);
        emit Transfer(owner, buyer, numTokens);
        return true;
    }
}

/**
    buy()/sell():
        A simple DEX only for MEOWS and ETH
        with fixed exchange(buy and sell) rate:  1 ETH = 100K MEOWS/1 MEOWS = 0.00001 ETH

    mining():
        pay the gas fees around 0.0001 ETH
        mining MEOWS from 1 - 20 
 */
contract MEOWS {

    event Bought(uint256 amount);
    event Sold(uint256 amount);

    MERC20 public token;

    constructor() {
        token = new ERC20Basic();
    }

    function buy() payable public {
        uint256 amountTobuy = msg.value * 100000 / 1 ether;
        uint256 dexBalance = token.balanceOf(address(this));
        require(amountTobuy >= 1, "You need to buy at least 1 MEOWS.");
        require(amountTobuy <= dexBalance, "Not enough tokens in the reserve.");
        token.transfer(msg.sender, amountTobuy);
        emit Bought(amountTobuy);
    }

    function sell(uint256 amount) payable public {
        require(amount > 0, "You need to sell at least 1 MEOWS.");
        uint256 allowance = token.allowance(msg.sender, address(this));
        require(allowance >= amount, "Check the token allowance.");
        token.transferForm(msg.sender, address(this), amount);
        payable(msg.sender).transfer(amount * 1 ether / 100000);
        emit Sold(amount);
    }

    function getDexBalance() public view returns(uint256) {
        return token.balanceOf(address(this));
    }

    function getOwnerBalance() public view returns(uint256) {
        return token.balanceOf(msg.sender);
    }

    function getAddress() public view returns(address) {
        return address(this);
    }

    function getTokenAddress() public view returns(address) {
        return token.getAddress();
    }

    function getTotalSupply() public view returns(uint256) {
        return token.totalSupply();
    }

    function getSenderAddress() public view returns(address) {
        return address(msg.sender);
    }

    function getAllowance() public view returns(uint256) {
        uint256 allowance = token.allowance(msg.sender, address(this));
        return allowance;
    }

    function approve(uint256 amount) public returns(bool) {
        bool isApprove = token.approve(msg.sender,address(this),amount);
        return isApprove;
    }

    function mining() payable public {
        uint256 _length = 20;
        uint256 randomAmount = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % _length;
        token.transfer(msg.sender, randomAmount);
    }
}