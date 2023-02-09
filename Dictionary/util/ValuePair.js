"use strict";
exports.__esModule = true;
var ValuePair = /** @class */ (function () {
    function ValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    ValuePair.prototype.toString = function () {
        return "[#".concat(this.key, ": ").concat(this.value, "]");
    };
    ValuePair.prototype.get = function () {
        return "".concat(this.key, ", ").concat(this.value);
    };
    return ValuePair;
}());
exports["default"] = ValuePair;
