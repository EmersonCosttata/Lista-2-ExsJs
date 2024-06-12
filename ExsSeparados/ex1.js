// 1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')();

const quantDia = prompt('Qual a quantidade de cigarros fumados por dia? ');
const anos = prompt('Quantos anos você já fuma? ');

const minutosDia = quantDia * 10;
const vidaPerdida =  (minutosDia * anos*365) / (60*24)

console.log("Você perdeu", vidaPerdida.toFixed(1), "dias da sua vida fumando.");