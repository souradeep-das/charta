export const SafeMath = 
{
  "contractName": "SafeMath",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a7230582085b98ec293e9438e310bbebacc08b922030089634f6ded62a1c4066506c8945a0029",
  "sourceMap": "117:1022:32:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "117:1022:32:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title SafeMath\n * @dev Math operations with safety checks that throw on error\n */\nlibrary SafeMath {\n\n  /**\n  * @dev Multiplies two numbers, throws on overflow.\n  */\n  function mul(uint256 a, uint256 b) internal pure returns (uint256) {\n    if (a == 0) {\n      return 0;\n    }\n    uint256 c = a * b;\n    assert(c / a == b);\n    return c;\n  }\n\n  /**\n  * @dev Integer division of two numbers, truncating the quotient.\n  */\n  function div(uint256 a, uint256 b) internal pure returns (uint256) {\n    // assert(b > 0); // Solidity automatically throws when dividing by 0\n    uint256 c = a / b;\n    // assert(a == b * c + a % b); // There is no case in which this doesn't hold\n    return c;\n  }\n\n  /**\n  * @dev Substracts two numbers, throws on overflow (i.e. if subtrahend is greater than minuend).\n  */\n  function sub(uint256 a, uint256 b) internal pure returns (uint256) {\n    assert(b <= a);\n    return a - b;\n  }\n\n  /**\n  * @dev Adds two numbers, throws on overflow.\n  */\n  function add(uint256 a, uint256 b) internal pure returns (uint256) {\n    uint256 c = a + b;\n    assert(c >= a);\n    return c;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
      "exportedSymbols": {
        "SafeMath": [
          7787
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 7691,
        "name": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": "@title SafeMath\n@dev Math operations with safety checks that throw on error",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            7787
          ],
          "name": "SafeMath",
          "scope": 7788
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mul",
              "payable": false,
              "scope": 7787,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7724,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7692,
                        "name": "ElementaryTypeName",
                        "src": "216:7:32"
                      }
                    ],
                    "id": 7693,
                    "name": "VariableDeclaration",
                    "src": "216:9:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7724,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7694,
                        "name": "ElementaryTypeName",
                        "src": "227:7:32"
                      }
                    ],
                    "id": 7695,
                    "name": "VariableDeclaration",
                    "src": "227:9:32"
                  }
                ],
                "id": 7696,
                "name": "ParameterList",
                "src": "215:22:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7724,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7697,
                        "name": "ElementaryTypeName",
                        "src": "261:7:32"
                      }
                    ],
                    "id": 7698,
                    "name": "VariableDeclaration",
                    "src": "261:7:32"
                  }
                ],
                "id": 7699,
                "name": "ParameterList",
                "src": "260:9:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7693,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7700,
                            "name": "Identifier",
                            "src": "280:1:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 7701,
                            "name": "Literal",
                            "src": "285:1:32"
                          }
                        ],
                        "id": 7702,
                        "name": "BinaryOperation",
                        "src": "280:6:32"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 7699
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 7703,
                                "name": "Literal",
                                "src": "303:1:32"
                              }
                            ],
                            "id": 7704,
                            "name": "Return",
                            "src": "296:8:32"
                          }
                        ],
                        "id": 7705,
                        "name": "Block",
                        "src": "288:23:32"
                      }
                    ],
                    "id": 7706,
                    "name": "IfStatement",
                    "src": "276:35:32"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7708
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 7724,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 7707,
                            "name": "ElementaryTypeName",
                            "src": "316:7:32"
                          }
                        ],
                        "id": 7708,
                        "name": "VariableDeclaration",
                        "src": "316:9:32"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "*",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7693,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7709,
                            "name": "Identifier",
                            "src": "328:1:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7695,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 7710,
                            "name": "Identifier",
                            "src": "332:1:32"
                          }
                        ],
                        "id": 7711,
                        "name": "BinaryOperation",
                        "src": "328:5:32"
                      }
                    ],
                    "id": 7712,
                    "name": "VariableDeclarationStatement",
                    "src": "316:17:32"
                  },
                  {
                    "children": [
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
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8358,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 7713,
                            "name": "Identifier",
                            "src": "339:6:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "/",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7708,
                                      "type": "uint256",
                                      "value": "c"
                                    },
                                    "id": 7714,
                                    "name": "Identifier",
                                    "src": "346:1:32"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7693,
                                      "type": "uint256",
                                      "value": "a"
                                    },
                                    "id": 7715,
                                    "name": "Identifier",
                                    "src": "350:1:32"
                                  }
                                ],
                                "id": 7716,
                                "name": "BinaryOperation",
                                "src": "346:5:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7695,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 7717,
                                "name": "Identifier",
                                "src": "355:1:32"
                              }
                            ],
                            "id": 7718,
                            "name": "BinaryOperation",
                            "src": "346:10:32"
                          }
                        ],
                        "id": 7719,
                        "name": "FunctionCall",
                        "src": "339:18:32"
                      }
                    ],
                    "id": 7720,
                    "name": "ExpressionStatement",
                    "src": "339:18:32"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7699
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7708,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 7721,
                        "name": "Identifier",
                        "src": "370:1:32"
                      }
                    ],
                    "id": 7722,
                    "name": "Return",
                    "src": "363:8:32"
                  }
                ],
                "id": 7723,
                "name": "Block",
                "src": "270:106:32"
              }
            ],
            "id": 7724,
            "name": "FunctionDefinition",
            "src": "203:173:32"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "div",
              "payable": false,
              "scope": 7787,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7742,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7725,
                        "name": "ElementaryTypeName",
                        "src": "471:7:32"
                      }
                    ],
                    "id": 7726,
                    "name": "VariableDeclaration",
                    "src": "471:9:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7742,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7727,
                        "name": "ElementaryTypeName",
                        "src": "482:7:32"
                      }
                    ],
                    "id": 7728,
                    "name": "VariableDeclaration",
                    "src": "482:9:32"
                  }
                ],
                "id": 7729,
                "name": "ParameterList",
                "src": "470:22:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7742,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7730,
                        "name": "ElementaryTypeName",
                        "src": "516:7:32"
                      }
                    ],
                    "id": 7731,
                    "name": "VariableDeclaration",
                    "src": "516:7:32"
                  }
                ],
                "id": 7732,
                "name": "ParameterList",
                "src": "515:9:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7734
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 7742,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 7733,
                            "name": "ElementaryTypeName",
                            "src": "605:7:32"
                          }
                        ],
                        "id": 7734,
                        "name": "VariableDeclaration",
                        "src": "605:9:32"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7726,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7735,
                            "name": "Identifier",
                            "src": "617:1:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7728,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 7736,
                            "name": "Identifier",
                            "src": "621:1:32"
                          }
                        ],
                        "id": 7737,
                        "name": "BinaryOperation",
                        "src": "617:5:32"
                      }
                    ],
                    "id": 7738,
                    "name": "VariableDeclarationStatement",
                    "src": "605:17:32"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7732
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7734,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 7739,
                        "name": "Identifier",
                        "src": "717:1:32"
                      }
                    ],
                    "id": 7740,
                    "name": "Return",
                    "src": "710:8:32"
                  }
                ],
                "id": 7741,
                "name": "Block",
                "src": "525:198:32"
              }
            ],
            "id": 7742,
            "name": "FunctionDefinition",
            "src": "458:265:32"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "sub",
              "payable": false,
              "scope": 7787,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7762,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7743,
                        "name": "ElementaryTypeName",
                        "src": "849:7:32"
                      }
                    ],
                    "id": 7744,
                    "name": "VariableDeclaration",
                    "src": "849:9:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7762,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7745,
                        "name": "ElementaryTypeName",
                        "src": "860:7:32"
                      }
                    ],
                    "id": 7746,
                    "name": "VariableDeclaration",
                    "src": "860:9:32"
                  }
                ],
                "id": 7747,
                "name": "ParameterList",
                "src": "848:22:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7762,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7748,
                        "name": "ElementaryTypeName",
                        "src": "894:7:32"
                      }
                    ],
                    "id": 7749,
                    "name": "VariableDeclaration",
                    "src": "894:7:32"
                  }
                ],
                "id": 7750,
                "name": "ParameterList",
                "src": "893:9:32"
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
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8358,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 7751,
                            "name": "Identifier",
                            "src": "909:6:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7746,
                                  "type": "uint256",
                                  "value": "b"
                                },
                                "id": 7752,
                                "name": "Identifier",
                                "src": "916:1:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7744,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 7753,
                                "name": "Identifier",
                                "src": "921:1:32"
                              }
                            ],
                            "id": 7754,
                            "name": "BinaryOperation",
                            "src": "916:6:32"
                          }
                        ],
                        "id": 7755,
                        "name": "FunctionCall",
                        "src": "909:14:32"
                      }
                    ],
                    "id": 7756,
                    "name": "ExpressionStatement",
                    "src": "909:14:32"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7750
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "-",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7744,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7757,
                            "name": "Identifier",
                            "src": "936:1:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7746,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 7758,
                            "name": "Identifier",
                            "src": "940:1:32"
                          }
                        ],
                        "id": 7759,
                        "name": "BinaryOperation",
                        "src": "936:5:32"
                      }
                    ],
                    "id": 7760,
                    "name": "Return",
                    "src": "929:12:32"
                  }
                ],
                "id": 7761,
                "name": "Block",
                "src": "903:43:32"
              }
            ],
            "id": 7762,
            "name": "FunctionDefinition",
            "src": "836:110:32"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "add",
              "payable": false,
              "scope": 7787,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "a",
                      "scope": 7786,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7763,
                        "name": "ElementaryTypeName",
                        "src": "1021:7:32"
                      }
                    ],
                    "id": 7764,
                    "name": "VariableDeclaration",
                    "src": "1021:9:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "b",
                      "scope": 7786,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7765,
                        "name": "ElementaryTypeName",
                        "src": "1032:7:32"
                      }
                    ],
                    "id": 7766,
                    "name": "VariableDeclaration",
                    "src": "1032:9:32"
                  }
                ],
                "id": 7767,
                "name": "ParameterList",
                "src": "1020:22:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7786,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 7768,
                        "name": "ElementaryTypeName",
                        "src": "1066:7:32"
                      }
                    ],
                    "id": 7769,
                    "name": "VariableDeclaration",
                    "src": "1066:7:32"
                  }
                ],
                "id": 7770,
                "name": "ParameterList",
                "src": "1065:9:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7772
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "c",
                          "scope": 7786,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint256",
                              "type": "uint256"
                            },
                            "id": 7771,
                            "name": "ElementaryTypeName",
                            "src": "1081:7:32"
                          }
                        ],
                        "id": 7772,
                        "name": "VariableDeclaration",
                        "src": "1081:9:32"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7764,
                              "type": "uint256",
                              "value": "a"
                            },
                            "id": 7773,
                            "name": "Identifier",
                            "src": "1093:1:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7766,
                              "type": "uint256",
                              "value": "b"
                            },
                            "id": 7774,
                            "name": "Identifier",
                            "src": "1097:1:32"
                          }
                        ],
                        "id": 7775,
                        "name": "BinaryOperation",
                        "src": "1093:5:32"
                      }
                    ],
                    "id": 7776,
                    "name": "VariableDeclarationStatement",
                    "src": "1081:17:32"
                  },
                  {
                    "children": [
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
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8358,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 7777,
                            "name": "Identifier",
                            "src": "1104:6:32"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7772,
                                  "type": "uint256",
                                  "value": "c"
                                },
                                "id": 7778,
                                "name": "Identifier",
                                "src": "1111:1:32"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7764,
                                  "type": "uint256",
                                  "value": "a"
                                },
                                "id": 7779,
                                "name": "Identifier",
                                "src": "1116:1:32"
                              }
                            ],
                            "id": 7780,
                            "name": "BinaryOperation",
                            "src": "1111:6:32"
                          }
                        ],
                        "id": 7781,
                        "name": "FunctionCall",
                        "src": "1104:14:32"
                      }
                    ],
                    "id": 7782,
                    "name": "ExpressionStatement",
                    "src": "1104:14:32"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7770
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7772,
                          "type": "uint256",
                          "value": "c"
                        },
                        "id": 7783,
                        "name": "Identifier",
                        "src": "1131:1:32"
                      }
                    ],
                    "id": 7784,
                    "name": "Return",
                    "src": "1124:8:32"
                  }
                ],
                "id": 7785,
                "name": "Block",
                "src": "1075:62:32"
              }
            ],
            "id": 7786,
            "name": "FunctionDefinition",
            "src": "1008:129:32"
          }
        ],
        "id": 7787,
        "name": "ContractDefinition",
        "src": "117:1022:32"
      }
    ],
    "id": 7788,
    "name": "SourceUnit",
    "src": "0:1140:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.361Z"
}