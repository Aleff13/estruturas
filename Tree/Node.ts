class aNode {
    key: string | number;
    left: aNode | null
    right: aNode |null

  constructor(key: string | number) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
