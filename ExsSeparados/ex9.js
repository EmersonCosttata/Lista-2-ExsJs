// 9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
// mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
// perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
// funcionário.

const prompt  = require('prompt-sync')()
let masc = 0
let fem = 0
let opcShow = 0
while(true){

let salario = parseFloat(prompt("Digite o salario do Funcionario: "))
let sexo =  parseInt(prompt("Qual o sexo? 1- Masculino || 2 - Feminino: "))
opcShow =  parseInt(prompt("Deseja ver todos os Salarios? 1 - Sim 2- Não: "))

if (sexo===1){
    masc += + salario
}else if(sexo===2){
    fem += salario
}
if(opcShow===1){
    console.log('Total pago aos Homens: R$',masc.toFixed(2))
    console.log('Total pago as Mulheres: R$',fem.toFixed(2))
    console.log('')
    let opc = parseInt(prompt("Deseja Continuar? 1-Sim || 2-Não: "))
    if (opc===2)
        break
}else if(sexo===3){
    console.log('Opc Invalida, FIM!')
    break
}

}