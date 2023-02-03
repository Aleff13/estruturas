"use strict";
exports.__esModule = true;
var Errorfactory = /** @class */ (function () {
    function Errorfactory() {
    }
    Errorfactory.NotExists = function (value) {
        if (value === void 0) { value = ""; }
        return "".concat(value, " not exists");
    };
    Errorfactory.alreadyExists = function (value) {
        if (value === void 0) { value = ""; }
        return "".concat(value, " already exists");
    };
    return Errorfactory;
}());
exports["default"] = Errorfactory;
