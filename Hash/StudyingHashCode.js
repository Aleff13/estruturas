"use strict";
//Para fins de estudo iremos
//Iremos analisar como esses valores são criados
exports.__esModule = true;
var HashTable_1 = require("./HashTable");
//vamos criar um array que irá armazenar os hashs
var hashs = new Array();
//Iremos instanciar um objeto a partir de FooHash
var hashTable = new HashTable_1["default"]();
hashs.push(hashTable.put("myKey1", "123456789"));
hashs.push(hashTable.put("myKey2", "12345678910"));
hashs.push(hashTable.put("umaKeyAleatoria", "12345678910"));
hashs.push(hashTable.put("umaKeyAleatoria2", "12345678910"));
console.table(hashs);
