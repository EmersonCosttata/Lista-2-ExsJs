// 6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
// tentar descobrir qual foi o valor sorteado.

const prompt = require('prompt-sync')();
console.log("Descubra o numero! é entre 1 - 5")
while(true){
let num = prompt('Descubra qual numero foi sorteado! Tente agora:')
const sorteado = Math.floor(Math.random()*5+1)
 if(num==sorteado){
    console.log('Acertou! , n: ', sorteado)
    break
}else{
console.log("Errou")
}

}