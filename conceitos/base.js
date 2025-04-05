// -------------------------------------------------
//  VARIÁVEIS
// -------------------------------------------------

/*
Existem três formas de declarar variáveis:
- var: mais antiga, escopo de função (evitar)
- let: escopo de bloco, valor pode mudar
- const: escopo de bloco, valor constante (não muda)
*/

var nome = "Letícia";
let idade = 21;
const cidade = "São Paulo";

console.log(nome, idade, cidade);

// -------------------------------------------------
//  OPERADORES MATEMÁTICOS
// -------------------------------------------------

let a = 10;
let b = 3;

console.log("Soma: " + (a + b));         // 13
console.log("Subtração: " + (a - b));    // 7
console.log("Multiplicação: " + (a * b));// 30
console.log("Divisão: " + (a / b));      // 3.333...
console.log("Módulo (resto): " + (a % b));// 1
console.log("Exponenciação: " + (a ** b));// 1000

// Operadores de incremento e decremento
a++; // a = 11
b--; // b = 2
console.log("Incrementado: ", a);
console.log("Decrementado: ", b);

// -------------------------------------------------
//  CONDICIONAIS
// -------------------------------------------------

/*
Condicionais servem para executar blocos diferentes de código
com base em decisões.
*/

let nota = 7;

if (nota >= 7) {
    console.log("Aprovado!");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// Operador ternário
let resultado = (nota >= 7) ? "Aprovado" : "Reprovado";
console.log("Resultado (ternário):", resultado);

// -------------------------------------------------
//  ESTRUTURAS DE REPETIÇÃO (REPETIDORES)
// -------------------------------------------------

// 🔁 for
console.log("\nUsando for:");
for (let i = 0; i < 5; i++) {
    console.log("i =", i);
}

// 🔁 while
console.log("\nUsando while:");
let contador = 0;
while (contador < 3) {
    console.log("contador =", contador);
    contador++;
}

// 🔁 do...while
console.log("\nUsando do...while:");
let x = 0;
do {
    console.log("x =", x);
    x++;
} while (x < 2);

// -------------------------------------------------
//  OPERADORES DE COMPARAÇÃO E LÓGICOS
// -------------------------------------------------

let n1 = 10;
let n2 = 20;

// Comparação
console.log(n1 == n2);  // false
console.log(n1 != n2);  // true
console.log(n1 > n2);   // false
console.log(n1 < n2);   // true
console.log(n1 >= 10);  // true
console.log(n2 <= 20);  // true

// Diferença entre == e ===
console.log(10 == "10");   // true (só valor)
console.log(10 === "10");  // false (valor e tipo)

// Operadores lógicos
console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

