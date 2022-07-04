// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

/*******************************************************************************
 *
 * Copyright (c) 2022 Smart Bitcoin Exchange
 * Released under the MIT License.
 *
 * SHA-Matrix Treasury - A secure vault to hold ALL assets held by the SBX
 *                       and managed by the XHedge Validators.
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
 * @notice SHA-Matrix Treasury
 *
 * @dev This ...
 */
contract SHA_Matrix_Treasury is Owned {
    // TODO

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
