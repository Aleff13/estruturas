"use strict";
exports.__esModule = true;
exports.defaultEquals = exports.compare = exports.CompareEnum = void 0;
var CompareEnum;
(function (CompareEnum) {
    CompareEnum[CompareEnum["LESS_THAN"] = -1] = "LESS_THAN";
    CompareEnum[CompareEnum["BIGGER_THAN"] = 1] = "BIGGER_THAN";
    CompareEnum[CompareEnum["EQUALS"] = 0] = "EQUALS";
})(CompareEnum = exports.CompareEnum || (exports.CompareEnum = {}));
var compare = function (a, b) {
    if (a === b) {
        return CompareEnum.EQUALS;
    }
    return a < b ? CompareEnum.LESS_THAN : CompareEnum.BIGGER_THAN;
};
exports.compare = compare;
var defaultEquals = function (a, b) {
    return a === b;
};
exports.defaultEquals = defaultEquals;
