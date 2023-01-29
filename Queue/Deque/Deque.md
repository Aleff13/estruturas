# Deques

Os deques são um tipo especial de filas, na qual são popularmente conhecidos como fila de duas pontas ou double-ended queue

Logo, muitos conceitos das filas poderão ser aplicados nessa estrutura

## FIFO

First In First Out, quem entra primeiro, sai primeiro

## LIFO 

Last in First Out, quem entra por ultimo sai primeiro

Eles podem aproveitar tanto dos conceitos de filas como de pilhas

## Exemplos de deques

* Uma pessoa que acabou de comprar um ingresso poderia retornar ao inicio da fila simplesmente para pedir informações

* Se uma pessoa estiver aborrecida ela pode simplesmente sair do final da fila

* No dia a dia de programador temos a lista de operações para desfazer (undo)
sempre que realizarmos uma operação ela será colocada com um push, como em uma pilha, quando o usuario quiser desfazer uma operação de pop será efetuada.

* No dia a dia de um usuario comum temos o histórico do navegador

No arquivo Deque.ts temos uma classe responsável por representar a estrutura de deque

O diagrama abaixo representaria o seguinte trecho de código

```ts
import Deque from "./Deque";

const browserHistory = new Deque();

//Historico de navegador
browserHistory.addFront('https://google.com')
browserHistory.addBack('https://google.com/maps')
browserHistory.addBack('https://google.com/maps/y=123123&x=12312312')
browserHistory.addBack('https://google.com/images')

//see last page
const lastPage = browserHistory.peekBack()
const firstPage = browserHistory.peekFront()

console.log('lastPage', lastPage)
console.log('firstPage', firstPage)

//see all history
console.log('Histórico', browserHistory.toString())

//clean history
browserHistory.clear()

console.log('Histórico:', browserHistory.toString())
```

```
     ┌──────────────────────┬───────────────────────────┬─────────      
     │  https://google.com  │  https://google.com/maps  │   ......              
     └──────────────────────┴───────────────────────────┴─────────   

<--- removeFront                                                    removeBack --->
     ┌─────────────────────┐       ┌────────────┬        ┌──────────────────────────────┐
     │  https://google.com │ <---> │ Histórico  │  <---> │ https://google.com/images    │
     └─────────────────────┴       └────────────┴        └──────────────────────────────┘
 addFront --->                                                     <--- addBack
```
