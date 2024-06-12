// 32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
// cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
// matriz lida e a modificada.

const prompt = require('prompt-sync')();
let matriz = []
let maiorLinha = 0
for (let i = 0; i < 12; i++) {
    let linha = [];
    for (let j = 0; j < 13; j++) {
        linha.push(parseInt(prompt("Digite um numero para Matriz; ")));
            if(linha[j]>maiorLinha)
            maiorLinha=linha[j]
    }
    for (let j = 0; j < 3; j++) {
            linha[j]=linha[j]/maiorLinha
    }
    matriz.push(linha); 
}
console.log('Matriz Final:')
for (let i = 0; i < 12; i++) {
    console.log(matriz[i].join(' '));
}