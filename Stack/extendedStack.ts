import Stack from "./Stack";

//Podemos adicionar mais métodos na nossa pilha criando uma classe que herde as propriedades e métodos da classe Stack

//Nesse caso adicionaremos os seguintes métodos

// toString()

// concat()

class ExtendedStack extends Stack {

    /**
     * 
     * @returns an string of stack elements
     */
    public toString(){
        return this.items.toString()
    }

    /**
     * This methods concats two stacks
     * @param stack 
     */
    public concat(stack: Stack | ExtendedStack){
        this.items = this.items.concat(stack.items)
    }
}

export default ExtendedStack

// const stack = new ExtendedStack()

// stack.push(2, 1, 1, 3)

// console.log(stack.toString())

// //concatenando duas pilhas

// const queue = new ExtendedStack()
// queue.push(2, 3, 4, 5)

// stack.concat(queue)

// console.log(stack.toString())
