// 39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida,
// compacte o
// vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
const prompt = require("prompt-sync")();
let vetor = []
let vetorB = []
for (let i = 0; i < 100; i++) {
    vetor.push(parseInt(prompt("Digite um valor para " + (i+1) + " :")));
  }
  for (let i = 0; i < 100; i++) {
    if(!vetor[i]<0){
        vetorB.push(vetor[i])
    }else if(!vetor[i]){
        vetorB.push(null)
    }
  }
  console.log('Resultado:')
  console.log(vetorB)
  console.log('Matriz Original:')
  console.log(vetor)