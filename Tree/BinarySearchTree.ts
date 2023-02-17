import { compare, CompareEnum } from "../Utils/Index";
import aNode from "./Node";

interface TreeInterface {
  insert(key: string | number): void;
  search(key: string | number): boolean;
  inOrderTraverse(callback: any): void;
  preOrderTraverse(callback: any): void;
  postOrderTraverse(callback: any): void;
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

  /**
   * Percorre a arvore em ordem
   * @param callback
   */
  inOrderTraverse(callback: any): void {
    this.inOrderTraverseNode(this.root, callback);
  }
  private inOrderTraverseNode(node: aNode | null, callback: any) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: any): void {
    this.preOrderTraverseNode(this.root, callback);
  }

  private preOrderTraverseNode(node: aNode | null, callback: any) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: any): void {
    this.postOrderTraverseNode(this.root, callback);
  }
  private postOrderTraverseNode(node: aNode | null, callback: any) {
    if (node != null) {
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
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
