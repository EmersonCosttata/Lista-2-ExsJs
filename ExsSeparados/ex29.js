// 29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
// a) da linha 4 de M;
// b) da coluna 2 de M;
// c) da diagonal principal;
// d) todos os elementos da matriz M.
// Escrever essas somas e a matriz. 

const prompt =  require('prompt-sync')()

let matriz = [];
let contador1 = 0;
let somaA = 0;
let somaB =  0;
let somaC = 0;
let somaD = 0;

for (let i = 0; i < 5; i++) {
    let linha = [];
    for (let j = 0; j < 5; j++) {
        linha.push(parseInt(prompt("Digite um numero para Matriz; ")));
        somaD += linha[j]
    }
    somaC += linha[contador1]
    contador1++
    matriz.push(linha); 
}

console.log('Matriz Original: ')
for (let i = 0; i < 5; i++) {
    console.log(matriz[i].join(' '));
}

for (let i = 0; i < 5; i++) {
    somaA += matriz[3][i];
    somaB += matriz[i][1];
}
console.log('Soma da linha 4 de M: ',somaA)
console.log('Soma da coluna 2 de M: ',somaB)
console.log('Soma da diagonal principal: ',somaC)
console.log('Soma de todos os elementos da matriz M ',somaD)