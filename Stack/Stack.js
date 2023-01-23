"use strict";
//Uma pilha/stack é uma lista ordenada de itens que usa o principio de LIFO (o ultimo a entrar é o primeiro a sair)
exports.__esModule = true;
//Na vida real possuimos diversos exemplos de pilhas, seja uma pilha de livros ou uma pilha roupas
//nos códigos temos o exemplo dos stashs que são trechos de códigos salvos em uma pilha para retorno posterior
var Stack = /** @class */ (function () {
    function Stack(values) {
        if (values === void 0) { values = []; }
        this.items = values;
    }
    /**
     * Adiciona um elemento, ou varios no topo
     */
    Stack.prototype.push = function () {
        var _this = this;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        elements.forEach(function (el) {
            _this.items.push(el);
        });
    };
    /**
     * Remove o elemento do topo e retorna ele
     */
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    /**
     * @return o elemento no topo da pilha
     */
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    /**
     *
     * @returns true caso tenha valores, false caso vazio
     */
    Stack.prototype.isEmpty = function () {
        var isStackEmpty = this.items.length === 0 ? true : false;
        return isStackEmpty;
    };
    /**
     * Remove todos os elementos da pilha
     */
    Stack.prototype.clear = function () {
        this.items = [];
    };
    /**
     *
     * @returns numero de elementos na pilha
     */
    Stack.prototype.size = function () {
        return this.items.length;
    };
    return Stack;
}());
exports["default"] = Stack;
//Podemos iniciar com valores
// const pilha = new Stack([2, 4, 5, 2]);
// //Ou sem valores
// const stack = new Stack();
// pilha.size() //0
// pilha.isEmpty() //true
// pilha.push(2, 4, 5)
// pilha.push(3)
// pilha.push(5)
// pilha.push(7)
// // ┌─────────┬───┬───┬───┬───┬───┬───┐
// // │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │
// // ├─────────┼───┼───┼───┼───┼───┼───┤
// // │  items  │ 2 │ 4 │ 5 │ 3 │ 5 │ 7 │
// // └─────────┴───┴───┴───┴───┴───┴───┘
// pilha.isEmpty() //false
// pilha.peek() //7
// pilha.size() //4
//console.table(pilha)
// ┌─────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
// │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
// ├─────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
// │  items  │ 2 │ 4 │ 5 │ 2 │ 2 │ 4 │ 5 │ 3 │ 5 │ 7 │
// └─────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
