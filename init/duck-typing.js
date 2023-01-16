"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var duck = {
    quack: "rodorfo",
    age: 2,
    hasFeathers: true,
};
var printName = function (duck) {
    var quack = __assign({}, duck);
    console.log(quack);
};
printName(duck);
