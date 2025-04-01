//DECLARAÇÕES E VARIAVEIS
var nome ="fiap";
console.log(nome)

let idade =21;
console.log(idade)

const sobrenome ="Cidade";
console.log(sobrenome)
//undefined
let aula;
console.log(aula)
//null
let valor = null;
console.log(valor)

let exemplo1={};

let exemplo2=[];

//TIPOS VARIAVEIS
let exemplo3 = 10;
console.log(typeof exemplo3)

let exemplo4 = "Aula"
console.log(typeof exemplo4)

let exemplo5 =true;
console.log(typeof exemplo5)

let exemplo6 =["huguinho","zezinho","luizinho"]
console.log(typeof exemplo6)


//CONVERSÕES

//float => inteiro
let numfloat =123.456;
console.log(parseInt(numfloat));

//string +> float
let numString ="547.987";
console.log(parseFloat(numString))

//Float => string

let numfloat1 =554.665
console.log(numfloat1.toString());

let numInt=100;
console.log(numInt.toString());


//METODOS - PARTE 1

//LENGTH - Verifica o tamanho da string

let frase ="o mundo da Tecnologia";
console.log(frase.length)

//indexOf - retorna um trecho de um texto
let texto = "Programação Sustentável"
console.log(texto.indexOf("a"))

//slice = retorna uma parte de um texto apontando o inicio e o final
let info="processamento de ponta"
console.log(info.slice(0,10))


//Operadores aritméticos

const num1 =10;
const num2 =20;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

//Operadores lógicos

const num3 =20;
const num4 =30;

console.log(num3 < num4);
console.log(num3 < num4 && num4 < 50) //Só se deve usar && (and/e) em questões verdadeiras
console.log(num3 > num4 || num4 > num3) //Só se deve utilizar || (ou/or) quando pelo menos 1 seja verdadeiro 
console.log(num3 == num4 || num4 <= num3) // == é comparação
