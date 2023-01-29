"use strict";
exports.__esModule = true;
var Queue = /** @class */ (function () {
    function Queue() {
        this.count = 0; //quantidade de elementos que já estiveram na fila
        this.lowestCount = 0; //index do numero mais baixo
        this.items = {};
    }
    Queue.prototype.enqueue = function () {
        var _this = this;
        var element = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            element[_i] = arguments[_i];
        }
        element.forEach(function (el) {
            _this.items[_this.count] = el;
            _this.count++;
        });
        return;
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        var result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    };
    Queue.prototype.isEmpty = function () {
        return this.count - this.lowestCount === 0;
    };
    Queue.prototype.size = function () {
        return this.count - this.lowestCount;
    };
    Queue.prototype.clear = function () {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    };
    Queue.prototype.toString = function () {
        if (this.isEmpty()) {
            return "";
        }
        var objString = "".concat(this.items[this.lowestCount]);
        for (var i = this.lowestCount + 1; i < this.count; i++) {
            objString = "".concat(objString, ", ").concat(this.items[i]);
        }
        return objString || "";
    };
    Queue.prototype.toTable = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        console.table(this.items);
        return;
    };
    return Queue;
}());
exports["default"] = Queue;
// const queue = new Queue()
// console.log(queue)
// queue.enqueue(21)
// queue.enqueue(22)
// queue.enqueue(23)
// queue.enqueue(24)
// queue.enqueue(25)
// queue.enqueue(26)
// queue.enqueue(27)
// console.log(queue)
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// queue.dequeue()
// console.log(queue.toString())
