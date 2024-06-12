// 4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
// comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
// lado deve ser menor que a soma dos outros dois.

const prompt = require('prompt-sync')();

const reta1 =  prompt ("Digite a reta 1: ")
const reta2 =  prompt ("Digite a reta 2: ")
const reta3 =  prompt ("Digite a reta 3: ")

if (reta1+reta2>reta3  && reta3+reta2>reta1 && reta3+reta1>reta2)
console.log("Não formam um triangulo!")
else
console.log("É Triangulo")