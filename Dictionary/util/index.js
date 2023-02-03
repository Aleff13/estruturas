"use strict";
exports.__esModule = true;
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.defaultToString = function (item) {
        if (item === null) {
            return "NULL";
        }
        else if (item === undefined) {
            return "UNDEFINED";
        }
        else if (typeof item === "string" || item instanceof String) {
            return "".concat(item);
        }
        return item.toString();
    };
    return Utils;
}());
exports["default"] = Utils;
