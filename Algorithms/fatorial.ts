//Vamos usar a recursão para calcular o fatorial de um numero

//fatorial de n é dado por n!
//onde n é multiplicado pelo anterior menos -1 n vezes

//logo 5! = 5.4.3.2.1 onde 1 pode ser ignorado pois n.1 = n

//Primeiro iremos mostrar um exemplo com iterações do tipo for

const factorial = (number: number) => {
    if (number === 0) {
        return 1
    }
    
    let total = 1

    for (let n = number; n > 1; n--) {
        total = total * n
    }

    return total
}

console.log('Utilizando iteração', factorial(5))

const recursiveFactorial = (number: number): number => {
    //caso base number = 0 ou 1    
    if (number === 1 || number === 0) {
        return 1
    }

    return number * recursiveFactorial(number -1)
}

console.log('Utilizando recursão', recursiveFactorial(5))