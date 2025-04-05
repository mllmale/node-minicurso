// iniciar solitando abrir o terminal na pasta e executar linha abaixo
// node app.js (para ter console.log("hello"))

console.log("hello world");

var nome = "maria";
var sobrenome = "Gonçalves";

//console.log("eu me chamo",nome," e meu sobrenome é ",sobrenome)
// console.log("eu me chamo "+nome+" e meu sobrenome é "+sobrenome)
console.log(`eu me chamo ${nome} e meu sobrenome é ${sobrenome}`)


function somar(a,b){
    return a+b;
}

let a = 10;
let b = 20;

console.log(`A soma de ${a} + ${b} = ${somar(a,b)}`)