"use strict";
exports.__esModule = true;
var SetTs = /** @class */ (function () {
    function SetTs() {
        this.items = {};
        this.items = {};
    }
    SetTs.prototype.add = function () {
        var _this = this;
        var element = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            element[_i] = arguments[_i];
        }
        element.forEach(function (el) {
            if (!_this.has(el)) {
                _this.items[el] = element;
            }
        });
    };
    SetTs.prototype["delete"] = function () {
        var _this = this;
        var element = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            element[_i] = arguments[_i];
        }
        element.forEach(function (el) {
            if (_this.has(el)) {
                delete _this.items[el];
            }
        });
    };
    SetTs.prototype.has = function (element) {
        return element in this.items;
    };
    SetTs.prototype.clear = function () {
        this.items = {};
    };
    SetTs.prototype.size = function () {
        return Object.keys(this.items).length;
    };
    SetTs.prototype.values = function () {
        return Object.keys(this.items);
    };
    return SetTs;
}());
exports["default"] = SetTs;
