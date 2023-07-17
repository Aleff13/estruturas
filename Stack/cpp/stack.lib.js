"use strict";
exports.__esModule = true;
var ffi = require("ffi-napi");
//import c++ lib
var stackLib = ffi.Library("../cpp/stack.so", {
    "createStack": ['pointer', []],
    'deleteStack': ['void', ['pointer']],
    "push": ['void', ['pointer', 'string']],
    "pop": ['void', ['pointer']],
    "peek": ['string', ['pointer']]
});
exports["default"] = stackLib;
