"use strict";
//Os arrays são listas ordenadas das quais podemos manipular os elementos de qualquer indice/posição
exports.__esModule = true;
var Stack_1 = require("./Stack");
//Algumas estruturas de dados como as pilhas nos fornecem mais controle sobre a remoção e inserção dos valores, temos também as pilhas
//Como o javascript não possui nativamente uma classe de pilha, iremos criar nossa própria classe \0/
var pilha = new Stack_1["default"]([2, 3, 4]);
pilha.pop();
console.table(pilha);
