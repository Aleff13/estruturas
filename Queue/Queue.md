# Fila/Queue

As filas ou queues são parecidas com as pilhas porém não seguem o LIFO, seguem o FIFO

## FIFO

First In First Out, quem entra primeiro, sai primeiro

A adição de elementos ocorre na cauda, enquanto a remoção acontece na frente.

Tópicos que estarão nos documentos dessa pasta

* Estrutura de fila
* Estrtutura de deque
* Adicionando elementos nas filas e deques
* Removendo elementos das filas e deques
* Simulação de filas circulares com o jogo de Batata Quente
* Verificando se uma frase é um palindromo usando um deque

## Exemplos de filas

* Fila da vida real XD
* Fila de documentos a serem impressos

No arquivo Queue.ts temos uma classe responsável por representar a estrutura de fila

```
     ┌─────────┬─────────┬───┬───┬───┬───┬───┬───┬───┬───┬───┬─────────────┐
     │ Frente  │         │   │   │   │   │   │   │   │   │   │    Fim      │
<--- ├─────────┼─────────┼───┼───┼───┼───┼───┼───┼───┼───┼───┼─────────────┤ <---
     │  Maçã   │ Banana  │ . │ . │ . │ . │ . │ . │ . │ . │ . │  laranja    │
     └─────────┴─────────┴───┴───┴───┴───┴───┴───┴───┴───┴───┴─────────────┘
```

Removendo elementos da fila (Dequeue)

O diagrama abaixo representaria o seguinte trecho de código

```ts
import Queue from './Queue'

const queue = new Queue()

queue.enqueue('Maçã', 'Banana', 'Pera', 'Laranja')

queue.dequeue()
```

```

     .enqueue('Maçã', 'Banana', 'Pera', 'Laranja')
     ┌────────┬─────────┬─────────┬──────────┐
     │  Maçã  │ Banana  │  Pera   │ laranja  │
     └────────┴─────────┴─────────┴──────────┘

      .dequeue           Frente                      Fim
<--- ┌─────────┐       ┌─────────┬─────────────┐─────────────┐ <---
     │  Maçã   │ <---> │ Banana  │  Pera       │  laranja    │
     └─────────┴       └─────────┴─────────────┘─────────────┘
```
