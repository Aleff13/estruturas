"use strict";
exports.__esModule = true;
var ffi = require("ffi-napi");
//import c++ lib
var hashTable = ffi.Library("./hashTable.so", {
    createHashTable: ["pointer", []],
    deleteHashTable: ["void", ["pointer"]],
    keyToHash: ["int", ["pointer", "string"]],
    put: ["void", ["pointer", "string", "string"]],
    get: ["string", ["pointer", "string"]],
    removeKey: ["void", ["pointer", "string"]],
    hasKey: ["bool", ["pointer", "string"]]
});
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.obj = hashTable.createHashTable();
    }
    HashTable.prototype.put = function (key, value) {
        hashTable.put(this.obj, key, value);
    };
    HashTable.prototype.get = function (key) {
        return hashTable.get(this.obj, key);
    };
    HashTable.prototype.remove = function (key) {
        return hashTable.remove(this.obj, key);
    };
    HashTable.prototype.hasKey = function (key) {
        return hashTable.hasKey(this.obj, key);
    };
    HashTable.prototype.keyToHash = function (key) {
        return hashTable.keyToHash(this.obj, key);
    };
    HashTable.prototype.destructor = function () {
        hashTable.deleteHashTable(this.obj);
    };
    return HashTable;
}());
exports["default"] = HashTable;
