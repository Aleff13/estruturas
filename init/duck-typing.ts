//O conceito de duck typing é, se algo se parece com um pato, nada como um pato, fala como um pato, então deve ser um pato
interface duckType {
  quack: string;
  age: number;
  hasFeathers: boolean;
}

let duck = {
  quack: "rodorfo",
  age: 2,
  hasFeathers: true,
};

const printName = (duck: duckType) => {
  const quack = { ...duck };
  console.log(quack);
};

printName(duck);
