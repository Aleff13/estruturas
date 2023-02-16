//A sequencia de fibonacci é outro belo exemplo que podemos utilizar recursão
//Na wikipedia existe mais detalhes sobre a sequencia e suas representações matemáticas https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci
//utilizando iteração com for
var fibonacciIterative = function (number) {
    if (number < 1)
        return 0;
    if (number <= 2)
        return 1;
    var lastNumber = 0;
    var currentNumber = 1;
    var untilNumber = number;
    for (var i = 2; i <= number; i++) {
        untilNumber = currentNumber + lastNumber;
        lastNumber = currentNumber;
        currentNumber = untilNumber;
    }
    return untilNumber;
};
console.log(fibonacciIterative(10));
var fibonacciRecursive = function (number) {
    if (number < 1)
        return 0;
    if (number <= 2)
        return 1;
    return fibonacciRecursive(number - 1) + fibonacciRecursive(number - 2);
};
console.log(fibonacciRecursive(10));
