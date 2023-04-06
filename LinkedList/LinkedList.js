"use strict";
exports.__esModule = true;
var Index_1 = require("../Utils/Index");
var Node_1 = require("./Node");
var LinkedList = /** @class */ (function () {
    function LinkedList(equalsFn) {
        if (equalsFn === void 0) { equalsFn = Index_1.defaultEquals; }
        this.count = 0;
        this.head = null;
        this.equalsFn = equalsFn;
    }
    LinkedList.prototype.isEmpty = function () {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.size = function () {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.toString = function () {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.push = function (element) {
        var node = new Node_1["default"](element);
        var headIsNull = this.head == null;
        var current;
        if (headIsNull) {
            this.head = node;
        }
        else {
            current = this.head;
            while ((current === null || current === void 0 ? void 0 : current.next) != null) {
                current = current.next;
            }
            current.next = node;
        }
        this.count++;
    };
    LinkedList.prototype.insert = function (element, position) {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.getElementAt = function (index) {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.remove = function (element) {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.indexOf = function (element) {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.removeAt = function (position) {
        var insideInterval = position >= 0 && position < this.count;
        var positionIsHead = position === 0;
        if (insideInterval) {
            var current = this.head;
            if (positionIsHead) {
                this.head = current === null || current === void 0 ? void 0 : current.next;
            }
            else {
                var previous = void 0;
                for (var i = 0; i < position; i++) {
                    previous = current;
                    current = current === null || current === void 0 ? void 0 : current.next;
                }
                previous === null || previous === void 0 ? void 0 : previous.next = current === null || current === void 0 ? void 0 : current.next;
            }
            this.count--;
            return current === null || current === void 0 ? void 0 : current.element;
        }
        return undefined;
    };
    return LinkedList;
}());
var list = new LinkedList();
list.push(1);
console.log(list);
list.push(2);
console.log(list);
list.push(3);
console.log(list);
list.removeAt(1);
console.log(list);
