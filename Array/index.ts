//Arrays são a estrutura de dados mais simples possivel em memória

//Um array armazena valores que são todos do mesmo tipo, sequencialmente
//a principio somente o js permite arrays com valores de tipos distintos
//mas uma boa prática é permitir somente com o mesmo tipo

//logicamente isso garante que podemos iterar no array usando propriedades/valores coerentes

//Imagine que precisemos armazenar as temperaturas ao longo de cada
// mês do ano

const averageTempJan = 31.9;
const averageTempFev = 35.3;

const averageTempDez = 60.8;

//note que o valor pode escalar muito se trabalharmos com mais de um ano
//como poderiamos administrar todas essas variaveis??

//bom por isso possuimos os Arrays XD

//inicialização
const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;

//graficamente temos algo como:

//------------------------------------------------------------------
//|          |             |                           |
//|   31.9   |     35.3    | ..........................|  valor
//|    [0]   |     [1]     |                           |   [n]
//------------------------------------------------------------------

//de fato criar e inicializar um array é algo simples
let daysOfWeek = new Array();
// note que inicializamos ele como uma classe

//o construtor da classe array pode receber alguns parametros, pode ser vazio, um numero inteiro indicando o tamanho ou um outro array
daysOfWeek = new Array(7);
console.log("um array com 7 valores vazios/não iniciados", daysOfWeek);

daysOfWeek = new Array([2, 3, 5]);
console.log("um array de array(s)", daysOfWeek);

//podemos inclusive iniciar um array com os valores pré-definidos também
daysOfWeek = ["sunday", "monday", ".....", "saturday"];
console.log("array já iniciado", daysOfWeek);

//como vimos acima, os arrays, são objetos instanciados a partir de uma classe abstrata Array, ou seja, elas possuem métodos e propriedades
//para verificar esse métodos e propriedades, descomente a linha abaixo e aperte ctrl + space no ponto final

//const properties = daysOfWeek.

//                              ^
//                              |

//OBS:
//Outra maneira de visualizar todas as propriedades de um objeto instanciado é com a seguinte sintaxe:

const props = Object.getOwnPropertyNames(daysOfWeek);
console.log(props); // [ '0', '1', '2', '3', 'length' ]

//ou seja os valores são tidos como propriedades desse objeto, assim como a propriedade length que nos retorna o tamanho desse array

console.log(daysOfWeek.length); //4

const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(daysOfWeek));
methods.shift();
console.log(methods); //tirando length, os outros valores são métodos herdados de Array

// [
//     'constructor',    'concat',        'copyWithin',
//     'fill',           'find',          'findIndex',
//     'lastIndexOf',    'pop',           'push',
//     'reverse',        'shift',         'unshift',
//     'slice',          'sort',          'splice',
//     'includes',       'indexOf',       'join',
//     'keys',           'entries',       'values',
//     'forEach',        'filter',        'flat',
//     'flatMap',        'map',           'every',
//     'some',           'reduce',        'reduceRight',
//     'toLocaleString', 'toString',      'at',
//     'findLast',       'findLastIndex'
//   ]
