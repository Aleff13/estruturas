import { defaultEquals } from "../Utils/Index";
import aNode from "./Node";
interface ILinkedList {
  push(element: string | number): void;
  insert(element: string | number, position: number): void;
  getElementAt(index: number): aNode;
  remove(element: string | number): void;
  indexOf(element: string | number): number;
  removeAt(position: number): aNode | undefined;
  isEmpty(): boolean;
  size(): number;
  toString(): string;
}
class LinkedList implements ILinkedList {
  count: number;
  head: aNode | undefined | null;
  equalsFn: (a: string | number, b: string | number) => boolean;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  size(): number {
    throw new Error("Method not implemented.");
  }
  toString(): string {
    throw new Error("Method not implemented.");
  }
  push(element: any): void {
    const node = new aNode(element);
    const headIsNull = this.head == null;
    let current;

    if (headIsNull) {
      this.head = node;
    } else {
      current = this.head;
      while (current?.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
  insert(element: any, position: any): void {
    throw new Error("Method not implemented.");
  }
  getElementAt(index: any): aNode {
    throw new Error("Method not implemented.");
  }
  remove(element: any): void {
    throw new Error("Method not implemented.");
  }
  indexOf(element: any): number {
    throw new Error("Method not implemented.");
  }
  removeAt(position: number) {
    const insideInterval = position >= 0 && position < this.count;
    const positionIsHead = position === 0;

    if (insideInterval) {
      let current = this.head;
      if (positionIsHead) {
        this.head = current?.next;
      } else {
        let previous;
        for (let i = 0; i < position; i++) {
          previous = current;
          current = current?.next;
        }
        previous?.next = current?.next;
      }
      this.count--;
      return current?.element;
    }
    return undefined;
  }
}

const list = new LinkedList();
list.push(1);
console.log(list);

list.push(2);
console.log(list);

list.push(3);
console.log(list);

list.removeAt(1);
console.log(list);
