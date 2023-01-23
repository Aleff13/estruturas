//Existem diversos problemas que podem ser resolvidos utilizando as pilhas.

import ExtendedStack from "./extendedStack";
import Stack from "./Stack";

//Podemos utiliza-los para salvar caminhos percorridos

//Os números binários são a forma com a qual conversamos com os computadores (0, 1)

//Coversão de binário para decimal

//consiste basicamente em dividir um número por 2 até que o resultado da divisão seja igual a 0

const decToBinary = (num: number) => {
  const remStack = new ExtendedStack();

  let number = num;
  let rem;
  let binaryString = "";

  while (number > 0) {
    rem = Math.floor(number % 2); //irá retornar sempre 0 ou 1 como resto da divisão por 2
    remStack.push(rem); //salvamos na pilha o valor que restou
    number = Math.floor(number / 2); //dividimos o numero por 2
  }

  while (!remStack.isEmpty()) {
    binaryString += remStack.pop().toString(); //irá pegar os elementos da pilha incrementando
  }

  return binaryString;
};

console.log(decToBinary(233));
console.log(decToBinary(10));
console.log(decToBinary(1000));
