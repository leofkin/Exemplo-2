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

const num3 ="20";
const num4 =30;

console.log(num3 < num4);
console.log(num3 < num4 && num4 < 50) //Só se deve usar && (and/e) em questões verdadeiras
console.log(num3 > num4 || num4 > num3) //Só se deve utilizar || (ou/or) quando pelo menos 1 seja verdadeiro 
console.log(num4 === num3 || num4 > num3) // == é comparação


//Operadores de Comparação
const num5 =25;
const num6 =35;

console.log(num5 == num6); //compara
console.log(num5 === num6); //compara e verifica o tipo da variável
console.log(num5 != num6); //diferente

//Estrutura condicional

//IF

let Valor = 100;

if(Valor == 100){
console.log("Valor Correto")
}


//if / else

let Valor1 = 120;

if(Valor1 == 100){
    console.log("Valor Correto")
}else{
    console.log("Valor Errado")
}

//if / else - encadeado ou aninhado

let Idade = 14;

if(Idade < 14){
    console.log("Não pode entrar")

}
else if(Idade >= 14 && Idade <= 18){
    console.log("Pode entrar")
}
else if(Idade > 50 && Idade <70){
    console.log("Você não tem idade para entrar")
}
else{
    console.log("Fica em casa")
}

// Condição ternária

let valor2 =300;

let resultado = valor2 == 300 ? "Certo": "Errado"; // ? = if, : = else
console.log(resultado)

// Switch Case

let time ="Bahia";

switch(time){
    case "Bahia":
        console.log("Melhor Time")
        break;
    case "São Paulo":
        console.log("Não é um time")
        break;
    case "Palmeiras":
        console.log("Não tem Mundial")
        break;
    default:
        console.log("Nenhuma das opções")
        break;
}


// Estrutura de Laço de Repetição

for(let i=0;i<10;i++){
    console.log("O valor de I é :", i)
}

// While

let w=0;

while(w <=10){
console.log("o valor de w é :",w)
    w++;
}

// do While

let z= 10;

do{
    console.log(" do While é ",z)
    z++;
}while(z <=100)
