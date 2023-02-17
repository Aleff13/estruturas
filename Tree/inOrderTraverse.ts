import BinarySearchTree from "./BinarySearchTree";
import aNode from "./Node";

const printNode = (value) => console.log(value);

const tree = new BinarySearchTree();

tree.insert(0);
tree.insert(1);
tree.insert(-1);

tree.inOrderTraverse(printNode);
