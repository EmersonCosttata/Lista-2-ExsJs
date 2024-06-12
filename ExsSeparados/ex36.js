// 36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
// um teste da loteria esportiva. 

//Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições.

// Verifique para cada apostador onúmero de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
// o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
// mensagem "Parabéns, tu foi o GANHADOR".

const prompt = require('prompt-sync')()

let vetorGab = [];
for (let i = 0; i < 13; i++) {
    vetorGab.push(parseInt(prompt('Digite o valor do gabarito: ', i)))
}

let Apostadores = [];
console.log('Carregando apostadores-----');
console.log('-----Bem-vindo-----');

for (let i = 0; i < 100; i++) {
    console.log('Apostador N: ' + (i + 1));
    let cart = [];
    let NumCart = parseInt(prompt('Digite o numero do seu cartão: '));
    for (let j = 0; j < 13; j++) {
        cart.push(parseInt(prompt('Digite o Número ' + (j + 1) + ' da sua aposta:')));
    }
    Apostadores.push([NumCart, cart]);
}

let VetorGanhadores = [];
let VetorACertos = [];

for (let i = 0; i < 100; i++) {
    let apostas = Apostadores[i][1];
    let acertos = 0;
    for (let j = 0; j < 13; j++) {
        if (apostas[j] === vetorGab[j]) {
            acertos++;
        }
    }
    if (acertos === 13) {
        console.log('Cartão: ', Apostadores[i][0]);
        console.log('Parabéns, você foi o GANHADOR');
        VetorGanhadores.push([Apostadores[i][0], acertos]);
    }
    VetorACertos.push([Apostadores[i][0], acertos])

}

console.log('Ganhadores:');
for (let i = 0; i < VetorGanhadores.length; i++) {
    console.log('Cartão e Acertos:')
    for (let j = 0; j < 2; j++) {
        console.log(VetorGanhadores[i][j]);
    }
}

console.log('Demais:');
for (let i = 0; i < VetorACertos.length; i++) {
    console.log('Cartão e Acertos:')
    for (let j = 0; j < 2; j++) {
        console.log(VetorACertos[i][j]);
    }
}

