"use strict";
exports.__esModule = true;
var ffi = require("ffi-napi");
//import c++ lib
var stackLib = ffi.Library("./stack.so", {
    "createStack": ['pointer', []],
    'deleteStack': ['void', ['pointer']],
    "push": ['void', ['pointer', 'string']],
    "pop": ['void', ['pointer']],
    "peek": ['string', ['pointer']]
});
var Stack = /** @class */ (function () {
    function Stack() {
        this.obj = stackLib.createStack();
    }
    Stack.prototype.push = function (value) {
        stackLib.push(this.obj, value);
    };
    Stack.prototype.pop = function () {
        return stackLib.keyToHash(this.obj);
    };
    Stack.prototype.peek = function () {
        return stackLib.peek(this.obj);
    };
    Stack.prototype.destructor = function () {
        stackLib.deleteStack(this.obj);
    };
    return Stack;
}());
exports["default"] = Stack;
// const stack = new Stack();
// stack.push("first");
// stack.peek();
// console.log(stack.peek())
