//Operador de espalhamento ...valor
var testeArray = [1, 2, 3, 4, 5, 5];
//podemos passar todos os valores com o operador de espalhamento para dentro de um componente, função ou método
console.log(testeArray);
console.log.apply(console, testeArray);
