// Declaração e Variaveis
var nome ="fiap";
console.log(nome)

let idade= "18";
console.log(idade)

const sobrenome ="fiapinho";
console.log(sobrenome)

//undefined 

let exemplo;
console.log(exemplo)

//nula
let exemplo1 = null
console.log(exemplo1)

//Tipos de variaveis 

let ex1 = "Fiap";
console.log(typeof ex1)

let ex2 = 25;
console.log(typeof ex2)

let ex3 = true
console.log(typeof ex3)

let ex4 = {};
console.log(typeof ex4)

let ex5 = [];
console.log(typeof ex5)

//Conversões

//float => string
let numfloat = 123.456;
console.log(numfloat.toString())

//string => float
let numstring = "12.963"
console.log(parseFloat(numstring))

//int => string
let numint = 100;
console.log(numint.toString())

//string => int
let numString = "120"
console.log(parseInt(numString))

//metodos

//metodos length - verifica o tamanho da string
let frase = "O munda da tecnologia";
console.log(frase.length)

//metodo indexof/lastIndexOf -retorna um trecho do seu codigo
let texto = "Programação Sustentável ão";
console.log(texto.lastIndexOf("ão"))

//metodo slice - retorna parte do texto passando inicio e o final
let info = "Programação de ponta";
console.log(info.slice(2,6))


