// 16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
// (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
// depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.

const prompt = require('prompt-sync')()
let vetor =[]

for (let index = 0; index <=20; index++) {
    vetor.push(Math.floor(Math.random()*99));
}
console.log('Original: ')
console.table(vetor)
Ordena(vetor)

console.log('Ordenado: ')
console.table(vetor)

function Ordena(array){
    for (let i = 0; i < array.length - 1; i++) {
        
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                vetor[j + 1] = temp;
            }
        }

    }
}