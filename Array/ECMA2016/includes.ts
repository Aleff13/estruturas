//O método includes retorna true caso um elemento seja encontrado no array, e false caso contrario

/**
 * Esta função retorna um array com j elementos
 * @param j quantidade de elementos
 */
var generateArray = (j = 10) => {
    let matrix = [];
    for(let i = 0; i < j; i++){
        matrix[i] = i
    }
    return matrix
}

var lista = generateArray() //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(lista.includes(2)) //true

console.log(lista.includes(-2)) //false