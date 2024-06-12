// 7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
// carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
// cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
// (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
// mostre o preço a ser pago de acordo com os dados a seguir:
// Carros populares
// - Até 100 Km percorridos: R$ 0,20 por Km
// - Acima de 100 Km percorridos: R$ 0,10 por Km
// Carros de luxo
// - Até 200 Km percorridos: R$ 0,30 por Km
// - Acima de 200 Km percorridos: R$ 0,25 por Km

const prompt = require('prompt-sync')();

while(true){
    function calcular(dia,val) {
        let diaria = diasAluguel*dia
        let kmsoma = kmCorridos*val
        console.log(' ')
        console.log('----------------Recibo AlugaCar----------------')
        console.log('Valor total das diarias R$:',diaria)
        console.log('Valor total de km percorridos R$',kmsoma)
        console.log('Valor total: R$',kmsoma+diaria) 
        console.log('----------------Recibo AlugaCar----------------')
        console.log(' ')
    }

console.log("-----------Sistema da AlugaCar-----------")
const tipoCarro = prompt ('Digite o tipo de veiculo: 1- POPULAR ou 2- LUXO 3-SAIR: ')
    if (tipoCarro!=1 && tipoCarro !=2){
    console.log('Fim!')
    break}
const diasAluguel =  prompt('Digite o numero de dias foram de aluguel: ')
const kmCorridos = prompt('Digite a kilometragem percorrida: ')

switch (true) {
    case (tipoCarro==1):
        if(kmCorridos<=100){
        calcular(90,0.20)
        }else{
        calcular(90,0.10)
        }
    break;

    case (tipoCarro==2):
        if(kmCorridos<=200){
        calcular(150,0.30)
        }else{
        calcular(150,0.25)
        }
    break;
}
}

