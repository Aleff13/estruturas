"use strict";
exports.__esModule = true;
var ErrorMessagefactory_1 = require("../Utils/ErrorMessagefactory");
var util_1 = require("./util");
var Dictionary = /** @class */ (function () {
    function Dictionary(toStrFn) {
        if (toStrFn === void 0) { toStrFn = util_1["default"].defaultToString; }
        this.toStrFn = toStrFn;
        this.table = {};
    }
    Dictionary.prototype.set = function (key, value) {
        //early return
        if (this.hasKey(key)) {
            var msg = ErrorMessagefactory_1["default"].alreadyExists(key);
            console.error(msg);
            return;
        }
        this.table[this.toStrFn(key)] = value;
    };
    Dictionary.prototype.remove = function (key) {
        //early return
        if (!this.hasKey(key)) {
            var msg = ErrorMessagefactory_1["default"].NotExists(key);
            console.error(msg);
            return;
        }
    };
    Dictionary.prototype.hasKey = function (key) {
        return this.table[this.toStrFn(key)] != null;
    };
    Dictionary.prototype.get = function (key) {
        //early return
        if (!this.hasKey(key)) {
            var msg = ErrorMessagefactory_1["default"].NotExists(key);
            console.log(msg);
            return null;
        }
        return this.table[this.toStrFn(key)];
    };
    Dictionary.prototype.clear = function () {
        this.table = {};
    };
    Dictionary.prototype.size = function () {
        return Object.keys(this.table).length;
    };
    Dictionary.prototype.isEmpty = function () {
        return Object.keys(this.table).length ? true : false;
    };
    Dictionary.prototype.keys = function () {
        return Object.keys(this.table);
    };
    Dictionary.prototype.values = function () {
        throw new Error("Method not implemented.");
    };
    Dictionary.prototype.keyValues = function () {
        throw new Error("Method not implemented.");
    };
    Dictionary.prototype.forEach = function (callBackFn) {
        throw new Error("Method not implemented.");
    };
    return Dictionary;
}());
exports["default"] = Dictionary;
var redisAbstraction = new Dictionary();
console.log(redisAbstraction.size());
console.log(redisAbstraction.isEmpty());
redisAbstraction.set("cache", "myStupidValue");
redisAbstraction.set("dois", "myStupidValue");
console.log(redisAbstraction.size());
console.log(redisAbstraction.isEmpty());
console.log(redisAbstraction.get("cache"));
console.log(redisAbstraction.keys());
