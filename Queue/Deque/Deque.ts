interface DequeInterface {}

class Deque {
  private items = [];

  constructor() {
    this.items = [];
  }

  addFront(...elements: (number | number[] | string | string[])[]) {
    elements.forEach((el) => this.items.unshift(el));
  }

  addBack(...elements: (number | number[] | string | string[])[]): void {
    elements.forEach((el) => this.items.push(el));
    return;
  }

  removeFront(): number | string | void {
    if (this.isEmpty()) {
      return;
    }
    let removed = this.items.shift();

    return removed;
  }

  removeBack(): number | string | void {
    if (this.isEmpty()) {
      return;
    }
    let removed = this.items.pop();

    return removed;
  }

  peekFront(): number | string | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    let front = this.items[0];

    return front;
  }

  peekBack(): number | string | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    let back = this.items[this.items.length - 1];

    return back;
  }

  isEmpty(): boolean {
    return this.items.length === 0 ? true : false;
  }

  size(): number | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.length;
  }

  clear(): void {
    this.items = [];
  }

  toString(): string | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.toString();
  }
}

export default Deque;

// const deque = new Deque();

// deque.addBack(1, 2, 3, 4, 5);
// console.log(deque.toString());
// deque.addBack(6);
// console.log(deque.toString());
// deque.addFront(-1);
// console.log(deque.toString());

// console.log(deque.peekBack());
// console.log(deque.peekFront());
