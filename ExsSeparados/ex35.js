// 35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
// conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
// estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
// vetor pode ser preenchido quantas vezes forem necessárias.

const prompt = require('prompt-sync')()

let vetorPar = []
let vetorImp = []
let i = 0
while (i<=30) {
    let valor = parseInt(prompt('Digite um valor: '))
    i++
    if (valor % 2 === 0) {
        vetorPar.push(valor)
    } else {
        vetorImp.push(valor)
    }
        if(vetorPar.length>5){
            console.log('Vetor Par cheio ')
            console.log(vetorPar)
        }
        if(vetorImp.length>5){
            console.log('Vetor impar cheio')
            console.log(vetorImp)
        }
}

console.log('Vetor Par ')
            console.log(vetorPar)
console.log('Vetor impar ')
            console.log(vetorImp)
        
