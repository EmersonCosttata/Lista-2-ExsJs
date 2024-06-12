// 3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')();

const distancia = prompt("Qual distancia deseja percorer? ")

if(distancia<=200)
console.log("Valor da passagem: R$ ",(distancia*0.5))
else
console.log("Valor da passagem: R$ ",(distancia*0.45))