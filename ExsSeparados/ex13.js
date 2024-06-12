// 13. Crie um programa que preencha automaticamente (usando lógica, não apenas
//     atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
//     da sequência de Fibonacci.

let a = 1;
let b = 1;
let vetor = []
    vetor.push(a,b)
    for (let i = 3; i <= 15; i++) {
        const next = a + b;
        vetor.push(next);
        a = b;
        b = next;
    }
console.log('Vetor com 15 elementos da sequência de Fibonacci')
console.log(vetor)