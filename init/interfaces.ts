//Temos dois conceitos de interface em ts

//O primeiro fala sobre atribuir tipos a uma variavel

//Pode ser usados como declaração de quais métodos e propriedades determinado objeto terá

interface Person {
  name: string;
  age: number;
}

//Agora podemos passar essa interface como

let pessoa: Person;

//'pessoa' terá as propriedades .name e .age

//podemos verificar que alguns tipos primitivos possuem "interfaces"

//objetos do tipo number geralmente possuem um método .toString() e os objetos do tipo string geralmente possuem propriedades como .lenght

pessoa = {
  name: "joazinho",
  age: 21,
};

pessoa.age.toString();
pessoa.name.length;
