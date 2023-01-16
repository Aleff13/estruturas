"use strict";
//Temos dois conceitos de interface em ts
//Agora podemos passar essa interface como
var pessoa;
//agora pessoa terá as propriedades .name e .age
//podemos verificar que alguns tipos primitivos possuem esses tipos de interfaces
//objetos do tipo number geralmente possuem um método .toString() e os objetos do tipo string geralmente possuem propriedades como .lenght
pessoa = {
    name: "joazinho",
    age: 21,
};
pessoa.age.toString();
pessoa.name.length;
