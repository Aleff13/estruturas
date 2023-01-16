//Inserindo valores em um array

/**
 *Função padrão que retorna um array de 0 a 9
 * @returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const getDefaultArray = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
};

var numbers = getDefaultArray();

console.log(numbers);

//Inserindo valor no final do array
//primeiro note que, a propriedade length irá retornar o tamanho do nosso array
console.log(numbers.length); //10

//porém nosso array vai de 0 -> 9
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   0    │
// │    1    │   1    │
// │    2    │   2    │
// │    3    │   3    │
// │    4    │   4    │
// │    5    │   5    │
// │    6    │   6    │
// │    7    │   7    │
// │    8    │   8    │
// │    9    │   9    │
// └─────────┴────────┘

//ou seja o index 10 seria nosso próximo elemento, logo:
numbers[numbers.length] = 10;

//então:
console.log(numbers);
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   0    │
// │    1    │   1    │
// │    2    │   2    │
// │    3    │   3    │
// │    4    │   4    │
// │    5    │   5    │
// │    6    │   6    │
// │    7    │   7    │
// │    8    │   8    │
// │    9    │   9    │
// │   10    │   10   │
// └─────────┴────────┘

//No caso do js, podemos ter arrays com tamanhos dinamicos, coisa que em algumas linguagens não funcionariam normalmente

//Nossa prática para inserir um elemento no fim do array pode ser resumida ao método .push() que todo objeto da classe Array possui

numbers = getDefaultArray(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers.push(10); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//                                                   ^

console.log(numbers);

//Inserindo valor no inicio do array
//Para realizar essa ação devemos arrastar todos os elementos para um index a frente e inserir um valor em [0]

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │        │ <--
// │    1    │   0    │
// │    2    │   1    │
// │    3    │   2    │
// │    4    │   3    │
// │    5    │   4    │
// │    6    │   5    │
// │    7    │   6    │
// │    8    │   7    │
// │    9    │   8    │
// │   10    │   9    │
// └─────────┴────────┘

Array.prototype.insertFirstPosition = function (value) {
  //aqui nós percorremos o array do fim para o inicio
  for (let i = this.length; i >= 0; i--) {
    //alteramos o valor do elemento
    this[i] = this[i - 1];
  }

  //inserimos o valor que queremos na primeira posição
  this[0] = value;
};

numbers.insertFirstPosition(-2);

console.log(numbers); //[-2, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//                        ^

//Ou seja, o que realizamos foi algo como:
// -> -> -> -> -> -> -> -> -> -> ->
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//[empty, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//[value, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Essa volta toda que realizamos é mais conhecida pelo método .unshift(), mais um herdado da classe Array

numbers = getDefaultArray();

console.log(numbers); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.unshift(-10); //[-10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
