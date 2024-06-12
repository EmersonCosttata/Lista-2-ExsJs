// 34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
// cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
// multiplicações.
const prompt =  require('prompt-sync')()
let matriz = []
for (let i = 0; i < 50; i++) {
    let linha = [];
    for (let j = 0; j < 50; j++) {
        linha.push(parseFloat(prompt("Digite um numero para Matriz; ")));
    }
    matriz.push(linha); 
}

for (let i = 0; i < 50; i++) {
    let dP = matriz[i][i];
    for (let j = 0; j < 50; j++) {
        matriz[i][j] =matriz[i][j]* dP;
    }
}

console.log("Matriz após as multiplicação pela diagonal linha:");
for (let i = 0; i < 50; i++) {
    console.log(matriz[i].join(' '));
}