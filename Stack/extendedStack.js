"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Stack_1 = require("./Stack");
//Podemos adicionar mais métodos na nossa pilha criando uma classe que herde as propriedades e métodos da classe Stack
//Nesse caso adicionaremos os seguintes métodos
// toString()
// concat()
var ExtendedStack = /** @class */ (function (_super) {
    __extends(ExtendedStack, _super);
    function ExtendedStack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     *
     * @returns an string of stack elements
     */
    ExtendedStack.prototype.toString = function () {
        return this.items.toString();
    };
    /**
     * This methods concats two stacks
     * @param stack
     */
    ExtendedStack.prototype.concat = function (stack) {
        this.items = this.items.concat(stack.items);
    };
    return ExtendedStack;
}(Stack_1["default"]));
exports["default"] = ExtendedStack;
// const stack = new ExtendedStack()
// stack.push(2, 1, 1, 3)
// console.log(stack.toString())
// //concatenando duas pilhas
// const queue = new ExtendedStack()
// queue.push(2, 3, 4, 5)
// stack.concat(queue)
// console.log(stack.toString())
