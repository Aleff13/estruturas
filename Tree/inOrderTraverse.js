"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("./BinarySearchTree");
var printNode = function (value) { return console.log(value); };
var tree = new BinarySearchTree_1["default"]();
tree.insert(0);
tree.insert(1);
tree.insert(-1);
tree.inOrderTraverse(printNode);
