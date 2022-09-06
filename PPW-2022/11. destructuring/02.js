class Pessoa {
  constructor(nome = "", nomeMeio = "", sobrenome = "") {
    this.nome = nome;
    this.nomeMeio = nomeMeio;
    this.sobrenome = sobrenome;
  }
}

const pessoa = new Pessoa("Fernando", "Henrique", "Cardoso");

// ES 6
const imprimirHelloWorldDestructuring = ({ nome: n }) => {
  console.log(`Hello World, ${n}!`);
};
imprimirHelloWorldDestructuring(pessoa);
