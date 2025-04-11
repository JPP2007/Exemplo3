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

//Operadores aritimeticos

const a = 10;
const b = 20;

console.log( a + b);
console.log( a - b);
console.log( a * b);
console.log( a / b);

//Operadores logicos

const c = 20;
const d = 30;

console.log( c < d);
console.log( c > d);
console.log( c > d && c < 10);
console.log( c > d || d > c);
console.log( c == d || d <= c)

//Operadores de comparação 

const e = 10;
const f = 30;

console.log(e == d);
console.log(e === f);
console.log(e != f);

//Condicional

//if 
if(true){
    console.log("é verdadeiro")
}

let exempl1= 1
if(exempl1 ==1){
    console.log("esta correto")
}

//if/else
let nom = "fiap"

if(nom == "Fiap"){
    console.log("Nome correto")
    // document.write("Nome certo")
}
else{
    console.log("Nome Errado")
    // document.write("Nome Errado")
}

//if encadeado ou aninhado


let idadi = 51;
if (idadi <= 14) {
    console.log("Não pode entrar")
}
else if (idadi > 14 && idadi <= 18) {
    console.log("pode entrar e curtir")
}
else if (idadi > 18 && idadi <= 50) {
    console.log("Perigo seus pais estão na balada")
}
else {
    console.log("Você deve ficar no sofá assistindo")
}
//switch case

let time ="corinthians";

switch(time){
    case "corinthians":
        console.log("melhor time")
        break;
    case "sao paulo":
        console.log("é tão ruim que consegue me casa")
        break;
    case "palmeiras":
        console.log("sm mundial")
        break;
    default:
        console.log("nenhuma das opção validas")
}

//Ternario

let valor=100;
let resultado = valor == 100 ? "valor certo": "valor errado"
console.log(resultado);

let nota = 6
let media = nota >= 6 ? "aprovado" : "reprovado"
console.log(media);
