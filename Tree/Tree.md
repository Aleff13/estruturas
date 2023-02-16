# Árvore/Tree

A árvore geralmente é uma estrutura muito utilizada quando a necessidade é a de buscar dados de forma rápida e eficaz

Ela pode herdar algumas ideias da busca binária e outros algoritimos de busca, como o caso da `Árvore binária de busca`

## Tópicos

* Terminologia
* Árvore vs árvore binária de busca
* Criar uma árvore binária de busca
* Percorrendo uma árvore
* Adicionar e remover nós
* Árvore AVL

## Estrutura de árvore

Nada mais é que uma forma abstrata de estrutura com hierárquia, na vida real temos exemplos como árvores genealógicas

## Termos e representações visuais

* `Nós/nodes/nodos/keys` --> todo nó possui um pai, exceto a raiz, pode possuir ou não outros nós
* `Subarvore/nó interno` --> um nó que pode ser visto como arvore, ou seja possui outros nós
* `folha/nó externo` --> o nó mais externo

```  horizontal
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

```  vertical
           12
         /    \
        8      17
       /  \      \
      7    10     21
                 /  \
               20    23

```







