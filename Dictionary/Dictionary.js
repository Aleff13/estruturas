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
        if (key != null && value != null) {
            var tableKey = this.toStrFn(key);
            this.table[tableKey] = this.toStrFn(value);
            return;
        }
        return;
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
        return Object.keys(this.table).length ? false : true;
    };
    Dictionary.prototype.keys = function () {
        //early return
        if (this.isEmpty()) {
            return [];
        }
        return this.keyValues().map(function (valuePair) { return valuePair.key; });
    };
    Dictionary.prototype.values = function () {
        var _this = this;
        //early return
        if (this.isEmpty()) {
            return [];
        }
        var keys = Object.keys(this.table);
        var values = new Array();
        keys.forEach(function (key) {
            values.push(_this.table[_this.toStrFn(key)]);
        });
        return values;
    };
    Dictionary.prototype.keyValues = function () {
        var _this = this;
        //early return
        if (this.isEmpty()) {
            return [];
        }
        var keys = Object.keys(this.table);
        var values = new Array();
        console.log({ keys: keys });
        keys.forEach(function (key) {
            var valuePair = "".concat(key, ", ").concat(_this.table[_this.toStrFn(key)]);
            values.push(valuePair);
        });
        return values;
    };
    Dictionary.prototype.forEach = function (callBackFn) {
        //iremos pegar todos os valores
        var valuePairs = this.keyValues();
        valuePairs.forEach(function (value) { });
    };
    return Dictionary;
}());
exports["default"] = Dictionary;
