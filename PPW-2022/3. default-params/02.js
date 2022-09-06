function dividir(numero1, numero2) {
    if(numero1 === undefined) {
        throw new Error('O dividendo é obrigatório');
    } 
    if(numero2 === undefined) {
        throw new Error("O divisor é obrigatório");
    }
    return numero1 / numero2;
}

console.log(dividir(4,2));
// console.log(dividir(4));
// console.log(dividir());

