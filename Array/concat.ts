//Neste arquivo iremos trabalhar com multiplos arrays e como unilos em um só array de forma prática

let foo = [1, 2, 3]
let bar = [4, 5, 6]

//Para unir arrays possuimos mais um método nativo conhecido como concat(), onde passamos o array que queremos unir

let fooBar = foo.concat(bar) //[ 1, 2, 3, 4, 5, 6 ]

//Esse método permite que passemos multiplos arrays e valores

fooBar = fooBar.concat(7, 8, 9, [10, 11, 12]) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
