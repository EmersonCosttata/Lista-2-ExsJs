// 17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
// dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
// os dados das pessoas menores de idade.

const prompt = require('prompt-sync')()
let vetorNome = []
let vetorIdade = []
for (let i = 0; i <=9; i++) {
    let nome = prompt("Digite o Nome da pessoa: ")
    let idade = prompt("Digite a Idade da pessoa: ")
    vetorNome.push(nome);
    vetorIdade.push(idade);
}
console.log('Menores de Idade: ')
for (let index = 0; index < vetorIdade.length; index++) {
    if(vetorIdade[index]<18){   
        console.log('Nome :',vetorNome[index],',Idade: ',vetorIdade[index])
    }
    
}


