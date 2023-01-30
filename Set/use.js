"use strict";
exports.__esModule = true;
var Set_1 = require("./Set");
//Vamos criar um conjunto de números e verificar se todos os seus números são do conjunto dos naturais
var conjuntoGenerico = new Set_1["default"]();
for (var i = -5; i < 20; i++) {
    conjuntoGenerico.add(i);
}
console.log(conjuntoGenerico.values());
//como desejamos que nossos números sejam apenas inteiros maiores ou iguais a zero
var conjuntoNarutais = conjuntoGenerico.values().filter(function (num) { return num >= 0; });
console.log(conjuntoNarutais);
