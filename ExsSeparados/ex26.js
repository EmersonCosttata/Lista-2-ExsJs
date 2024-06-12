// 26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
// P[1..3,1..5].

let matrizA = [];
for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 5; j++) {
        linha.push(Math.floor(Math.random() * 20));
    }
    matrizA.push(linha);
}
let matrizB = [];
for (let i = 0; i < 5; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(Math.floor(Math.random() * 20));
    }
    matrizB.push(linha);
}


console.log('Matriz A');
for (let i = 0; i < 3; i++) {
    console.log(matrizA[i].join(' '));
}
console.log(' ');
console.log('Matriz B');
for (let i = 0; i < 5; i++) {
    console.log(matrizB[i].join(' '));
}
console.log(' ');


let Soma = [];
for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        let soma = 0;
        for (let k = 0; k < 5; k++) {
            soma += matrizA[i][k] * matrizB[k][j];
        }
        linha.push(soma);
    }
    Soma.push(linha);
}


console.log('Matriz Produto');
for (let i = 0; i < 3; i++) {
    console.log(Soma[i].join(' '));
}