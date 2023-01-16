# Array

Array é a uma estrutura de dados simples e linear em memória

Um array armazena valores que são todos do mesmo tipo e sequencialmente

- A principio o js permite arrays com valores de tipos distintos,
  mas uma boa prática é inserir elementos do mesmo tipo

- Em outras linguagens precisamos indicar o tamanho do nosso Array e o tipo de dado que irá receber

Alias, isso garante que podemos iterar no array usando propriedades/valores coerentes sem que erros ocorram

Em Js/Ts os Arrays são objetos instanciados a partir da classe [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Inicializando um array em Js/Ts

```ts
const averageTemp = [];
averageTemp[0] = 31.9;
averageTemp[1] = 35.3;
```

Graficamente temos algo como:

```
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │ 31.9   │
│    1    │ 35.3   │
└─────────┴────────┘
```

De fato, criar/instanciar um Array é bem algo simples

```ts
let daysOfWeek = new Array();
```

Note que instanciamos a partir da classe Array, sendo assim, temos alguns valores que podemos passar no construtor

Para visualizar todos os métodos e propriedades desse objeto podemos executar o seguinte código:

```ts
const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(daysOfWeek));
console.log("propriedades: ", methods.shift());
methods.shift();
console.log({ methods });
```

```
propriedades: length
métodos: [
    'concat',        'copyWithin',  'fill',
    'find',          'findIndex',   'lastIndexOf',
    'pop',           'push',        'reverse',
    'shift',         'unshift',     'slice',
    'sort',          'splice',      'includes',
    'indexOf',       'join',        'keys',
    'entries',       'values',      'forEach',
    'filter',        'flat',        'flatMap',
    'map',           'every',       'some',
    'reduce',        'reduceRight', 'toLocaleString',
    'toString',      'at',          'findLast',
    'findLastIndex'
  ]
```
