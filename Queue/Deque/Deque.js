"use strict";
exports.__esModule = true;
var Deque = /** @class */ (function () {
    function Deque() {
        this.items = [];
        this.items = [];
    }
    Deque.prototype.addFront = function () {
        var _this = this;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        elements.forEach(function (el) { return _this.items.unshift(el); });
    };
    Deque.prototype.addBack = function () {
        var _this = this;
        var elements = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elements[_i] = arguments[_i];
        }
        elements.forEach(function (el) { return _this.items.push(el); });
        return;
    };
    Deque.prototype.removeFront = function () {
        if (this.isEmpty()) {
            return;
        }
        var removed = this.items.shift();
        return removed;
    };
    Deque.prototype.removeBack = function () {
        if (this.isEmpty()) {
            return;
        }
        var removed = this.items.pop();
        return removed;
    };
    Deque.prototype.peekFront = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var front = this.items[0];
        return front;
    };
    Deque.prototype.peekBack = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var back = this.items[this.items.length - 1];
        return back;
    };
    Deque.prototype.isEmpty = function () {
        return this.items.length === 0 ? true : false;
    };
    Deque.prototype.size = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.length;
    };
    Deque.prototype.clear = function () {
        this.items = [];
    };
    Deque.prototype.toString = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.toString();
    };
    return Deque;
}());
exports["default"] = Deque;
// const deque = new Deque();
// deque.addBack(1, 2, 3, 4, 5);
// console.log(deque.toString());
// deque.addBack(6);
// console.log(deque.toString());
// deque.addFront(-1);
// console.log(deque.toString());
// console.log(deque.peekBack());
// console.log(deque.peekFront());
