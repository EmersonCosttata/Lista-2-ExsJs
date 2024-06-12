// 33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
// elementos da diagonal principal com a média dos elementos da diagonal secundária.
//.          ;
//  .      ; 
//    .  . 

const prompt = require('prompt-sync')();
let matriz = []
let diagonalP = []
let diagonalS = 0
let cont = 0
let cont2 = 2
for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(parseInt(prompt("Digite um numero para Matriz; ")));
    }
    matriz.push(linha); 
}

for (let i = 0; i < 3; i++) {
    diagonalP.push(matriz[i][cont])
    diagonalS+=matriz[i][cont2]
    cont++
    cont--
}
diagonalS= diagonalS/3
console.log('Matriz Original:')
for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join(' '));
}

console.log('Elementos da diagonal principal muntiplicados com a média dos elementos da diagonal secundária:')
for (let i = 0; i < 3; i++) {
    console.log((diagonalP[i]*diagonalS).toFixed(2));
}