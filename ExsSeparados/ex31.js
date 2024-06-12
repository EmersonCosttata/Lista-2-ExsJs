// 31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
// Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
// todos os elementos de V diferentes de A. Mostre os resultados. (Math.floor(Math.random() * 22) - 12)

const prompt = require('prompt-sync')();
const number =  parseInt(prompt("Digite um valor inteiro para A: "))
let matriz = []
matrizDif = []
let cont = 0

for (let i = 0; i < 30; i++) {
    let linha = [];
    let linhaDif = [];
    for (let j = 0; j < 30; j++) {
        linha.push(parseInt(prompt("Digite um numero para Matriz; ")));
            if(linha[j]===number){
            cont++
           }else{
            linhaDif.push(linha[j])
           }
    }
    matriz.push(linha); 
    matrizDif.push(linhaDif); 
}

console.log('Total de elementos iguais a',number," :",cont.toFixed(0))
console.log('Matriz de numeoros diferentes de A: ')
for (let i = 0; i < 30; i++) {
    console.log(matrizDif[i].join(' '));
}