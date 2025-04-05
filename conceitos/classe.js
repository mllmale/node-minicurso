// ---------------------------------------------
// EXPLICAÇÃO SOBRE CLASSES EM JAVASCRIPT
// ---------------------------------------------

/*
    Em JavaScript (e Node.js), uma classe é uma forma de criar objetos
    com propriedades e métodos (funções). É como um molde para criar coisas.

    Sintaxe básica:

    class NomeDaClasse {
        constructor() {
            // propriedades
        }

        metodo1() {
            // ação
        }
    }
*/

// ---------------------------------------------
// EXEMPLO 1: Classe simples - Pessoa
// ---------------------------------------------

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Oi, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
    }
}

// Criando uma instância (objeto) da classe Pessoa
const leticia = new Pessoa("Letícia", 21);
console.log(leticia.apresentar()); // Oi, meu nome é Letícia e tenho 21 anos.


// ---------------------------------------------
// EXEMPLO 2: Classe com herança - Funcionario
// ---------------------------------------------

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade); // chama o construtor da classe Pessoa
        this.cargo = cargo;
    }

    apresentarComCargo() {
        return `${this.apresentar()} Eu sou ${this.cargo}.`;
    }
}

const maria = new Funcionario("Maria", 30, "Engenheira");
console.log(maria.apresentarComCargo()); 
// Oi, meu nome é Maria e tenho 30 anos. Eu sou Engenheira.


// ---------------------------------------------
// EXEMPLO 3: Classe com métodos estáticos
// ---------------------------------------------

class Calculadora {
    static somar(a, b) {
        return a + b;
    }

    static dividir(a, b) {
        if (b === 0) return "Não pode dividir por 0";
        return a / b;
    }
}

console.log(`10 + 5 = ${Calculadora.somar(10, 5)}`);
console.log(`20 / 4 = ${Calculadora.dividir(20, 4)}`);


// ---------------------------------------------
// CONCLUSÃO:
// ---------------------------------------------

/*
- `constructor()` é uma função especial que roda quando usamos `new`.
- `this` se refere ao objeto criado.
- Podemos herdar uma classe usando `extends` e chamar a "classe mãe" com `super()`.
- Métodos `static` são chamados diretamente pela classe, sem precisar de `new`.

Esses conceitos são muito úteis pra organizar melhor o código em Node.js.
Você pode usar classes para representar usuários, produtos, serviços, etc.
*/
