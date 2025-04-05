// --------------------------------------------------
//  LISTAS (ARRAYS) EM JAVASCRIPT
// --------------------------------------------------

/*
Um array é uma estrutura que guarda vários valores numa única variável.
Os elementos podem ser de qualquer tipo: número, string, booleano, objetos, etc.
*/

// Criando uma lista (array)
let frutas = ["maçã", "banana", "laranja", "uva"];

console.log("Lista original:", frutas);
console.log("Primeiro item:", frutas[0]); // maçã
console.log("Tamanho da lista:", frutas.length); // 4

// --------------------------------------------------
//  MÉTODOS BÁSICOS DE LISTA
// --------------------------------------------------

// Adicionando no final
frutas.push("abacaxi");
console.log("Com abacaxi (push):", frutas);

// Removendo do final
frutas.pop();
console.log("Removido o último (pop):", frutas);

// Adicionando no início
frutas.unshift("morango");
console.log("Com morango no início (unshift):", frutas);

// Removendo do início
frutas.shift();
console.log("Removido o primeiro (shift):", frutas);

// Procurando posição de um item
let posicao = frutas.indexOf("banana");
console.log("Posição da banana:", posicao);

// Verificando se existe um item
console.log("Tem uva?", frutas.includes("uva")); // true
console.log("Tem melancia?", frutas.includes("melancia")); // false

// Remover por posição
frutas.splice(1, 1); // remove 1 item na posição 1
console.log("Depois do splice:", frutas);

// Copiar parte da lista (sem alterar original)
let novasFrutas = frutas.slice(0, 2); // do índice 0 até antes do 2
console.log("Slice (cópia):", novasFrutas);

// --------------------------------------------------
//  PERCORRER LISTAS (LOOPS)
// --------------------------------------------------

console.log("\nUsando for:");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("\nUsando for...of:");
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("\nUsando forEach:");
frutas.forEach((fruta, indice) => {
    console.log(`Fruta ${indice}: ${fruta}`);
});

// --------------------------------------------------
//  TRANSFORMAR OU FILTRAR LISTAS
// --------------------------------------------------

let numeros = [1, 2, 3, 4, 5];

// .map → transforma os elementos
let dobrados = numeros.map(n => n * 2);
console.log("Números dobrados:", dobrados);

// .filter → filtra os elementos
let pares = numeros.filter(n => n % 2 === 0);
console.log("Números pares:", pares);

// .reduce → reduz tudo a um só valor (acumulador)
let soma = numeros.reduce((total, n) => total + n, 0);
console.log("Soma dos números:", soma);

// --------------------------------------------------
//  LISTA DE OBJETOS
// --------------------------------------------------

let pessoas = [
    { nome: "Letícia", idade: 21 },
    { nome: "João", idade: 30 },
    { nome: "Ana", idade: 18 }
];

// Filtrar pessoas maiores de idade
let maiores = pessoas.filter(p => p.idade >= 18);
console.log("\nMaiores de idade:", maiores);

// Mapear só nomes
let nomes = pessoas.map(p => p.nome);
console.log("Nomes das pessoas:", nomes);

// Encontrar uma pessoa específica
let ana = pessoas.find(p => p.nome === "Ana");
console.log("Pessoa encontrada:", ana);

// --------------------------------------------------
// FIM — Listas são super importantes e poderosas!
// --------------------------------------------------

/*
Você vai usar arrays o tempo todo em JS!
Com eles dá pra:
- armazenar dados vindos do usuário
- manipular respostas de APIs
- fazer lógica de jogos, listas de tarefas, etc.
*/
