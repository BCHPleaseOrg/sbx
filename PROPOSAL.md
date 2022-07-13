# PROPOSAL: Smart Bitcoin Exchange (SBX) — A "Smart" Bailout Plan

> _Author(s): __Shomari__ ([nyusternie](https://twitter.com/ShomariPrince)) • ([join us](https://join.slack.com/t/bchplease/shared_invite/zt-e7jj03j5-vJbe47kNrPBjTgTXwLNRkA))_  
_Source: https://gitlab.com/bchplease/sbx/-/blob/master/PROPOSAL.md_  
_Last updated: __Thursday, July 7th 2022___

### ↳ https://sbx.cash

Introducing a __distributed Proof-of-Stake (dPOS)__ network of SmartBCH stakeholders tasked with effectively managing the SmartBCH bridge using a suite of trustless, Free and Open Source Software (FOSS) smart contracts. This __Federation of [XHedge Validators](https://xhedge.cash/validators)__ will voluntarily run the newly developed __SBX Manager__ on their respective _network of nodes_, offering a wide selection of decentralized Bitcoin Cash &amp; SmartBCH services, namely:

1. __Cross-chain coin transfers —__ eg. $BCH to $SBCH to $WETH to $WAVAX
2. __Cross-chain NFT minting &amp; burning —__ eg. BAYC, CryptoPunks, Clementine's, etc.
3. __Gas Stations —__ ie. gas-free SEP-20 &amp; SEP-721 _(meta)_ transactions
4. __Price Oracles__
5. __Token Mining__
6. and more...

## A "Smart" Bailout Plan

### ↳ https://docs.sbx.cash/bailout

This is an emergency proposal to mint a __NEW $SBX token__ to fully "socialize" the outstanding debt of the __~101K $BCH (valued at ~$10M)__ currently "locked" and made unavailable by the "original" SmartBCH Treasury's custodian.

> __$SBX _(Bailout)_ holders will receive a share of ALL exchange fees _(0.1%)_,  
PAID OUT DAILY, until the _(Bailout)_ contract expires.__

## SBX Featured Resource Links

__↳ https://docs.sbx.cash__ _(documentation)_

__↳ https://canvas.sbx.cash__ _(lean canvas)_

__↳ https://plan.sbx.cash__ _(business plan)_

__↳ https://flipstarter.sbx.cash__ _(mvp + bootstrapping campaign)_

__↳ https://gitlab.com/bchplease/sbx__ _(open-source code)_

# Disclaimer

__This alpha project is very early in its lifecycle.__ It will evolve rapidly over the coming weeks and months. Until we achieve our first mature release, we are not committed to preserving backwards compatibility. Buttons may be moved or removed in future versions.

> __Please take note! —__ We wanted to get this software in your hands as quickly as possible, so it's __releasing before it's "complete"__. Bug reports and feedback on future directions are appreciated and encouraged! That said, we have __LOTS__ planned and many new features are on the way.

![SBX Logo](https://sbx.cash/logo-256.png)

# Introduction

### THE PROBLEM

Since its inception, the trust & security of the SmartBCH sidechain has laid in the hands of a single, for-profit company. Not only does that violate the very fabric of a decentralized network, it diminishes the confidence of the Builders who need to invest their time, money and talent into this nascent network during its incubation period.

> __Did you know? —__ There are currently __~101K $BCH__ being held by the "original" custodian of the SmartBCH treasury. In simple terms, __$10M__ would be the total "Bailout" required to restore the SmartBCH sidechain 100% back to whole.

__THE SOLUTION__

The SmartBCH developers have brilliantly _(pun intended)_ built-in a trustless Proof-of-Stake network of [__XHedge Validators__](https://xhedge.cash/validators) directly into the protocol. These Validators have the most incentive and technical capability of managing the responsibility of custody for the network's assets; until a permanent solution is ready to be deployed on Mainnet.

---

### TL;DR — The goal of this initiative is to create a Federation of [XHedge Validators](https://xhedge.cash/validators) _(scalable to at least 100+ participating nodes)_ connected over a low-latency, decentralized, P2P communications network with the responsibility of managing the SmartBCH Cross-chain Asset Bridge.

---

### This proposal aims to accomplish ALL of the following:

1. Organize a working group of developers to build a Smart Bitcoin Exchange (SBX).
2. Coordinate with active Validators to safely deploy the all-NEW SBX Manager.
3. Coordinate with the current $SBCH Treasury custodian to safely transfer the "escrowed" $BCH into the Exchange's treasury.
4. Work with current DEXs _(and other service providers)_ to integrate with the new network for decentralized $BCH <=> $SBCH asset exchanges.

![Smart Bitcoin Exchange Banner](https://sbx.cash/banner.jpg?1656705866)

## Smart Bitcoin Exchange (SBX)

> __!! WARNING !! WARNING !! WARNING !!__  
This project is still under active development and __MUST__ be regarded as __ALPHA__ software. It will evolve rapidly over the coming weeks and months. However, until we achieve our first "beta" release, we are not committed to preserving backwards compatibility. Buttons may be moved or removed in future versions.  
__!! USE AT YOUR OWN RISK !!__

SmartBCH currently utilizes a network of Validators to vote on each block in the network. As this network of Validators currently holds 50% of the voting power _(the other 50% is held by miners)_, they are the MOST incentivized and technically capable group to engage in this scheme.

### A suite of smart contracts will be deployed to manage the Exchange:

↳ [__SHA_Matrix_Exchange.cash__](https://gitlab.com/bchplease/sbx/-/blob/master/contracts/CashScript/SHA_Matrix_Exchange.cash) _(CashScript)_  
↳ [__SHA_Matrix_Exchange.sol__](https://gitlab.com/bchplease/sbx/-/blob/master/contracts/Solidity/SHA_Matrix_Exchange.sol) _(Solidity)_  
↳ [__SHA_Matrix_Treasury.sol__](https://gitlab.com/bchplease/sbx/-/blob/master/contracts/Solidity/SHA_Matrix_Treasury.sol) _(Solidity)_  
↳ [__SHA_Matrix_Gov.sol__](https://gitlab.com/bchplease/sbx/-/blob/master/contracts/Solidity/SHA_Matrix_Gov.sol) _(Solidity)_  
↳ [__SBX.sol__](https://gitlab.com/bchplease/sbx/-/blob/master/contracts/Solidity/SBX.sol) _(Solidity)_  
↳ [__Bailout.sol__](https://gitlab.com/bchplease/sbx/-/blob/master/contracts/Solidity/Bailout.sol) _(Solidity)_

> __Did you know? —__ The Bailout contract will be active during the daily ~$10M debt repayments. The contract will automatically expire after the full debt is repaid and/or ALL "escrowed" $BCH are released from the former SmartBCH Treasury custodian and deposited into the SBX Treasury.

### SHA-Matrix Exchange ($BCH)

This is a CashScript contract to "lock" the $BCH that has been minted as $SBCH within the SmartBCH sidechain.

### SHA-Matrix Exchange ($SBCH)

This is a Solidity contract that effectively manages the network of trustees overseeing the Exchange.

### SHA-Matrix Treasury

This is a Solidity contract that serves as a __Multi-tenant Secure Assets Vault__ for the Exchange's (Solidity) contracts. By separating the Treasury, it allows the Exchange's contracts to be upgraded with bug fixes and new features, while guaranteeing that assets ALWAYS remain SAFU!

### SHA-Matrix Gov

[ [___see the documentation___](https://docs.sbx.cash/gov) ]

### $SBX

[ [___see the documentation___](https://docs.sbx.cash/sbx) ]

### Bailout

This is a Solidity contract that manages the Treasury for the _(Bailout)_ funds. This includes both the funds recovered from currently "locked" $BCH, plus the revenue generated from fees paid to the Exchange.

> __Did you know? —__ The Owner of each of these (Solidity) contracts will be a Covenant of the __TOP 15 Validators__ (by rating). The Owner of the CashScript contract will be a Covenant of the __TOP 9 Validators__ (by rating). Rankings are updated each epoch (2016 blocks).

# Part I: Exchange Overview

The Smart Bitcoin Exchange (SBX) provides a (temporary) decentralized solution for the resposiblity of managing the sidechain's treasury. Eventaually, the SHA-Gate contract will be deployed to Mainnet and perform the task of bridging $BCH <=> $SBCH.

To establish trust in the network, participants will be limited to the active pool of [__XHedge Validators__](https://xhedge.cash/validators). These Validators possess the MOST incentive to secure the financial safety of the sidechain.

## Treasury

The exchange's Treasury is a smart contract ([__SHA_Matrix_Treasury.sol__](https://gitlab.com/bchplease/sbx/-/blob/master/contracts/Solidity/SHA_Matrix_Treasury.sol)) that manages vaults for ANY form of crypto asset:
- SEP-20
- SEP-721
- SEP-1155
- and more..

## Validators

The active [__XHedge Validators__](https://xhedge.cash/validators) provide the highest level of trust &amp; security for the exchange.

# Part II: SHA-Matrix

As an alternative to the [__SHA-Gate v2 contract__](https://smartbch.medium.com/the-plan-for-sha-gate-v2-1f1567f08db0) provided from the SmartBCH team, the SHA-Matrix is a community-run network of "trusted" individuals & teams with the technical capabilities to manage the responsibilities of the Exchange.

# Part III: Discussion of Exchange Design

The ideal goal of the SBX would be to serve as central Clearing House and a point of "trust" for the many independently run Services in the Bitcoin Cash and SmartBCH communities.

## Communications

We propose that "on-chain" is always the preferred means of trustless & transparency. We propose an "on-chain" protocol to manage the transparent (at times encrypted) communications of the Validators participating in the exchange.

OrbitDB will also be used as a low-latency, peer-to-peer channel for specific tasks.

## SBX Manager

A new Free and Open Source Software (FOSS) Manager will be developed to be run by the participating Validators.

![Demo Video](https://sbx.cash/demo.gif)

## Safety & Security

One of the main goals of the SHA-Matrix is to dramatically increase the number of participants involved in the protection of the SmartBCH sidechain.

Validators will be weighted and scored based on their:

1. Number of votes
2. Up-time reliability
3. Peer ranking

### Number of votes

This number will be retrieved from the XHedge contract.

### Up-time reliability

Validators will be penalized during any server downtime.

### Peer ranking

Validators will rank each other, based on "off-chain" assessments determined by each time. Low-ranked Validators will be subject to additional (authoritative) restrictions by the network.

## Miner Participation

This exchange is based on Proof-of-Stake (POS) and therefore is independent of the Proof-of-Work (POW) network of miners currently securing Bitcoin Cash.

## Exchange Integration

SmartBCH already has several mature Decentralized Exchanges (DEXs) running on Mainnet. We aim to work with their teams to offer "native" integration to the SBX, with the help of:

1. REST-based API services
2. Custom software implementations
3. Governance planning & design

## 3rd-parties Using the Exchange

SBX is an open protocol that is available to be used by anyone without permission.

## Fees

[ [___see the documentation___](https://docs.sbx.cash/fees) ]

## Free and Open Source Software (FOSS)

In the spirit of full transparency, it's critical that the source code protecting the network be available to anyone and everyone who partipates in the network.

# License

MIT
