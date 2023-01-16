//quando trabalhamos com o ts ele nor permite tipas variaveis como no exemplo abaixo
let age: number = 20;
let username: string = "joao";
let isBrazilian: boolean = true;

//porém o typescript consegue validar já na atribuição da variavel e de seu valor qual será o tipo dela

let anos = 20;
let nome = "joao";
let ehBrasileiro = true;

//caso não coloquemos nenhum valor e nenhum tipo em sua criação ela será declarada com o tipo any

let value;
