"use strict";
exports.__esModule = true;
var BinarySearchTree_1 = require("./BinarySearchTree");
var printNode = function (value) { return console.log(value); };
var insertValues = function (tree, quantity) {
    for (var i = 0; i <= quantity; i++) {
        tree.insert(i);
    }
};
var tree = new BinarySearchTree_1["default"]();
insertValues(tree, -10);
insertValues(tree, 10);
tree.preOrderTraverse(printNode);
