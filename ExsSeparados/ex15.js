// 15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
// final, mostre quais são os números pares que foram digitados e em que posições eles
// estão armazenados.

const prompt =  require('prompt-sync')()
let vetor = []

for (let index = 0; index <=10; index++) {
    let temp = parseInt(prompt('Digite um Numero Inteiro: '))
    vetor.push({ posicao: index, num: temp });
}
console.log("Numeros pares e suas posições: ")
console.tab(NumeroPar(vetor))

function NumeroPar(numeros){
    let newvetor = []
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i].num% 2 === 0)
        newvetor.push({ posicao: i, num: numeros[i].num });
    }
return newvetor 
}

