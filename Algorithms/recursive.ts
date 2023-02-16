const base = 10;
let val = 0;

const recursiveFunction = (value: number) => {
  //caso base
  if (base <= value) {
    console.log("atingiu caso base");
    return;
  }

  console.log("continua");
  value++;
  recursiveFunction(value);
};

recursiveFunction(val);
