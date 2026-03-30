// Declarações e Variáveis
// var, let e const

var nome = "Fiap";
console.log(nome);

var nome = "Teste";
console.log(nome);

if(true){
    let apelido = "Fiapinho";
    console.log(apelido);
}

const taxaJuros = 0.05;
console.log(taxaJuros);

//typeof - verifica o tipo da variável
var exemplo = "Olá dev-var";
console.log(typeof exemplo);
let exemplo1 = "Olá dev-let";
console.log(exemplo1);
const exemplo2 = "Olá dev-const";
console.log(exemplo2);

let exemplo3 = 10;
console.log(typeof exemplo3);

let exemplo4 = true;
console.log(typeof exemplo4);

let exemplo5 = {nome1: "teste"};
console.log(typeof exemplo5);

let exemplo6 = ["Java", "C#", "PHP"];
console.log(exemplo6);

// valor undefined
let exemplo7;
console.log(exemplo7);

//valor vazio
let exemplo8 = null;
console.log(exemplo8);

// OPERADORES ARITMÉTICOS

const valor1 = 10;
const valor2 = 20;

console.log(valor1 + valor2);
console.log(valor1 - valor2);
console.log(valor1 * valor2);
console.log(valor1 / valor2);

//OPERADORES LÓGICOS
//  == comparação
// === valor e tipo (escritamente igual)
// && = E (todas condições ten que ser verdadeiras)
// || = OU (uma das condições tem que ser verdadeira)

console.log(valor1 < valor2);
console.log(valor1 > 10 && valor2 < 10);
console.log(valor2 < 100 || valor1 > 10);
console.log(valor1 == valor2);
console.log(valor2 === valor1);

//Exercicio 1
let precoProduto = 10;
let desconto = 0.10; 
precoProduto -= desconto * precoProduto;
console.log("O preço final é " + precoProduto);

//Exercicio 2
const a = 20;
const b = 10;
console.log("O resultado da comparação é: ", a === 20 && b >= 10);


//Exercicio 3

let usuario = true;
let senha = true;
if(usuario == true && senha === true){
    console.log("Transação Autorizada");
}
