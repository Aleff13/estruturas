"use strict";
exports.__esModule = true;
var stack_lib_1 = require("./stack.lib");
var Stack = /** @class */ (function () {
    function Stack() {
        this.obj = stack_lib_1["default"].createStack();
    }
    Stack.prototype.push = function (value) {
        stack_lib_1["default"].push(this.obj, value);
    };
    Stack.prototype.pop = function () {
        return stack_lib_1["default"].keyToHash(this.obj);
    };
    Stack.prototype.peek = function () {
        return stack_lib_1["default"].peek(this.obj);
    };
    Stack.prototype.destructor = function () {
        stack_lib_1["default"].deleteStack(this.obj);
    };
    return Stack;
}());
exports["default"] = Stack;
// const stack = new Stack();
// stack.push("first");
// stack.peek();
// console.log(stack.peek())
