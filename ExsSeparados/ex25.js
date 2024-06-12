// 25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
// de cada coluna separadamente.

const prompt =  require('prompt-sync')()

let matriz = [];
let somaLinhas = []

for (let i = 0; i < 15; i++) {
    let linha = [];
    let somas = 0
    for (let j = 0; j < 20; j++) {
            linha.push(parseInt(prompt('Digite um Numero: '))); 
            somas += linha[j]
    }
    matriz.push(linha);
    somaLinhas.push(somas)
}
console.log('Matriz Original: ')
for (let i = 0; i < 15; i++) {
    console.log(matriz[i].join(' '));
}
console.log('Somas de cada coluna: ')
console.log(somaLinhas.join(' '))