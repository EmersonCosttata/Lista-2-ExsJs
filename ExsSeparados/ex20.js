// 20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
// no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
// salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
// tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
// Matrícula:
// Nome:
// Salário bruto:
// Dedução INSS:
// Salário líquido:
// (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
// INSS).

const prompt = require('prompt-sync')()

const funcionario = {
    matricula: 0,
    nome:'',
    salarioBruto: 0,
    deducaoInss: 0,
    salarioLiquido:0,
}

funcionario.matricula = parseInt(prompt("Digite a Matricula do Funcionario: "))
funcionario.nome = prompt("Digite o Nome do Funcionario: ")
funcionario.salarioBruto = parseFloat(prompt("Digite o Salario Bruto do Funcionario: "))
funcionario.deducaoInss = funcionario.salarioBruto*0.12
funcionario.salarioLiquido = funcionario.salarioBruto-funcionario.deducaoInss

console.log('Matricula: ',funcionario.matricula)
console.log('Nome: ',funcionario.nome)
console.log('Salario Bruto: R$',funcionario.salarioBruto.toFixed(2))
console.log('Valor de INSS a Descontar: R$',funcionario.deducaoInss.toFixed(2))
console.log('Salario Final: R$',funcionario.salarioLiquido.toFixed(2))
