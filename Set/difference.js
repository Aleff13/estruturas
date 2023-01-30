"use strict";
exports.__esModule = true;
var Set_1 = require("./Set");
var SuperSet_1 = require("./SuperSet");
var firstSet = new Set_1["default"]();
var secondSet = new SuperSet_1["default"]();
firstSet.add(1, 2, 3, 4, 5);
secondSet.add(-3, -2, -1, 0, 1, 2);
console.log(secondSet.difference(firstSet).values());
//Note que os números retornados são apenas os números contidos em firstSet e secondSet ao mesmo tempo
//SetTs { items: { '1': [ '1' ], '2': [ '2' ] } }
