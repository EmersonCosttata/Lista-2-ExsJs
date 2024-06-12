// 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
// um funcionário e ao final escreva o conteúdo do registro.

const prompt = require('prompt-sync')()

const funcionario = {
    nome:'',
    cargo:'',
    salario: 0
}

funcionario.nome = prompt("Digite o nome do Funcionario: ")
funcionario.cargo = prompt("Digite o Cargo do Funcionario: ")
funcionario.salario = parseFloat(prompt("Digite o Salario do Funcionario: "))

console.table(funcionario)