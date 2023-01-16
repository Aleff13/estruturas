//Em typescript temos vantagens com relação a declaração de arrays, pois o efeito do duckTyping irá inferir a tipagem

let numbers = [1, 2, 3, 4, 5] //ao passar o mouse em cima de "number" já iremos notar a tipagem number[]

//Note o exemplo de push() abaixo mostrando o problema com a tipagem
numbers.push('asasd')

//O problema é que mesmo assim ele permitira que seja inserido valores diferentes de numeros
console.log(numbers)

//A solução nessas situações é a criação de interfaces que tipem as entradas de dados