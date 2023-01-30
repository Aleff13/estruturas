"use strict";
exports.__esModule = true;
var SuperSet_1 = require("./SuperSet");
var naturais10 = new SuperSet_1["default"]();
var integers20 = new SuperSet_1["default"]();
for (var i = -20; i <= 20; i++) {
    integers20.add(i);
}
for (var i = 0; i <= 10; i++) {
    naturais10.add(i);
}
console.log(naturais10.isSubsetOf(integers20));
console.log(integers20.isSubsetOf(naturais10));
