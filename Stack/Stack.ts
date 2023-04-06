//Uma pilha/stack é uma lista ordenada de itens que usa o principio de LIFO (o ultimo a entrar é o primeiro a sair)

//Na vida real possuimos diversos exemplos de pilhas, seja uma pilha de livros ou uma pilha roupas
//nos códigos temos o exemplo dos stashs que são trechos de códigos salvos em uma pilha para retorno posterior

class Stack {
  private items: any[];

  constructor(values: any[] = []) {
    this.items = values;
  }

  /**
   * Adiciona um elemento, ou varios no topo
   */
  public push(...elements: (number | number[] | string | string[])[]) {
    elements.forEach((el: any) => {
      this.items.push(el);
    });
  }

  /**
   * Remove o elemento do topo e retorna ele
   */
  public pop() {
    return this.items.pop();
  }

  /**
   * @return o elemento no topo da pilha
   */
  public peek() {
    return this.items[this.items.length - 1];
  }

  /**
   *
   * @returns true caso tenha valores, false caso vazio
   */
  public isEmpty(): boolean {
    const isStackEmpty = this.items.length === 0 ? true : false;

    return isStackEmpty;
  }

  /**
   * Remove todos os elementos da pilha
   */
  public clear(): void {
    this.items = [];
  }

  /**
   *
   * @returns numero de elementos na pilha
   */
  public size(): number {
    return this.items.length;
  }
}

export default Stack;

//Podemos iniciar com valores
// const pilha = new Stack([2, 4, 5, 2]);

// //Ou sem valores
// const stack = new Stack();

// pilha.size() //0
// pilha.isEmpty() //true
// pilha.push(2, 4, 5)
// pilha.push(3)
// pilha.push(5)
// pilha.push(7)

// // ┌─────────┬───┬───┬───┬───┬───┬───┐
// // │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │
// // ├─────────┼───┼───┼───┼───┼───┼───┤
// // │  items  │ 2 │ 4 │ 5 │ 3 │ 5 │ 7 │
// // └─────────┴───┴───┴───┴───┴───┴───┘

// pilha.isEmpty() //false
// pilha.peek() //7
// pilha.size() //4

//console.table(pilha)

// ┌─────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐
// │ (index) │ 0 │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │
// ├─────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼───┤
// │  items  │ 2 │ 4 │ 5 │ 2 │ 2 │ 4 │ 5 │ 3 │ 5 │ 7 │
// └─────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
