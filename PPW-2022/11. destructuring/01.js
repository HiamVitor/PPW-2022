class Pessoa {
  constructor(nome = "", nomeMeio = "", sobrenome = "") {
    this.nome = nome;
    this.nomeMeio = nomeMeio;
    this.sobrenome = sobrenome;
  }
}

const pessoa = new Pessoa("Fernando", "Henrique", "Cardoso");

// ES 5
function imprimirHelloWorld(pessoa) {
  console.log(`Hello World, ${pessoa.nome}!`);
}
imprimirHelloWorld(pessoa);

// ES 6
const imprimirHelloWorldDestructuring = ({ nome }) => {
  console.log(`Hello World, ${nome}!`);
}
imprimirHelloWorldDestructuring(pessoa);
