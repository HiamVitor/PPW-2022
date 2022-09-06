class Pessoa {
  constructor(nome, sexo = "F", dataNascimento = new Date()) {
    this.nome = nome;
    this.sexo = sexo;
    this.dataNascimento = dataNascimento;
  }
}

let felipe = new Pessoa("Felipe", "M", new Date(1996, 1, 20));
console.log(felipe.nome);
console.log(felipe.sexo);
console.log(felipe.dataNascimento);

let { nome } = felipe;
console.log(nome);

let { nome: n } = felipe;
console.log(n);
