class aNode {
  element: any;
  next: undefined;

  constructor(element: string | number) {
    this.element = element;
    this.next = undefined;
  }
}

export default aNode;
