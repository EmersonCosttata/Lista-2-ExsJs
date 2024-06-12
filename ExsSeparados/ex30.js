// 30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
// contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
// e os vetores criados.  

const prompt =  require('prompt-sync')()

let matriz = [];
let sl = []
let sc = []
let soma = 0
let soma2 = 0

for (let i = 0; i < 5; i++) {
    let linha = [];
    for (let j = 0; j < 5; j++) {
        linha.push(parseInt(prompt("Digite um numero para Matriz; ")));
        soma += linha[j]
    }
    sl.push(soma)
    soma = 0
    matriz.push(linha); 
}

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        soma2 += matriz[j][i]
    }
    sc.push(soma2)
}

console.log('Matriz Original: ')
for (let i = 0; i < 5; i++) {
    console.log(matriz[i].join(' '));
}

console.log('Vetor SL: ')
console.table(sl)
console.log('Vetor SC: ')
console.table(sc)