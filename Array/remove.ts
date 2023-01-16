//Remoção de elementos
/**
 *Função padrão que retorna um array de 0 a 9
 * @returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const getDefaultArray = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
};

//Para remover um valor do final do array utilizamos o método .pop()

let numbers = getDefaultArray(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.pop(); //[0, 1, 2, 3, 4, 5, 6, 7, 8]
//                                        ^

// Removendo um elemento da primeira posição
// Movemos cada elemento para uma posição anterior e no final removemos o elemento vazio
Array.prototype.firstPop = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, undefined ]
  this.pop(); // remove o undefined resultante [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
};

numbers = getDefaultArray(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.firstPop();

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Novamente a classe Array nos mostra o quanto é completa, pois esse método também já existe, é conhecido como .shift()

numbers = getDefaultArray(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.shift();

console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

//Adicionando elementos no array pelo seu index
Array.prototype.AddByIndex = function (value: any, index: number) {
  if (!this[index]) {
    throw new Error("Este index não existe no array");
  }

  this[index] = value;
};
