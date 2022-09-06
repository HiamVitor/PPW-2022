function subtracao(n1 = 0, n2 = 0) {
    if(typeof n1 !== 'number') {
        throw new Error('n1 não é um número');
    }
    if(typeof n2 !== 'number') {
        throw new Error('n2 não é um número');
    }
    return n1 - n2;     
}

console.log(subtracao());
console.log(subtracao(1));
console.log(subtracao(1, '-'));