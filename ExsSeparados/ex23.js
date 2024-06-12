// 23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
// diagonal principal são iguais a 1 e os demais são nulos.


let matriz = [];
for (let i = 1; i <= 7; i++) {
    let linha = [];
    for (let j = 1; j <= 7; j++) {
        if (i === j) {
            linha.push(1); 
        } else {
            linha.push(0); 
        }
    }
    matriz.push(linha);
}

for (let i = 0; i < 7; i++) {
    console.log(matriz[i].join('  '));
}