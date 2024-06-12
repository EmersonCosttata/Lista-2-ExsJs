// 40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
// resultado oficial da Loto. 
// A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
// cada), representando as apostas feitas. 

//Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
// corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
// e quadras, apenas por quinas.)
const prompt = require("prompt-sync")();

let vetorL = []
for (let i = 0; i < 5; i++) {
    vetorL.push(parseInt(prompt("Digite um valor para " + (i+1) + " : do Resultado:")));
  }

let vetorR = []
console.log('--------LOADING APOSTADORES--------')
for (let i = 0; i < 50; i++) {
    console.log('Apostador ',i)
    let aposta = []
    for (let j = 0; j < 5; j++) {
        aposta.push(parseInt(prompt("Digite um valor para " + (j+1) + " : do seu Resultado:")));
      }
    vetorR.push(aposta)
  } 

for (let i = 0; i < 50; i++) {
    let acertos = 0
    for (let j = 0; j < 5; j++) {
        if(vetorR[i][j]==vetorL[j])
            acertos++
      }

    if(acertos==5){
        console.log("Gnhou Apostador: "+(i))
    }else{
        console.log("Perdeu Apostador: "+(i)) 
    }
  }