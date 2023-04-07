const ffi = require("ffi-napi")

//import c++ lib
const hashTable = ffi.Library("./hashTable.so", {
    "createHashTable": ['pointer', []],
    'deleteHashTable': ['void', ['pointer']],
    "keyToHash": ['int', ['pointer', 'string']],
    "put": ['void', ['pointer', 'string', 'string']],
    "get": ['string', ['pointer', 'string']],
    "removeKey": ['void', ['pointer', 'string']],
    "hasKey": ['bool', ['pointer', 'string']],
});

class HashTable {
    constructor() {
      this.obj = hashTable.createHashTable();
    }

    put(key, value){
        hashTable.put(this.obj, key, value);
    }
  
    keyToHash(key) {
        return hashTable.keyToHash(this.obj, key);
    }

    get(key) {
        return hashTable.get(this.obj, key);
    }

    remove(key) {
        return hashTable.removeKey(this.obj, key);
    }

    hasKey(key){
        return hashTable.hasKey(this.obj, key)
    }
  
    destructor() {
        hashTable.deleteHashTable(this.obj);
    }
  }
  
//   const hashTableObj = new HashTable();
//   hashTableObj.put("key", "value");
//   hashTableObj.keyToHash("key");
//   console.log(hashTableObj.get("key"));
//   hashTableObj.remove("key");
//   console.log(hashTableObj.get("key"));
//   hashTableObj.destructor();

