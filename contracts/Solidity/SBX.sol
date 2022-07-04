// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*******************************************************************************
 *
 * Copyright (c) 2022 Smart Bitcoin Exchange
 * Released under the MIT License.
 *
 * SBX - Smart Bitcoin Exchange SEP-20 token.
 *
 * Version 22.7.1
 *
 * https://sbx.cash
 * support@sbx.cash
 */


/*******************************************************************************
 *
 * ERC Token Standard #20 Interface
 * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
 */
interface ERC20Interface {
    function totalSupply() external view returns (uint);
    function balanceOf(address tokenOwner) external view returns (uint balance);
    function allowance(address tokenOwner, address spender) external view returns (uint remaining);
    function transfer(address to, uint tokens) external returns (bool success);
    function approve(address spender, uint tokens) external returns (bool success);
    function transferFrom(address from, address to, uint tokens) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}


/*******************************************************************************
 *
 * ApproveAndCallFallBack
 *
 * Contract function to receive approval and execute function in one call
 * (borrowed from MiniMeToken)
 */
interface ApproveAndCallFallBack {
    function receiveApproval(
        address from,
        uint256 tokens,
        address token,
        bytes calldata data
        ) external;
}


/*******************************************************************************
 *
 * Owned contract
 */
contract Owned {
    address public owner;
    address public newOwner;

    event OwnershipTransferred(address indexed _from, address indexed _to);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        newOwner = _newOwner;
    }

    function acceptOwnership() public {
        require(msg.sender == newOwner);

        emit OwnershipTransferred(owner, newOwner);

        owner = newOwner;

        newOwner = address(0);
    }
}


/*******************************************************************************
 *
 * @notice Smart Bitcoin Exchange Token
 *
 * @dev This is a standard ERC20 token contract with a few additional public
*       descriptors:
 *          - name
 *          - symbol
 *          - title
 */
contract SBX is ERC20Interface, Owned {
    string public symbol;
    string public name;
    uint8  public decimals;
    uint   public _totalSupply;

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    /***************************************************************************
     *
     * Constructor
     */
    constructor() {
        symbol          = 'SBX';
        name            = 'Smart Bitcoin Exchange';
        decimals        = 18;
        _totalSupply    = 21 * 2**18; // initial supply of 21M SBX
        balances[owner] = _totalSupply;

        emit Transfer(address(0), owner, _totalSupply);
    }

    /***************************************************************************
     *
     * Total supply
     */
    function totalSupply() override public view returns (uint) {
        return _totalSupply - balances[address(0)];
    }

    /***************************************************************************
     *
     * Get the token balance for account `tokenOwner`
     */
    function balanceOf(
        address tokenOwner
    ) override public view returns (
        uint balance
    ) {
        return balances[tokenOwner];
    }

    /***************************************************************************
     *
     * Transfer the balance from token owner's account to `to` account
     * - Owner's account must have sufficient balance to transfer
     * - 0 value transfers are allowed
     */
    function transfer(
        address to,
        uint tokens
    ) override public returns (
        bool success
    ) {
        balances[msg.sender] = balances[msg.sender] - tokens;
        balances[to] = balances[to] + tokens;

        emit Transfer(msg.sender, to, tokens);

        return true;
    }

    /***************************************************************************
     *
     * Token owner can approve for `spender` to transferFrom(...) `tokens`
     * from the token owner's account
     *
     * https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20-token-standard.md
     * recommends that there are no checks for the approval double-spend attack
     * as this should be implemented in user interfaces
     */
    function approve(
        address spender,
        uint tokens
    ) override public returns (
        bool success
    ) {
        allowed[msg.sender][spender] = tokens;

        emit Approval(msg.sender, spender, tokens);

        return true;
    }

    /***************************************************************************
     *
     * Transfer `tokens` from the `from` account to the `to` account.
     *
     * The calling account must already have sufficient tokens approve(...)-d
     * for spending from the `from` account and:
     *     - From account must have sufficient balance to transfer
     *     - Spender must have sufficient allowance to transfer
     *     - 0 value transfers are allowed
     */
    function transferFrom(
        address from,
        address to,
        uint tokens
    ) override public returns (
        bool success
    ) {
        balances[from] = balances[from]- tokens;
        allowed[from][msg.sender] = allowed[from][msg.sender] - tokens;
        balances[to] = balances[to] + tokens;

        emit Transfer(from, to, tokens);

        return true;
    }

    /***************************************************************************
     *
     * Returns the amount of tokens approved by the owner that can be
     * transferred to the spender's account
     */
    function allowance(
        address tokenOwner,
        address spender
    ) override public view returns (
        uint remaining
    ) {
        return allowed[tokenOwner][spender];
    }

    /***************************************************************************
     *
     * Token owner can approve for `spender` to transferFrom(...) `tokens`
     * from the token owner's account. The `spender` contract function
     * `receiveApproval(...)` is then executed
     */
    function approveAndCall(
        address spender,
        uint tokens,
        bytes calldata data
    ) public returns (
        bool success
    ) {
        allowed[msg.sender][spender] = tokens;

        emit Approval(msg.sender, spender, tokens);

        ApproveAndCallFallBack(spender).receiveApproval(
            msg.sender,
            tokens,
            address(this),
            data
        );

        return true;
    }

    // TODO Add safemath
    function mint(
        address recipient,
        uint256 amount
    ) public onlyOwner {
        require(msg.sender == owner);

        require(_totalSupply + amount >= _totalSupply); // Overflow check

        _totalSupply += amount;

        balances[recipient] += amount;

        emit Transfer(address(0), recipient, amount);
    }

    // TODO Add safemath
    function burn(
        uint256 amount
    ) public onlyOwner {
        require(amount <= balances[msg.sender]);

        _totalSupply -= amount;

        balances[msg.sender] -= amount;

        emit Transfer(msg.sender, address(0), amount);
    }

    /***************************************************************************
     *
     * DO NOT ACCEPT ETH
     */
    receive () external payable {
        revert();
    }

    /***************************************************************************
     *
     * Owner can transfer out any accidentally sent ERC20 tokens
     */
    function transferAnyERC20Token(
        address tokenAddress,
        uint tokens
    ) external onlyOwner returns (
        bool success
    ) {
        return ERC20Interface(tokenAddress).transfer(owner, tokens);
    }
}
