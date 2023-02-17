"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("./BinarySearchTree");
var tree = new BinarySearchTree_1["default"]();
tree.insert(10); //raiz
tree.insert(9);
tree.insert(11);
tree.insert(12);
tree.insert(15);
tree.insert(7);
tree.insert(8);
console.table(tree.root);
