/**
 *Função padrão que retorna um array de 0 a 9
 * @returns [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const getDefaultArray = () => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
};

//--------------------------------------------------------------------------------------------------
//Já sabemos como alterar o fim e no inicio de um array com os métodos, shift, unshift, pop e push
//Agora iremos ver como manipular com base em seu index

//para essas tarefas iremos utilizar o método splice()
//Com este método nós indicamos qual é o index e quanto elementos queremos remover a partir dele

let numbers = getDefaultArray(); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers.splice(5, 3);

console.log(numbers); //[0, 4, 5, 6, 7, 8, 9]

//O método splice possui uma sobrecarga, ou seja, pode realizar mais de um comportamento
//Nesse caso o comportamento é de inserir elementos

//Ao chamar o método passando o segundo elemento com o valor zero com outros valores

numbers.splice(5, 0, 2, 3, 4); //note que adicionamos os valores retirados anteriormente
