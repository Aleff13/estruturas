interface QueueInterface {
  enqueue(element: any): void;
  dequeue(): any;
  peek(): any;
  isEmpty(): boolean;
  size(): number;
  clear(): void;
  toString(): string | undefined;
  toTable(): void | undefined;
}

class Queue implements QueueInterface {
  private count: number;
  private lowestCount: number;
  private items: {};

  constructor() {
    this.count = 0; //quantidade de elementos que já estiveram na fila
    this.lowestCount = 0; //index do numero mais baixo
    this.items = {};
  }

  enqueue(...element: (number | number[] | string | string[])[]): void {
    element.forEach((el) => {
      this.items[this.count] = el;
      this.count++;
    });
    return;
  }

  dequeue(): any {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek(): any {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  isEmpty(): boolean {
    return this.count - this.lowestCount === 0;
  }

  size(): number {
    return this.count - this.lowestCount;
  }

  clear(): void {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString(): string | undefined {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString || "";
  }

  toTable(): void | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    console.table(this.items);
    return;
  }
}

export default Queue;
