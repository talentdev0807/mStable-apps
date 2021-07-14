/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IPlatformIntegration,
  IPlatformIntegrationInterface,
} from "../IPlatformIntegration";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
    ],
    name: "bAssetToPToken",
    outputs: [
      {
        internalType: "address",
        name: "pToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
    ],
    name: "checkBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isTokenFeeCharged",
        type: "bool",
      },
    ],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "quantityDeposited",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_hasTxFee",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_totalAmount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_hasTxFee",
        type: "bool",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "_bAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdrawRaw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IPlatformIntegration__factory {
  static readonly abi = _abi;
  static createInterface(): IPlatformIntegrationInterface {
    return new utils.Interface(_abi) as IPlatformIntegrationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPlatformIntegration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IPlatformIntegration;
  }
}