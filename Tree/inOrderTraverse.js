"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("./BinarySearchTree");
var printNode = function (value) { return console.log(value); };
var tree = new BinarySearchTree_1["default"]();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(3);
tree.insert(6);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(20);
tree.insert(12);
tree.insert(14);
tree.insert(18);
tree.insert(25);
tree.inOrderTraverse(printNode);
// -1
// 0
// 1
