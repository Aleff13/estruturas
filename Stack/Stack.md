# Pilhas/Stacks

São estruturas de dados semelhantes as listas, porém obedecem o principio LIFO 'Last in first out'.

Ou seja, o último a entrar é o primeiro a sair

Exemplo de classe representando uma pilha 
```ts
class Stack {
  items: any[];

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
```

Criando uma pilha a partir da nossa classe

```ts
const pilha = new Stack([2, 3, 4])
```

O último elemento que entrou foi o '4', logo ele será o primeiro a sair

```
┌─────────┬───┬───┬───┐
│ (index) │ 0 │ 1 │ 2 │
├─────────┼───┼───┼───┤
│  items  │ 2 │ 3 │ 4 │
└─────────┴───┴───┴───┘
                    ^
```
                    
```ts
pilha.pop()
```

```
┌─────────┬───┬───┐      ┬───┐
│ (index) │ 0 │ 1 │      │ 2 │
├─────────┼───┼───┤  ->  ┼───┤
│  items  │ 2 │ 3 │      │ 4 │
└─────────┴───┴───┘      ┴───┘
                           ^
```

Nossa classe de pilha não possui métodos para remover outros elementos que não sejam o elemento do ultimo indice