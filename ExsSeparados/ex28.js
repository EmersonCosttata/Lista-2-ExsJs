// 28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
// item:
// a) a soma dos elementos acima da diagonal principal;
// b) a soma dos elementos abaixo da diagonal principal;

let matriz = [];
for (let i = 0; i < 10; i++) {
    let linha = [];
    for (let j = 0; j < 10; j++) {
        linha.push(Math.floor(Math.random()*20));
    }

    matriz.push(linha);
}

function somaDiagonalPrincipal(ma) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}
function somaDiagonalAbaixo(ma) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][matriz.length - 1 - i];
    }
    return soma;
}

console.log('Matriz Original: ')
for (let i = 0; i < 6; i++) {
    console.log(matriz[i].join(' '));
}

console.log('Soma Diagonal Principal:',somaDiagonalPrincipal(matriz))
console.log('Soma Diagonal Abaixo:',somaDiagonalAbaixo(matriz))