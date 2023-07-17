const ffi = require("ffi-napi")

//import c++ lib
const stackLib = ffi.Library("./stack.so", {
    "createStack": ['pointer', []],
    'deleteStack': ['void', ['pointer']],
    "push": ['void', ['pointer', 'string']],
    "pop": ['void', ['pointer']],
    "peek": ['string', ['pointer']],
});

class Stack {
    obj: any;

    constructor() {
      this.obj = stackLib.createStack();
    }

    push(value: string){
        stackLib.push(this.obj, value);
    }
  
    pop() {
        return stackLib.keyToHash(this.obj);
    }

    peek() {
        return stackLib.peek(this.obj);
    }
  
    destructor() {
        stackLib.deleteStack(this.obj);
    }
  }

export default Stack

// const stack = new Stack();
// stack.push("first");
// stack.peek();

// console.log(stack.peek())