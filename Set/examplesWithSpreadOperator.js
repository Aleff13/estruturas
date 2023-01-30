var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var setA = new Set([1, 2, 3]);
var setB = new Set([2, 3, 4, 5]);
console.log(new Set(__spreadArray([], setA, true).filter(function (x) { return setB.has(x); })));
console.log(new Set(__spreadArray([], setA, true).filter(function (x) { return !setB.has(x); })));
