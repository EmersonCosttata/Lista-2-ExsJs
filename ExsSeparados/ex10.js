// 10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
// cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
// a) O somatório entre todos os valores;
// b) Qual foi o menor valor digitado;
// c) A média entre todos os valores;
// d) Quantos valores são pares.


const prompt = require('prompt-sync')()
let num
let vetor = []
let opc = 1 
let somatorio = 0
do  
 {
    num = parseFloat(prompt('Digite um numero: '))
    somatorio += num;
    vetor.push(num)
    opc = parseInt(prompt('Deseja continuar? 1- SIM || 2- NÂO '))
    
 } while (opc===1);

 console.log('Somatorio: ',somatorio)
 console.log('Menor Valor Digitado: ',MenorNumero(vetor))
 console.log('Media dos valores:',(somatorio/vetor.length))
 console.log('Valores Pares: ',NumeroPar(vetor))

 function MenorNumero(numeros){
    let temp = numeros[0]
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < temp) {
            temp = numeros[i];
        }
    }
    return temp
 }

 function NumeroPar(numeros){
    let newvetor = []
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]% 2 === 0)
        newvetor.push(numeros[i])
    }
return newvetor 
}