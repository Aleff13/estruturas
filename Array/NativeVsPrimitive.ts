//Este arquivo possui os exemplos utilizados nas analises de performance do uso de métodos em arrays/matrizes

//Nosso primeiro exemplo será utilizando o método forEach em uma matrix 1/1000 

/**
 * Esta função retorna uma matrix 1Xj
 * @param j quantidade de elementos
 */
const generateMatrix = (j = 10) => {
    let matrix = [];
    for(let i = 0; i < j; i++){
        matrix[i] = i
    }
    return matrix
}

/**
 * Está função retorna uma matriz linha x coluna
 * @param linha 
 * @param coluna 
 * @returns 
 */
const generateMatrixIxJ = (linha = 10, coluna = 10) => {
    let matrix = [];
    for(let i = 0; i < linha; i++){
        matrix[i] = []
        for(let j = 0; j < coluna; j++){
            matrix[i][j] = j}
    }

    return matrix //matrix.length = linha
}

/**
 * Está função retorna um array linha x coluna x prof
 * @param linha 
 * @param coluna 
 * @param prof
 * @returns 
 */
const generateMatrixIxJxZ = (linha = 10, coluna = 10, prof = 10 ) => {
    let matrix = [];
    for(let i = 0; i < linha; i++){
        matrix[i] = []
        for(let j = 0; j < coluna; j++){
            matrix[i][j] = []
            for(let z = 0; z < prof; z++){
                matrix[i][j][z] = z
            }
        }
    }

    return matrix //matrix.length = linha
}

//-------------------------------------------------------------------------

//let example = generateMatrix(1000)

// console.time('iteração 1x1000 de forma primitiva')
// for(let i = 0, n=example.length; i < n; i++){}
// console.timeEnd('iteração 1x1000 de forma primitiva')

// console.time('iteração 1x1000 de forma nativa')
// example.forEach(element => {})
// console.timeEnd('iteração 1x1000 de forma nativa')

//-------------------------------------------------------------------------

//let example = generateMatrixIxJ(1000, 1000)

// console.time('iteração 1000x1000 de forma primitiva')
// for(let i = 0, n=example.length; i < n; i++){
//     for(let j = 0; j < n; j++){

//     }
// }
// console.timeEnd('iteração 1000x1000 de forma primitiva')

// console.time('iteração 1000x1000 de forma nativa')
// example.forEach(elementI => {
//     elementI.forEach(elementJ => {

//     })
// })
// console.timeEnd('iteração 1000x1000 de forma nativa')

//-------------------------------------------------------------------------

// let example = generateMatrixIxJxZ(700, 700, 700)

// console.time('iteração 1000x1000x1000 de forma primitiva')

// for(let i = 0; i < example.length; i++){
//     for(let j = 0; j < example.length; j++){
//         for(let z = 0; z < example.length; z++){

//         }
//     }
// }
// console.timeEnd('iteração 1000x1000x1000 de forma primitiva')

// console.time('iteração 1000x1000x1000 de forma nativa')

// example.forEach(elementI => {
//     elementI.forEach(elementJ => {
//         elementJ.forEach(elementZ => {

//         })
//     })
// })
// console.timeEnd('iteração 1000x1000x1000 de forma nativa')

//Calculo de tamanho em bytes
//console.info(new Blob(example).size)