// 45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
// o número de vezes que a string aparece no array.
const vetor = ['Emerson ','Do','Amaral', 'Costa', 'Felipe','Amaral','Costa','Mauraci','Costa','Amaral','Padilha','Blenda']

function contarStrings(array) {
    let cont = []
    array.map(i => {
        if (cont[i]) {
            cont[i]++;
        } else {
            cont[i] = 1;
        }
    })
    return cont;
}

console.log(contarStrings(vetor))