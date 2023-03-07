# Listas ligadas

É uma estrutura semelhante a um array porém mais dinâmica, podendo crescer indeterminadamente

Muito semelhante a esta ilustração:

```
         node                node                node                node                undefined
     ┌─────┬─────┬       ┌─────┬─────┬       ┌─────┬─────┬       ┌─────┬─────┬        ┬─────────────┐
head │value│ next│       │value│ next│       │value│ next│       │value│ next│        │             │
---> ├     ┼     ┼       ├     ┼     ┼       ├     ┼     ┼       ├     ┼     ┼        ┼             ┤
     │     │     │ ----->│     │     │ ----->│     │     │ ----->│     │     │ -----> │             │
     └─────┴─────┴       └─────┴─────┴       └─────┴─────┴       └─────┴─────┴        ┴─────────────┘
```

# Topicos

- A estrutura de dados de lista ligada
- Adição de elementos em uma lista ligada
- Remoção de elementos
- Como usar a classe LinkedList
- Listas duplamente ligadas
- Listas ligadas circulares
- Listas ligadas ordenadas
- Implementação de uma pilha com listas ligadas

## Vantagens

Não é necessário deslocar elementos quando eles são adicionados ou removidos

## Implementação

Para implementar uma lista ligada é necessário a utilização de ponteiros

Pensando em exemplos do cotidiano podemos imaginar um trem, em que cada vagão é ligado um ao outro em fila, possuindo um head
