// 38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
// variável identificadora que calcule a operação conforme a informação contida nesta
// variável:
// 1- soma dos elementos;
// 2- produto dos elementos;
// 3- média dos elementos;
// 4- ordene os elementos em ordem crescente;
// 5- mostre o vetor.
const prompt = require("prompt-sync")();

let vetor = [];
let soma = 0;
let produto = 1;
for (let i = 0; i < 6; i++) {
  vetor.push(parseInt(prompt("Digite um valor para " + (i+1) + " :")));
  soma += vetor[i];
  produto *= vetor[i];
}

function ordenarCrescente(array) {
    return vetor.slice().sort((a, b) => a - b)
}

let valor= 0
while (valor < 6) {
    valor = parseInt(prompt("Digite o de operação escolhida: 1-5 "))
  switch (valor) {
    case 1:
      console.log("Soma dos elementos: " + soma + "");
      break;
    case 2:
        console.log("Produto dos elementos: " + produto + "");
      break;
    case 3:
        console.log("Media dos elementos: " + (soma / 6) + "");
    break;

    case 4:
        console.log(ordenarCrescente(vetor));
    break;

    case 5:
        console.log(vetor);
    break;

    default:
      console.log("Fim");
      break;
  }
}




