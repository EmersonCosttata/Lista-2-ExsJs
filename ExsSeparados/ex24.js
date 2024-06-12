// 24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
// quantidade de elementos negativos da linha correspondente de M.
let matriz = [];
let negativos = [];
for (let i = 0; i < 6; i++) {
    let linha = [];
    for (let j = 0; j < 8; j++) {
            linha.push((Math.floor(Math.random() * 22) - 12));  
            if(linha[j]<0)
                negativos.push(linha[j])
    }
    matriz.push(linha);
}
console.log('Matriz Original: ')
for (let i = 0; i < 6; i++) {
    console.log(matriz[i].join(' '));
}
console.log('Negativos: ')
console.log(negativos.join(' '))