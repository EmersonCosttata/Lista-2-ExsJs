// 11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
//     Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
//     valores da sequência.

const prompt = require('prompt-sync')();

let soma = 0;


const primerotermo = parseFloat(prompt('Digite o primeiro termo da Prog Aritimedica: '));
const razao = parseFloat(prompt('Digite a razao da Prog Aritimedica: '));
mostrarPA();
console.log("A soma dos termos da PA é:", soma);

function mostrarPA(){
    console.log("Os primeiros 10 termos da Prog Aritimedica:");
    for (let i = 0; i < 10; i++) {
        let termo = primerotermo + (i * razao);
        console.log(termo);
        soma += termo;
    }
}
