//5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require('prompt-sync')();

let select1 = prompt('Jogador 1: Selecione = 1 Pedra | 2 Papel | 3 Tesoura: ')

while (true) {
    

if (select1>3){
    console.log('Seleção errada, Fim!')
    break
    
}else{
                
const escolhas = ['pedra','papel','tesoura']
select1 = escolhas[select1-1]
const maquina = escolhas[Math.floor(Math.random()*3)]


if ((select1 === 'pedra' && maquina === 'tesoura') || (select1 === 'papel' && maquina === 'pedra') || (select1 === 'tesoura' && maquina === 'papel') )
    console.log('Ganhou!, a maquina escolheu: ', maquina)
else if(select1 === maquina)
    console.log('Empate, a maquina escolheu: ', maquina)
else
    console.log('Perdeu :(, a maquina escolheu: ', maquina)

}

}