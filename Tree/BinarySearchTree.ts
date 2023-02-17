import { compare, CompareEnum } from "../Utils/Index";
import aNode from "./Node";

interface TreeInterface {
  insert(key: string | number): void;
  search(key: string | number): boolean;
  isOrderTraverse(): void;
  preOrderTraverse(): void;
  postOrderTraverse(): void;
  min(): string | number | undefined;
  max(): string | number | undefined;
  remove(key: string | number): void;
}

class BinarySearchTree implements TreeInterface {
  root: aNode | null;
  compareFunc: <T>(a: T, b: T) => number;

  constructor(compareFunc = compare) {
    this.compareFunc = compareFunc;
    this.root = null;
  }

  /**
   * Esse método insere um novo nó utilizando recursividade
   * @param node nó base
   * @param key valor que queremos inserir
   */
  private insertNode(node: aNode, key: string | number): void {
    //verifica se a key é menor que o nó
    if (this.compareFunc(key, node.key) === CompareEnum.LESS_THAN) {
      //verifica se o nó a esquerda está vazio
      if (node.left == null) {
        node.left = new aNode(key);
      } else {
        //recursivamente ele chama o método novamente, sendo que agora o node.left será visto como o nó
        this.insertNode(node.left, key);
      }
    } else {
      //verifica se o nó a direita está vazio
      if (node.right == null) {
        node.right = new aNode(key);
      } else {
        //recursivamente ele chama o método novamente, sendo que agora o node.right será visto como o nó
        this.insertNode(node.right, key);
      }
    }
  }

  insert(key: string | number): void {
    if (this.root == null) {
      this.root = new aNode(key);
      return;
    }
    this.insertNode(this.root, key);
  }
  search(key: string | number): boolean {
    throw new Error("Method not implemented.");
  }
  isOrderTraverse(): void {
    throw new Error("Method not implemented.");
  }
  preOrderTraverse(): void {
    throw new Error("Method not implemented.");
  }
  postOrderTraverse(): void {
    throw new Error("Method not implemented.");
  }
  min(): string | number | undefined {
    throw new Error("Method not implemented.");
  }
  max(): string | number | undefined {
    throw new Error("Method not implemented.");
  }
  remove(key: string | number): void {
    throw new Error("Method not implemented.");
  }
}

export type { TreeInterface };
export default BinarySearchTree;
