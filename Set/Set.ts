export interface SetInterface {
  add(element: any): void;
  delete(element: any): void;
  has(element: any): boolean;
  clear(): void;
  size(): number;
  values(): any[];
}

class SetTs implements SetInterface {
  private items = {};

  constructor() {
    this.items = {};
  }

  add(...element: any[]): void {
    element.forEach((el) => {
      if (!this.has(el)) {
        this.items[el] = element;
      }
    });
  }

  delete(...element: (any)[]): void {
    element.forEach((el) => {
      if (this.has(el)) {
        delete this.items[el];
      }
    });
  }

  has(element: any): boolean {
    return element in this.items;
  }

  clear(): void {
    this.items = {};
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  values(): any[] {
    return Object.keys(this.items);
  }

}

export default SetTs


