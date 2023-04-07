const ffi = require("ffi-napi");

//import c++ lib
const hashTable = ffi.Library("./hashTable.so", {
  createHashTable: ["pointer", []],
  deleteHashTable: ["void", ["pointer"]],
  keyToHash: ["int", ["pointer", "string"]],
  put: ["void", ["pointer", "string", "string"]],
  get: ["string", ["pointer", "string"]],
  removeKey: ["void", ["pointer", "string"]],
  hasKey: ["bool", ["pointer", "string"]],
});

class HashTable {
  private obj: any;
  constructor() {
    this.obj = hashTable.createHashTable();
  }

  put(key: string, value: string): void {
    hashTable.put(this.obj, key, value);
  }

  get(key: string): string {
    return hashTable.get(this.obj, key);
  }

  remove(key: string): void {
    return hashTable.remove(this.obj, key);
  }

  hasKey(key: string): void {
    return hashTable.hasKey(this.obj, key);
  }

  keyToHash(key: string): number {
    return hashTable.keyToHash(this.obj, key);
  }

  destructor() {
    hashTable.deleteHashTable(this.obj);
  }
}

export default HashTable;
