"use strict";
exports.__esModule = true;
var HashTable_1 = require("./HashTable");
var myStupidHash = new HashTable_1["default"]();
myStupidHash.put("myCache1", "123456");
myStupidHash.put("myKey2", "12345678910");
console.log(myStupidHash.getHashs());
