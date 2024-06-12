// 19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
// repetição. Escrever cada um deles no formato HH.MM.SS.

const prompt = require('prompt-sync')()
vetor =[]

for (let i = 0; i <=5; i++) {
    let horario = prompt('Digite um horario formatado (22:58:22): ')
    if(ToDate(horario)){
        vetor.push(horario)
    }else if(!ToDate(horario)){
        console.log('Digite o horario formatado! ')
        i = i-1 
    }
}

function ToDate(array){
let mont = array.split(':');

if (mont.length !== 3) 
    return false;

const horas = parseInt(mont[0]);
const minutos = parseInt(mont[1]);
const segundos = parseInt(mont[2]);
const data = new Date();
data.setHours(horas);
data.setMinutes(minutos);
data.setSeconds(segundos);

return data.getHours() === horas && data.getMinutes() === minutos && data.getSeconds() === segundos
}

console.table(vetor)
