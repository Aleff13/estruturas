# Árvore/Tree

A árvore geralmente é uma estrutura muito utilizada quando a necessidade é a de buscar dados de forma rápida e eficaz

Ela pode herdar algumas ideias da busca binária e outros algoritimos de busca, como o caso da `Árvore binária de busca`

## Tópicos

- Terminologia
- Árvore vs árvore binária de busca
- Criar uma árvore binária de busca
- Percorrendo uma árvore
- Adicionar e remover nós
- Árvore AVL

## Estrutura de árvore

Nada mais é que uma forma abstrata de estrutura com hierárquia, na vida real temos exemplos como árvores genealógicas

## Termos e representações visuais

- `Nós/nodes/nodos/keys` --> todo nó possui um pai, exceto a raiz, pode possuir ou não outros nós
- `Subarvore/nó interno` --> um nó que pode ser visto como arvore, ou seja possui outros nós
- `folha/nó externo` --> o nó mais externo

```horizontal
       o -> folha
      /
     o  -> nó interno
    / \
   o   o -> folha
  /
 o  -> raiz
  \
   o  -> folha
```

# Árvore(Tree) vs árvore binária de busca(Binary Search Tree)

Em um árvore comum cada nó possui no máximo dois nós filhos, um a direita e um a esquerda, isso ajuda na escrita de algoritimos.

Na árvore de busca, os nós filhos são dispostos em uma lógica que facilite sua busca, como o exemplo de colocar valores menores na esquerda e valores maiores na direita, algo como

```vertical
           12
         /    \
        8      17
       /  \      \
      7    10     21
                 /  \
               20    23

```

## Tipos de percurso/iteração

As arvores podem ser percorridas de diversas formas, dentre elas temos:

- Em ordem/in-order -> consiste em percorrer os nós da arvore em ordem crescente
- pre-ordem/pre-order -> realiza a iteração primeiramente pelos nós e depois chega aos descendentes
- pós-ordem/post-order -> percorre os nós depois de precorrer os descendentes

## In-order

![image](https://user-images.githubusercontent.com/83561751/219772835-83a8e5b9-046c-47d7-ad2c-5e8a12ac15d3.png)

## Pre-order

![image](https://user-images.githubusercontent.com/83561751/219773713-4410b8b3-f533-4c06-a542-50d5ec32a2c3.png)

## Post-order

![image](https://user-images.githubusercontent.com/83561751/219774367-e71dd547-27f9-4a88-a680-2c0c6536753b.png)
