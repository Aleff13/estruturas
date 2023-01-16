//Para converter um array em string existem alguns métodos prontos como o toString e o join 

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

var lista = generateArray() // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//toString()
console.log(lista.toString()) // 0,1,2,3,4,5,6,7,8,9

//com o join podemos especificar uma string para anteceder para ficar entre os elementos
console.log(lista.join('-')) // 0-1-2-3-4-5-6-7-8-9