// 14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
// mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
// que eles foram informados.

const prompt =  require('prompt-sync')();
let nomes = []
for (let i = 0; i < 7; i++) {
    let nome = prompt("Digite o nome da pessoa: ")
    nomes.push(nome)
}

function Inverter(vetor){
    let vetorinverso = []
    for (let i = vetor.length - 1; i >= 0; i--) {
        vetorinverso.push(vetor[i]);
    }
    return vetorinverso
}

console.log('Nomes na Ordem inversa')
console.table(Inverter(nomes))
