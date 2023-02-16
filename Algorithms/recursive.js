var base = 10;
var val = 0;
var recursiveFunction = function (value) {
    //caso base
    if (base <= value) {
        console.log("atingiu caso base");
        return;
    }
    console.log("continua");
    value++;
    recursiveFunction(value);
};
recursiveFunction(val);
