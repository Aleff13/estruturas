import BinarySearchTree from "./BinarySearchTree";

const tree = new BinarySearchTree();

tree.insert(10); //raiz
tree.insert(9);
tree.insert(11);
tree.insert(12);
tree.insert(15);
tree.insert(7);
tree.insert(8);

console.table(tree.root?.right?.right?.right);
