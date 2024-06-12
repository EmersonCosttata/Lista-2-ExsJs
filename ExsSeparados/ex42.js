// 42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
// strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
// propriedades que são arrays.

const dados ={
    numero: 25,
    ListaNumeros: [1,2,3,4],
    dados: {
        nome:'Emerson',
        sobre:'COsta'
    },
    dadosAntigos: 'Emerson Costa',
    ListaNumerosAntigos: [3,2,1,44],
    sistemanovo: true
}

function filtrarArray(objeto) {
    const resul = {}
    for (const i in objeto) {
        if (Array.isArray(objeto[i])) {
            resul[i] = objeto[i]
        }
    }
    return resul
}

console.log(filtrarArray(dados))