//Lá no inicio vimos que os arrays em js não possuem uma tipagem muito forte como Java ou c#

//Por isso existe uma outra classe em Ts/Js conhecida como TypedArray, com ela podemos trabalhar arrays tipados

//Sintaxe

//let numberArray = new TypedArray(10);
//                        ^^^           Nesse substituimos "TypedArray" pela classe deajada

//exemplo com int32

let int32Array = new Int32Array(10);

console.log(int32Array)

int32Array[2] = 'ola' // note o erro de tipagem disparado nessa linha

//Além do Int32Array existem diversas outras tipagens, como o Float32Array, Int8Array e etc