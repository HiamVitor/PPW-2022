// Objeto literal
const pessoa1 = {
    nome: "João",
    sobrenome: "Souza",
    imprimirNome() {
        console.log(this.nome);
    },
    imprimirSobrenome() {
        console.log(this.sobrenome);
    }
};

const pessoa2 = new Object();
pessoa2.nome = 'Maria';
pessoa2.sobrenome = 'Silva';
pessoa2.idade = 30;
pessoa2.rg = 1234567;
pessoa2.imprimirNome = () => {
    console.log(pessoa2.nome);
};
pessoa2.imprimirSobrenome = () => {
    console.log(pessoa2.sobrenome);
};

pessoa1.imprimirNome();
pessoa1.imprimirSobrenome();

pessoa2.imprimirNome();
pessoa2.imprimirSobrenome();