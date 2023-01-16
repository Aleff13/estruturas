//Métodos de iteração

//Nesse arquivo iremos ver na prática alguns métodos de iteração e casos de uso

/**
 * Esta função retorna uma matrix 1Xj
 * @param j quantidade de elementos
 */
const generateMatrix = (j = 10) => {
    let matrix = [];
    for(let i = 2; i < j; i++){
        matrix[i] = i
    }
    return matrix
}

/**
 * Verifica se um valor é par, função que usaremos em conjunto com os métodos
 * @param value 
 * @returns 
 */
const isPair = (value) => {
    // console.log(value)
    return value % 2 === 0 ? true : false;
}

let foo = generateMatrix() // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                                
//Every, itera até que o array devolva false, logo, qualquer número impar irá retornar o false

foo.every(isPair);

foo = [2, 4, 6, 7, 8, 9]
//              ^

console.log(foo.every(element => isPair(element))) //false, ou seja algum elemento era diferente de par

//Some, ao contrário do every, ele para quando encontra um valor true

foo = [1, 3, 5, 7, 8, 9]
//                 ^

console.log(foo.some(element => isPair(element))) // true, algum elemento era par


//forEach, uma iteração básica que percorre cada elemento do array
foo.forEach((element, index) => {
    console.log({index}, {element})
})

//map, iterando um array e trazendo um novo array
//podemos verificar cada elemento do nosso array trazendo um novo array mostrando qual é par e qual é impar
console.log(foo.map(element => isPair(element)))

//filter, itera um array trazendo um novo array com os resultados verdadeiros
console.log(foo.filter(element => isPair(element)))

//reduce, talvez um dos métodos mais importantes