// 22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
// dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
// número não determinado de pessoas e retorne a 

//média de salário da população, a
// média do número de filhos, o 
//maior salário e o percentual de pessoas com salário até R$ 350,00.

const prompt = require('prompt-sync')()
let n=0
let salarioTotais = 0
let filhosTotais =0
let maiorSalario
let salarios350 = 0
let temp = 0
while(true){

    let salario = parseFloat(prompt('Qual o salario? '))
salarioTotais += salario
if(salario>temp)
    maiorSalario= salario
if(salario<=350)
    salarios350++
temp = salario

let numeroFilhos = parseInt(prompt ('Quantos filhos você tem? '))
filhosTotais+= numeroFilhos
n++

let opc = parseInt(prompt('Deseja adcionar mais dados? |1 - SIM | 2- NÃO| '))
if(opc===2)
    break

}
console.log('')
console.log('Media dos Salarios: R$',(salarioTotais/n).toFixed(2))
console.log('Media de Filhos por Pessoa: ',(filhosTotais/n).toFixed(1))
console.log('Maior Salario : R$',maiorSalario.toFixed(2))
//2 100 
//1 x
console.log('De todos as Pessoas',((salarios350*100)/n).toFixed(0),'% delas ganham ate 350R$')