let frutas = ["maça", "laranja", "pêra", "pêra", "laranja"];
console.log(frutas);

let frutasSet = new Set(frutas);
console.log(frutasSet);

frutas = [...frutasSet];
console.log(frutas);

console.log([...new Set(frutas)]);


