/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradeableProxy,
  UpgradeableProxyInterface,
} from "../UpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60806040526040516106e43803806106e483398101604081905261002291610280565b61004d60017f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbd610398565b60008051602061069d8339815191521461007757634e487b7160e01b600052600160045260246000fd5b610080826100a4565b80511561009d5761009b828261014060201b6100491760201c565b505b5050610401565b6100b78161016c60201b6100751760201c565b61012e5760405162461bcd60e51b815260206004820152603660248201527f5570677261646561626c6550726f78793a206e657720696d706c656d656e746160448201527f74696f6e206973206e6f74206120636f6e74726163740000000000000000000060648201526084015b60405180910390fd5b60008051602061069d83398151915255565b606061016583836040518060600160405280602781526020016106bd60279139610172565b9392505050565b3b151590565b6060833b6101d15760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610125565b600080856001600160a01b0316856040516101ec9190610349565b600060405180830381855af49150503d8060008114610227576040519150601f19603f3d011682016040523d82523d6000602084013e61022c565b606091505b50909250905061023d828286610247565b9695505050505050565b60608315610256575081610165565b8251156102665782518084602001fd5b8160405162461bcd60e51b81526004016101259190610365565b60008060408385031215610292578182fd5b82516001600160a01b03811681146102a8578283fd5b60208401519092506001600160401b03808211156102c4578283fd5b818501915085601f8301126102d7578283fd5b8151818111156102e9576102e96103eb565b604051601f8201601f19908116603f01168101908382118183101715610311576103116103eb565b81604052828152886020848701011115610329578586fd5b61033a8360208301602088016103bb565b80955050505050509250929050565b6000825161035b8184602087016103bb565b9190910192915050565b60006020825282518060208401526103848160408501602087016103bb565b601f01601f19169190910160400192915050565b6000828210156103b657634e487b7160e01b81526011600452602481fd5b500390565b60005b838110156103d65781810151838201526020016103be565b838111156103e5576000848401525b50505050565b634e487b7160e01b600052604160045260246000fd5b61028d806104106000396000f3fe60806040523661001357610011610017565b005b6100115b6100476100427f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b61007b565b565b606061006e83836040518060600160405280602781526020016102316027913961009f565b9392505050565b3b151590565b3660008037600080366000845af43d6000803e80801561009a573d6000f35b3d6000fd5b6060833b6101035760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084015b60405180910390fd5b600080856001600160a01b03168560405161011e91906101b1565b600060405180830381855af49150503d8060008114610159576040519150601f19603f3d011682016040523d82523d6000602084013e61015e565b606091505b509150915061016e828286610178565b9695505050505050565b6060831561018757508161006e565b8251156101975782518084602001fd5b8160405162461bcd60e51b81526004016100fa91906101cd565b600082516101c3818460208701610200565b9190910192915050565b60006020825282518060208401526101ec816040850160208701610200565b601f01601f19169190910160400192915050565b60005b8381101561021b578181015183820152602001610203565b8381111561022a576000848401525b5050505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220dbbc51b2e4aad17c427c26cfb661f1bf9230eb42b118c5ee60990c60757e452d64736f6c63430008020033360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

export class UpgradeableProxy__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<UpgradeableProxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<UpgradeableProxy>;
  }
  getDeployTransaction(
    _logic: string,
    _data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  attach(address: string): UpgradeableProxy {
    return super.attach(address) as UpgradeableProxy;
  }
  connect(signer: Signer): UpgradeableProxy__factory {
    return super.connect(signer) as UpgradeableProxy__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeableProxyInterface {
    return new utils.Interface(_abi) as UpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeableProxy {
    return new Contract(address, _abi, signerOrProvider) as UpgradeableProxy;
  }
}