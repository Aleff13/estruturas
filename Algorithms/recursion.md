# Recursão/Recursion

A recursão é um méotodo muito eficaz para escrever algoritimos que acessem estruturas como árvores ou grafos.

## Tópicos

- Entendendo recursão
- Como calcular fatorial de números
- Sequencia de fibonacci
- Call stacks ou pilha de chamadas

## Entendendo a recursão

"Dividir para conquistar" Talvez seja a expressão chave para entender a recursão. Já que basicamente dividimos um problema complexa varias pequenas partes até resolver o problema.

Métodos recursivos podem chamar a sí mesmos:

```ts
const recursiveFunc = (foo) => {
  recursiveFunc(foo);
};
```

Ela também pode ser vista como recursiva caso tenha uma chamada implicita

```ts
const recursiveFunc1 = (foo) => {
  recursiveFunc2(foo);
};

const recursiveFunc2 = (foo) => {
  recursiveFunc1(foo);
};
```

Para evitar um loop infinito as recursões possuem algo chamado de caso base, uma condição na qual não ocorrem recursões, ou seja, é um ponto de parada. Algo como um false dentro de uma condição em um loop while(true), muito usado para game over em pequenos jogos.

Exemplo em python

```py
while true:

    funcaoRecursiva(foo)

    if (jogadorMorreu()):
        return false

print('game over')
```

Em TS/JS podemos pensar em algo como:

```ts
const entendendoRecursao = (voceEntendeuRecursao: boolean) => {
  const resposta = confirm("Voce entendeu recursao?");

  if (resposta === true) {
    return true;
  }

  entendendoRecursao(resposta);
};
```

Note que o método entendendoRecursao continuara chamando a si mesmo até que você tenha entendido a recursão xD

Nessa situação nosso caso base é resposta ser igual a true
