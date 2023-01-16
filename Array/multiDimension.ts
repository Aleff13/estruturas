//Criando arrays multi dimensionais
const multi = []
multi[0] = [1, 2, 3, 4, 5, 6, 7]
multi[1] = ['one', 'two', 'thre', 'four', 'five', 'six', 'seven']
multi[2] = [123, 123, 123, 123, 123, 123, 123]


//criando uma matrix 3x3 de forma primitiva
console.time('matrix creation')

const matrix = []
for (let i = 0; i < 3; i++) {
    matrix[i] = [];
    for (let j = 0; j < 3; j++) {
        matrix[i][j] = [];
        for (let z = 0; z < 3; z++) {
            matrix[i][j][z] = i + j + z
        }
    }
}
console.timeEnd('matrix creation')

//iterando os elementos de uma matrix 3x3 com métodos primitivos
console.time('cube iteration')

for (let i = 0; i < matrix.length; i++) {
    //[]
    for (let j = 0; j < matrix.length; j++) {
        //[ [], [], ... n[] ]
        for (let z = 0; z < matrix.length; z++) {
            //[ [ [], [], ... n[] ], [], ... n[] ]
        }
    }
}

console.timeEnd('cube iteration')

//iterando os elementos de uma matrix 3x3 com métodos prontos
console.time('Native iteration')
matrix.forEach(elementI => {
    //cada elemento aqui possui a seguinte representação [ [ 0, 1, 2 ], [ 1, 2, 3 ], [ 2, 3, 4 ] ], ou seja, é um array biDimensional
    elementI.forEach(elementJ => {
        //cada elemento aqui possui a seguinte representação [ 0, 1, 2 ] ou seja, é um array convencional, ou matriz 1xn
        elementJ.forEach(elementZ => {
        })
    })
})
console.timeEnd('Native iteration')

//Ao executar esse código note como a diferença de tempo de execução é gritante,
//a iteração em um array multidimencional se torna 10x mais lenta


