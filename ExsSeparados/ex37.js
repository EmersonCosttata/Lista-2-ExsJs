// 37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
// o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
// respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
// aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
// e mostre uma mensagem de “REPROVADO”, caso contrário.

const prompt = require('prompt-sync')()

let vetorG = []
for (let i = 0; i < 20; i++) {
    vetorG.push(prompt('Digite a letra da resposta ' + i + ' :'))
}

let vetorAluno = []
for (let i = 0; i < 5; i++) {
    let vetorR = [];
    console.log('Aluno: ', i)
    for (let j = 0; j < 20; j++) { 
        vetorR.push(prompt('Digite a letra da resposta:'));
    }
    vetorAluno.push([i, vetorR])
}

for (let i = 0; i < 50; i++) {
    let notas = vetorAluno[i][1]
    let acertos = 0;
    for (let j = 0; j < 20; j++) {
        if (notas[j] === vetorG[j]) { 
            acertos++
        }
    }
    if (acertos >= 12) {
        console.log('Aluno: ' + i + ' APROVADO!')
    } else {
        console.log('Aluno: ' + i + ' REPROVADO :(')
    }
}


