let frutas = ["maça", "pêra", "goiaba", "melância"];

let [primeira, segunda, terceira, quarta] = frutas;

console.log(primeira, segunda, terceira, quarta);

let [primeiro] = frutas;
console.log(primeiro);

let [, segundo] = frutas;
console.log(segundo);

let [,,terceiro] = frutas;
console.log(terceiro);

let [,,,quarto] = frutas;
console.log(quarto);
