const ffi = require("ffi-napi")
//import c++ lib
const stackLib = ffi.Library("../cpp/stack.so", {
    "createStack": ['pointer', []],
    'deleteStack': ['void', ['pointer']],
    "push": ['void', ['pointer', 'string']],
    "pop": ['void', ['pointer']],
    "peek": ['string', ['pointer']],
});

export default stackLib