//Para fins de estudo iremos
//Iremos analisar como esses valores são criados

import HashTable from "./HashTable";

//vamos criar um array que irá armazenar os hashs
const hashs = new Array();

//Iremos instanciar um objeto a partir de FooHash
const hashTable = new HashTable();

hashs.push(hashTable.put("myKey1", "123456789"));
hashs.push(hashTable.put("myKey2", "12345678910"));
hashs.push(hashTable.put("umaKeyAleatoria", "12345678910"));
hashs.push(hashTable.put("umaKeyAleatoria2", "12345678910"));

console.table(hashs);

// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │   21   │   --> myKey1
// │    1    │   22   │   --> myKey2
// │    2    │   17   │   --> umaKeyAleatoria
// │    3    │   30   │   --> umaKeyAleatoria2
// └─────────┴────────┘

//Por Baixo dos panos o objeto já transforma uma key em hash

//Mas podemos implementar uma super classe que implementa alguns métodos a mais
