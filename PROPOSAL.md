# Smart Bitcoin Exchange

### https://sbx.cash

Author(s): Shomari (nyusternie)

![Smart Bitcoin Exchange Banner](https://sbx.cash/banner.jpg?1656705866)

# Introduction

__THE PROBLEM__

Since its inception, the trust & security of the SmartBCH network has layed in the hands of a single, for-profit company. Not only does that violate the very fabric of a decentralized network, it diminishes the confidence of the Builders who will need to investment their time, money and talent into this nascent network during its incubation.

> There are currently ~100K BCH being held by the current custodian of the SmartBCH treasury. In simple terms, $10MM would be the "bail-out" value to restore the SmartBCH network back to whole.

__THE SOLUTION__

The SmartBCH developers have brilliantly (pun intended) built-in a trustless Proof-of-Stake network of Validators directly into the protocol. These Validators have the most incentive and technical capability of managing the responsibility of custody for the network's assets; until a permanent solution is ready to be deployed on Mainnet.

> Our aim is to create a large network of "trusted" Validators that can scale to at least 100 participating nodes communicating over a low-latency private communications network.

This proposal aims to accomplish ALL of the following:

1. Organize a working group of developers to build a Smart Bitcoin Exchange (SBX).
2. Coordinate with active Validators to safely deploy the new SBX Server.
3. Coordinate with the current SBCH Treasury custodian to safely transfer the "escrowed" BCH into the SBX.
4. Work with current DEXs to integrate with the new network for BCH <=> SBCH asset exchanges.

> NOTE: SBX will charge a 0.1% base fee for each transaction to incentivize participation in the network.

## Smart Bitcoin Exchange (SBX)

SmartBCH currently utilizes a network of Validators to vote on each block in the network. As this network of Validators currently holds 50% of the voting power (the other 50% is held by miners), they are the MOST incentivized and technically capable group to engage in this scheme.

At the heart of SBX are a suite of smart contracts:
- SHA_Matrix_Exchange.cash (CashScript)
- SHA_Matrix_Exchange.sol (Solidity)
- SHA_Matrix_Treasury.sol (Solidity)
- SHA_Matrix_Gov.sol (Solidity)
- SBX.sol (Solidity)
- rvBCH.sol (Solidity)
- Bailout.sol (Solidity)

### SHA-Matrix Exchange (BCH)

This is a CashScript contract to "lock" the BCH that has been minted as SBCH within the SmartBCH sidechain.

### SHA-Matrix Exchange (SBCH)

This is a Solidity contract that effectively manages the network of trustees oversee the exchange.

### SHA-Matrix Treasury

This is a Solidity contract that serves as an assets vault for the Exchange contract. By separating the Treasury, it allows the Exchange contract to be updated with bug fixes and new features while guaranteeing that assets are always protected.

### SHA-Matrix Gov

A DAO contract to manage proposals and token voting.

### $SBX

The governance token for the exchange.

### $rvBCH

These are the "social debt" NFTs minted to represent the "locked" funds in the amount of 101,000 $BCH.

These tokens will be instantly redeemable for an equivalent amount of BCH from the SHA-Matrix.

### Bailout

This is a Solidity contract that manages the Treasury for the bailout funds. Including both the funds recovered from currently "locked" $BCH, plus the revenue generated from fees paid to the exchange.

> NOTE: The Owner of each of these (Solidity) contracts will be a Covenant of the TOP 15 Validators (by rating). The Owner of the CashScript contract will be a Covenant of the TOP 9 Validators (by rating). Rankings are updated each epoch (2016 blocks).

# Part I: Exchange Overview

The Smart Bitcoin Exchange (SBX) provides a (temporary) decentralized solution for the resposiblity of managing the sidechain's treasury. Eventaually, the SHA-Gate contract will be deployed to Mainnet and perform the task of bridging BCH <=> SBCH.

To establish trust in the network, participants will be limited to the active pool of XHedge Validators. These Validators possess the MOST incentive to secure the financial safety of the sidechain.

## Treasury

The exchange's Treasury is a smart contract (SHA_Matrix_Treasury.sol) that manages vaults for ANY form of crypto asset: SEP-20, SEP-721, SEP-1155 and the like.

## Validators

The active XHedge Validators will provide the security for the exchange.

# Part II: SHA-Matrix

As an alternative to the SHA-Gate v2 contract provided from the SmartBCH team, the SHA-Matrix is a community-run network of "trusted" individuals & teams with the technical capabilities to manage the resposibilities of the exchange.

# Part III: Discussion of Exchange Design

The ideal goal of the SBX would be to provide a central point of "trust" for the many independently run exchanges in the SmartBCH community.

## Communications

We propose that "on-chain" is always the preferred means of trustless & transparency. We propose an "on-chain" protocol to manage the transparent (at times encrypted) communications of the Validators participating in the exchange.

## SBX Server

A new Free and Open Source Software (FOSS) server will be developed to be run by the partipating Validators.

## Safety & Security

One of the main goals of the SHA-Matrix is to dramatically increase the number of participants involved in the protection of the SmartBCH sidechain.

Validators will be weighted and scored based on their:

1. Number of votes
2. Uptime realiability
3. peer ranking

### Number of votes

This number will be retrieved from the XHedge contract.

### Uptime reliability

Validators will be penalized for any server downtime.

### Peer ranking

Validators will rank each other, based on "off-chain" assessments determined by each time. Low-ranked Validators will be subject to additional (authoritative) restrictions by the network.

## Miner Participation

This exchange is based on Proof-of-Stake (POS) and therefore is independed of the Proof-of-Work (POW) network of miners currently securing Bitcoin Cash (BCH).

## Exchange Integration

SmartBCH already has several mature Decentralized Exchanges (DEXs) running on Mainnet. We aim to work with their teams to offer "native" integration to the SBX, with the help of:

1. REST-based API services
2. Custom software implementations
3. Governance planning & design

## 3rd-parties Using the Exchange

SBX is an open protocol that is available to be used by anyone without permission.

## Fees

The exchange earns 0.1% on every transaction. This fee will be deposited into the SBX Treasury.

PLEASE NOTE: During the "Bailout Phase", 100% of the exchange fees will be deposited into the Bailout treasury for distribution to $rvBCH token holders.

## Free and Open Source Software (FOSS)

In the spirit of full transparency, it's critical that the source code protecting the network be available to anyone and everyone who partipates in the network.

# Part IV: The Bailout

As of Friday, July 1st 2022, the condition of the "locked" $BCH funds securing the SmartBCH sidechain are in question. We propose to create a new "socialized" token to absorb the current debt incurred.

- [bitcoincash:qptplw8rl7r7nzmze8mnhrdc3guny3p2ng8vz443qu](https://blockchair.com/bitcoin-cash/address/qptplw8rl7r7nzmze8mnhrdc3guny3p2ng8vz443qu)
- 101,382.30027849 $BCH
- Valued at US$10,269,013.20

101,382 $rvBCH (Recovery Value) NFTs will be minted.

_(the token name is NOT final)_

The NFT collection will initially be reserved using the SBX website. $BCH received from the sale will be deposited directly into the SBX Treasury and returned (by participating XHedge Validators) in the event that the campaign is canceled or unsuccessful.

If the campaign is fully committed (Flipstarter-style), then the NFTs will be minted and become further tradeable on marketplaces like Oasis. Token holders will each be incentivized to encourage a timely resolution to the current treasury's condition.

During this recovery time, fees will be earned by the exchange and made available for redemption by ANY token holder.

All fees redeemed will remain with the token holder and the recovered funds will be redeemable pro-rata by each of the $rvBCH token holders.

Once ALL funds have been redeemed, no more Exchange fees will be sent to the Bailout contract.

> NOTE: At the constant rate of 0.1% for transaction fees, it will take $10B in transactions to recover the full cost of the "original" treasury.

- [0x8c4F85ec71C966e45A6F4291f5271f8114a7Ba15](https://sonar.cash/address/0x8c4F85ec71C966e45A6F4291f5271f8114a7Ba15/transactions)
- 20,898,320.909516495688680872 $SBCH
- Valued at US$2,115,328,042

These funds should immediately be blocked and forked back to a "trusted" custodian (eg. SmartBCH team) until the SBX Treasury is ready to receive the funds and resume bridge activities.
