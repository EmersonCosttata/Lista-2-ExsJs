// 2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Kmh
// -1, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
// multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

const prompt = require('prompt-sync')();

const km = prompt("Digite a velocidade do veiculo: ")
if(km>80)
console.log("Multado! Valor da multa R$: ",((km-80)*5))
else
console.log("Velocidade Permitida, siga a frente!")