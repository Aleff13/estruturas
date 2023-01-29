import Queue from './Queue'

const queue = new Queue()

console.log(queue.isEmpty())

//Adicionando elementos

queue.enqueue('Maçã', 'Suco de uva', 'Laranja', 'Mamão')

console.log(queue.toString())       //Maçã, Suco de uva, Laranja, Mamão
console.log(queue.size())       //4
console.log(queue.isEmpty())        //false
queue.dequeue()     //remove maçã
queue.dequeue()     //remove suco de uva
console.log(queue.toString())       //Laranja, Mamão
queue.toTable()


