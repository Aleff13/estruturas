import SetTs from "./Set";

//Vamos criar um conjunto de números e verificar se todos os seus números são do conjunto dos naturais

const conjuntoGenerico = new SetTs();

for (let i = -5; i < 20; i++) {
  conjuntoGenerico.add(i);
}

console.log(conjuntoGenerico.values());

//como desejamos que nossos números sejam apenas inteiros maiores ou iguais a zero

const conjuntoNarutais = conjuntoGenerico.values().filter((num) => num >= 0);

console.log(conjuntoNarutais);
