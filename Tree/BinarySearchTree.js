"use strict";
exports.__esModule = true;
var Index_1 = require("../Utils/Index");
var Node_1 = require("./Node");
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(compareFunc) {
        if (compareFunc === void 0) { compareFunc = Index_1.compare; }
        this.compareFunc = compareFunc;
        this.root = null;
    }
    /**
     * Esse método insere um novo nó utilizando recursividade
     * @param node nó base
     * @param key valor que queremos inserir
     */
    BinarySearchTree.prototype.insertNode = function (node, key) {
        //verifica se a key é menor que o nó
        if (this.compareFunc(key, node.key) === Index_1.CompareEnum.LESS_THAN) {
            //verifica se o nó a esquerda está vazio
            if (node.left == null) {
                node.left = new Node_1["default"](key);
            }
            else {
                //recursivamente ele chama o método novamente, sendo que agora o node.left será visto como o nó
                this.insertNode(node.left, key);
            }
        }
        else {
            //verifica se o nó a direita está vazio
            if (node.right == null) {
                node.right = new Node_1["default"](key);
            }
            else {
                //recursivamente ele chama o método novamente, sendo que agora o node.right será visto como o nó
                this.insertNode(node.right, key);
            }
        }
    };
    BinarySearchTree.prototype.insert = function (key) {
        if (this.root == null) {
            this.root = new Node_1["default"](key);
            return;
        }
        this.insertNode(this.root, key);
    };
    BinarySearchTree.prototype.search = function (key) {
        throw new Error("Method not implemented.");
    };
    BinarySearchTree.prototype.isOrderTraverse = function () {
        throw new Error("Method not implemented.");
    };
    BinarySearchTree.prototype.preOrderTraverse = function () {
        throw new Error("Method not implemented.");
    };
    BinarySearchTree.prototype.postOrderTraverse = function () {
        throw new Error("Method not implemented.");
    };
    BinarySearchTree.prototype.min = function () {
        throw new Error("Method not implemented.");
    };
    BinarySearchTree.prototype.max = function () {
        throw new Error("Method not implemented.");
    };
    BinarySearchTree.prototype.remove = function (key) {
        throw new Error("Method not implemented.");
    };
    return BinarySearchTree;
}());
exports["default"] = BinarySearchTree;
