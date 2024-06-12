// 27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
// multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
// um vetor V(36). Escrever o vetor V no final.

const prompt = require('prompt-sync')();

let matriz = [];
for (let i = 0; i < 6; i++) {
    let linha = [];
    for (let j = 0; j < 6; j++) {
            linha.push(prompt('Digite um Valor para a Matriz: '))
    }
    matriz.push(linha);
}

let aValor = parseInt(prompt('Digite um valor para A: '))
let vetorTotal = []
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        vetorTotal.push(matriz[i][j]*aValor)
    }
}

console.log('Vetor de 36 numeros * por Valor de A: ')
console.table(vetorTotal)