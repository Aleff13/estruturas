//iteração é basicamente percorrer cada elemento do array

//por exemplo, exibir todos os elementos do array daysOfWeak

const daysOfWeak = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

daysOfWeak.forEach((day) => {
  console.log(day);
});

//descobrindo os 20 primeiros numeros da sequencia de fibonacci

const fibonacci = new Array(20);
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

fibonacci.forEach((num, index) => {
  console.log(`item n°${index} = ${num}`);
});

//podemos então criar uma função que retorna um array com a quantia de numeros de fibonacci que desejamos

const getFibonacciNumbers = (quantity = 10) => {
  let fibonacci = new Array(quantity);
  fibonacci[1] = 1;
  fibonacci[2] = 1;

  for (let i = 3; i < quantity; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
};

//console.log(getFibonacciNumbers(100));
