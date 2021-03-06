export const TermsContractRegistry = 
{
  "contractName": "TermsContractRegistry",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "termsContract",
          "type": "address"
        }
      ],
      "name": "setCompoundInterestTermsContractAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "termsContract",
          "type": "address"
        }
      ],
      "name": "setSimpleInterestTermsContractAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "getCompoundInterestTermsContractAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "getSimpleInterestTermsContractAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolToTermsContractAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6105fc8061001e6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063092bf7b7146100725780631ad43dc0146100ca578063281ad757146101225780636ae369c11461019b5780639ef3daf614610214575b600080fd5b341561007d57600080fd5b6100c8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061027b565b005b34156100d557600080fd5b610120600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610350565b005b341561012d57600080fd5b610159600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610425565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a657600080fd5b6101d2600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104e1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021f57600080fd5b61023960048080356000191690602001909190505061059d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b8060008084604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f436f6d706f756e64496e7465726573745465726d73436f6e7472616374000000815250601d0191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b8060008084604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f436f6d706f756e64496e7465726573745465726d73436f6e7472616374000000815250601d0191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080600083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582005ba9e45f691f612d7cd477f5585d35294380e724653eb55ae5cee7b083449e20029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063092bf7b7146100725780631ad43dc0146100ca578063281ad757146101225780636ae369c11461019b5780639ef3daf614610214575b600080fd5b341561007d57600080fd5b6100c8600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061027b565b005b34156100d557600080fd5b610120600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610350565b005b341561012d57600080fd5b610159600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610425565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a657600080fd5b6101d2600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506104e1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021f57600080fd5b61023960048080356000191690602001909190505061059d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b8060008084604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f436f6d706f756e64496e7465726573745465726d73436f6e7472616374000000815250601d0191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b8060008084604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600080600083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f436f6d706f756e64496e7465726573745465726d73436f6e7472616374000000815250601d0191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080600083604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401807f53696d706c65496e7465726573745465726d73436f6e74726163740000000000815250601b0191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff16815600a165627a7a7230582005ba9e45f691f612d7cd477f5585d35294380e724653eb55ae5cee7b083449e20029",
  "sourceMap": "26:1270:13:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "26:1270:13:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;713:288;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;134:284;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1007:287;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:283;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;63:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;713:288;981:13;858:28;:120;910:12;887:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;858:120;;;;;;;;;;;;;;;;;;:136;;;;;;;;;;;;;;;;;;713:288;;:::o;134:284::-;398:13;277:28;:118;329:12;306:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;277:118;;;;;;;;;;;;;;;;;;:134;;;;;;;;;;;;;;;;;;134:284;;:::o;1007:287::-;1137:7;1167:28;:120;1219:12;1196:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1167:120;;;;;;;;;;;;;;;;;;;;;;;;;;;1160:127;;1007:287;;;:::o;424:283::-;552:7;582:28;:118;634:12;611:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;582:118;;;;;;;;;;;;;;;;;;;;;;;;;;;575:125;;424:283;;;:::o;63:64::-;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\n\ncontract TermsContractRegistry {\n    mapping (bytes32 => address) public symbolToTermsContractAddress;\n\n    function setSimpleInterestTermsContractAddress(\n        address tokenAddress,\n        address termsContract\n    )\n        public\n    {\n        symbolToTermsContractAddress[keccak256(\n            tokenAddress,\n            \"SimpleInterestTermsContract\"\n        )] = termsContract;\n    }\n\n    function getSimpleInterestTermsContractAddress(\n        address tokenAddress\n    )\n        public\n        view\n        returns (address)\n    {\n        return symbolToTermsContractAddress[keccak256(\n            tokenAddress,\n            \"SimpleInterestTermsContract\"\n        )];\n    }\n\n    function setCompoundInterestTermsContractAddress(\n        address tokenAddress,\n        address termsContract\n    )\n        public\n    {\n        symbolToTermsContractAddress[keccak256(\n            tokenAddress,\n            \"CompoundInterestTermsContract\"\n        )] = termsContract;\n    }\n\n    function getCompoundInterestTermsContractAddress(\n        address tokenAddress\n    )\n        public\n        view\n        returns (address)\n    {\n        return symbolToTermsContractAddress[keccak256(\n            tokenAddress,\n            \"CompoundInterestTermsContract\"\n        )];\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/TermsContractRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/TermsContractRegistry.sol",
      "exportedSymbols": {
        "TermsContractRegistry": [
          3806
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 3737,
        "name": "PragmaDirective",
        "src": "0:23:13"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3806
          ],
          "name": "TermsContractRegistry",
          "scope": 3807
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "symbolToTermsContractAddress",
              "scope": 3806,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 3738,
                    "name": "ElementaryTypeName",
                    "src": "72:7:13"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 3739,
                    "name": "ElementaryTypeName",
                    "src": "83:7:13"
                  }
                ],
                "id": 3740,
                "name": "Mapping",
                "src": "63:28:13"
              }
            ],
            "id": 3741,
            "name": "VariableDeclaration",
            "src": "63:64:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setSimpleInterestTermsContractAddress",
              "payable": false,
              "scope": 3806,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3758,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3742,
                        "name": "ElementaryTypeName",
                        "src": "190:7:13"
                      }
                    ],
                    "id": 3743,
                    "name": "VariableDeclaration",
                    "src": "190:20:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "termsContract",
                      "scope": 3758,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3744,
                        "name": "ElementaryTypeName",
                        "src": "220:7:13"
                      }
                    ],
                    "id": 3745,
                    "name": "VariableDeclaration",
                    "src": "220:21:13"
                  }
                ],
                "id": 3746,
                "name": "ParameterList",
                "src": "180:67:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3747,
                "name": "ParameterList",
                "src": "267:0:13"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3741,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTermsContractAddress"
                                },
                                "id": 3748,
                                "name": "Identifier",
                                "src": "277:28:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "bytes32",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_8b4cb97860a0dbe2b88011c128ededd7ecf3885dfbcfa754c7192f454c8d53ae",
                                          "typeString": "literal_string \"SimpleInterestTermsContract\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8361,
                                      "type": "function () pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 3749,
                                    "name": "Identifier",
                                    "src": "306:9:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3743,
                                      "type": "address",
                                      "value": "tokenAddress"
                                    },
                                    "id": 3750,
                                    "name": "Identifier",
                                    "src": "329:12:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "53696d706c65496e7465726573745465726d73436f6e7472616374",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "string",
                                      "type": "literal_string \"SimpleInterestTermsContract\"",
                                      "value": "SimpleInterestTermsContract"
                                    },
                                    "id": 3751,
                                    "name": "Literal",
                                    "src": "355:29:13"
                                  }
                                ],
                                "id": 3752,
                                "name": "FunctionCall",
                                "src": "306:88:13"
                              }
                            ],
                            "id": 3753,
                            "name": "IndexAccess",
                            "src": "277:118:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3745,
                              "type": "address",
                              "value": "termsContract"
                            },
                            "id": 3754,
                            "name": "Identifier",
                            "src": "398:13:13"
                          }
                        ],
                        "id": 3755,
                        "name": "Assignment",
                        "src": "277:134:13"
                      }
                    ],
                    "id": 3756,
                    "name": "ExpressionStatement",
                    "src": "277:134:13"
                  }
                ],
                "id": 3757,
                "name": "Block",
                "src": "267:151:13"
              }
            ],
            "id": 3758,
            "name": "FunctionDefinition",
            "src": "134:284:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getSimpleInterestTermsContractAddress",
              "payable": false,
              "scope": 3806,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3773,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3759,
                        "name": "ElementaryTypeName",
                        "src": "480:7:13"
                      }
                    ],
                    "id": 3760,
                    "name": "VariableDeclaration",
                    "src": "480:20:13"
                  }
                ],
                "id": 3761,
                "name": "ParameterList",
                "src": "470:36:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3773,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3762,
                        "name": "ElementaryTypeName",
                        "src": "552:7:13"
                      }
                    ],
                    "id": 3763,
                    "name": "VariableDeclaration",
                    "src": "552:7:13"
                  }
                ],
                "id": 3764,
                "name": "ParameterList",
                "src": "551:9:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3764
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3741,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTermsContractAddress"
                            },
                            "id": 3765,
                            "name": "Identifier",
                            "src": "582:28:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_8b4cb97860a0dbe2b88011c128ededd7ecf3885dfbcfa754c7192f454c8d53ae",
                                      "typeString": "literal_string \"SimpleInterestTermsContract\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8361,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 3766,
                                "name": "Identifier",
                                "src": "611:9:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3760,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 3767,
                                "name": "Identifier",
                                "src": "634:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "53696d706c65496e7465726573745465726d73436f6e7472616374",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"SimpleInterestTermsContract\"",
                                  "value": "SimpleInterestTermsContract"
                                },
                                "id": 3768,
                                "name": "Literal",
                                "src": "660:29:13"
                              }
                            ],
                            "id": 3769,
                            "name": "FunctionCall",
                            "src": "611:88:13"
                          }
                        ],
                        "id": 3770,
                        "name": "IndexAccess",
                        "src": "582:118:13"
                      }
                    ],
                    "id": 3771,
                    "name": "Return",
                    "src": "575:125:13"
                  }
                ],
                "id": 3772,
                "name": "Block",
                "src": "565:142:13"
              }
            ],
            "id": 3773,
            "name": "FunctionDefinition",
            "src": "424:283:13"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "setCompoundInterestTermsContractAddress",
              "payable": false,
              "scope": 3806,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3790,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3774,
                        "name": "ElementaryTypeName",
                        "src": "771:7:13"
                      }
                    ],
                    "id": 3775,
                    "name": "VariableDeclaration",
                    "src": "771:20:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "termsContract",
                      "scope": 3790,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3776,
                        "name": "ElementaryTypeName",
                        "src": "801:7:13"
                      }
                    ],
                    "id": 3777,
                    "name": "VariableDeclaration",
                    "src": "801:21:13"
                  }
                ],
                "id": 3778,
                "name": "ParameterList",
                "src": "761:67:13"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3779,
                "name": "ParameterList",
                "src": "848:0:13"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3741,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTermsContractAddress"
                                },
                                "id": 3780,
                                "name": "Identifier",
                                "src": "858:28:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "bytes32",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_6101444904e1f987fceb25604e4fc112587e57d1aa10c7bd2466c14b625677e6",
                                          "typeString": "literal_string \"CompoundInterestTermsContract\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8361,
                                      "type": "function () pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 3781,
                                    "name": "Identifier",
                                    "src": "887:9:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3775,
                                      "type": "address",
                                      "value": "tokenAddress"
                                    },
                                    "id": 3782,
                                    "name": "Identifier",
                                    "src": "910:12:13"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "436f6d706f756e64496e7465726573745465726d73436f6e7472616374",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "string",
                                      "type": "literal_string \"CompoundInterestTermsContract\"",
                                      "value": "CompoundInterestTermsContract"
                                    },
                                    "id": 3783,
                                    "name": "Literal",
                                    "src": "936:31:13"
                                  }
                                ],
                                "id": 3784,
                                "name": "FunctionCall",
                                "src": "887:90:13"
                              }
                            ],
                            "id": 3785,
                            "name": "IndexAccess",
                            "src": "858:120:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3777,
                              "type": "address",
                              "value": "termsContract"
                            },
                            "id": 3786,
                            "name": "Identifier",
                            "src": "981:13:13"
                          }
                        ],
                        "id": 3787,
                        "name": "Assignment",
                        "src": "858:136:13"
                      }
                    ],
                    "id": 3788,
                    "name": "ExpressionStatement",
                    "src": "858:136:13"
                  }
                ],
                "id": 3789,
                "name": "Block",
                "src": "848:153:13"
              }
            ],
            "id": 3790,
            "name": "FunctionDefinition",
            "src": "713:288:13"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getCompoundInterestTermsContractAddress",
              "payable": false,
              "scope": 3806,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3805,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3791,
                        "name": "ElementaryTypeName",
                        "src": "1065:7:13"
                      }
                    ],
                    "id": 3792,
                    "name": "VariableDeclaration",
                    "src": "1065:20:13"
                  }
                ],
                "id": 3793,
                "name": "ParameterList",
                "src": "1055:36:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 3805,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3794,
                        "name": "ElementaryTypeName",
                        "src": "1137:7:13"
                      }
                    ],
                    "id": 3795,
                    "name": "VariableDeclaration",
                    "src": "1137:7:13"
                  }
                ],
                "id": 3796,
                "name": "ParameterList",
                "src": "1136:9:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3796
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3741,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTermsContractAddress"
                            },
                            "id": 3797,
                            "name": "Identifier",
                            "src": "1167:28:13"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_stringliteral_6101444904e1f987fceb25604e4fc112587e57d1aa10c7bd2466c14b625677e6",
                                      "typeString": "literal_string \"CompoundInterestTermsContract\""
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8361,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 3798,
                                "name": "Identifier",
                                "src": "1196:9:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3792,
                                  "type": "address",
                                  "value": "tokenAddress"
                                },
                                "id": 3799,
                                "name": "Identifier",
                                "src": "1219:12:13"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "436f6d706f756e64496e7465726573745465726d73436f6e7472616374",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "string",
                                  "type": "literal_string \"CompoundInterestTermsContract\"",
                                  "value": "CompoundInterestTermsContract"
                                },
                                "id": 3800,
                                "name": "Literal",
                                "src": "1245:31:13"
                              }
                            ],
                            "id": 3801,
                            "name": "FunctionCall",
                            "src": "1196:90:13"
                          }
                        ],
                        "id": 3802,
                        "name": "IndexAccess",
                        "src": "1167:120:13"
                      }
                    ],
                    "id": 3803,
                    "name": "Return",
                    "src": "1160:127:13"
                  }
                ],
                "id": 3804,
                "name": "Block",
                "src": "1150:144:13"
              }
            ],
            "id": 3805,
            "name": "FunctionDefinition",
            "src": "1007:287:13"
          }
        ],
        "id": 3806,
        "name": "ContractDefinition",
        "src": "26:1270:13"
      }
    ],
    "id": 3807,
    "name": "SourceUnit",
    "src": "0:1297:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xa967d14b3c0ab921ab222725cb83951a8a1a138f"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xc8e6f37c4b086bbb43e7853af7c89445071c2f40"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T04:42:11.849Z"
}