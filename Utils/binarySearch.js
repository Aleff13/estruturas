"use strict";
//Busca binária
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
// A busca binaria consiste em dividir a lista no meio e verificar se o valor esta antes ou depois, e dividir no meio realizando isso até encontrar o valor
var BinarySearch = /** @class */ (function () {
  function BinarySearch() {}
  BinarySearch.chunk = function (list, length) {
    if (length === void 0) {
      length = Math.floor(list.length / 2);
    }
    var chunks = [];
    var i = 0;
    var n = list.length;
    while (i < n) {
      chunks.push(list.slice(i, (i += length)));
    }
    return {
      firstSlice: __spreadArray([], chunks[0], true),
      secondSlice: __spreadArray([], chunks[1], true),
    };
  };
  var _a;
  _a = BinarySearch;
  BinarySearch.searchValueInList = function (list, value) {
    //early return
    if (list[0] > value || list[list.length - 1] < value) {
      return "".concat(value, " is not in the list");
    }
    var _b = _a.chunk(list),
      firstSlice = _b.firstSlice,
      secondSlice = _b.secondSlice;
    var elementInHalf = list[Math.floor(list.length / 2)];
    var firstOrLastInFirstSlice =
      firstSlice[firstSlice.length - 1] === value || firstSlice[0] === value;
    var firstOrLastInSecondSlice =
      secondSlice[secondSlice.length - 1] === value || secondSlice[0] === value;
    if (elementInHalf === value) {
      return "".concat(value, " found in half of ").concat(list);
    }
    //verifica se é o ultimo elemento
    if (firstOrLastInFirstSlice) {
      return ""
        .concat(value, " is first/last in first slice = ")
        .concat(firstSlice);
    }
    //verifica se é o ulitmo elemento
    if (firstOrLastInSecondSlice) {
      return ""
        .concat(value, " is first/last in second slice = ")
        .concat(secondSlice);
    }
    //varifica se o valor esta na primeira parte
    if (firstSlice[firstSlice.length - 1] > value) {
      console.log("Inside of first slice ".concat(firstSlice));
      return _a.searchValueInList(firstSlice, value);
    }
    //varifica se o valor esta na segunda parte
    if (secondSlice[secondSlice.length - 1] > value) {
      console.log("Inside of second slice ".concat(secondSlice));
      return _a.searchValueInList(secondSlice, value);
    }
  };
  return BinarySearch;
})();
exports["default"] = BinarySearch;
var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(BinarySearch.searchValueInList(table, 0));
console.log(BinarySearch.searchValueInList(table, 1));
console.log(BinarySearch.searchValueInList(table, 2));
console.log(BinarySearch.searchValueInList(table, 3));
console.log(BinarySearch.searchValueInList(table, 4));
console.log(BinarySearch.searchValueInList(table, 5));
console.log(BinarySearch.searchValueInList(table, 6));
console.log(BinarySearch.searchValueInList(table, 7));
console.log(BinarySearch.searchValueInList(table, 8));
console.log(BinarySearch.searchValueInList(table, 9));
console.log(BinarySearch.searchValueInList(table, 10));
console.log(BinarySearch.searchValueInList(table, 11));
