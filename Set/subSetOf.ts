import SuperSet from "./SuperSet";

//Uma breve simpleficação de conjuntos matemáticos

const naturais10 = new SuperSet()
const integers20 = new SuperSet()

for (let i = -20; i <= 20; i++) {
    integers20.add(i)
}

for (let i = 0; i <= 10; i++) {
    naturais10.add(i)
}

console.log(naturais10.isSubsetOf(integers20)) //true, pois, naturais estão contidos nos inteiros
console.log(integers20.isSubsetOf(naturais10)) //false, pois, inteiros não estão contidos nos naturais
