// 44. Escreva uma função que conte quantas propriedades do tipo string existem em um
// objeto e retorne esse número.

const obj1 ={
    nome: "Emerson",
    numero: 12,
    tipoNum: "Inteiro",
    versao: 1.45,
    tipo: "Prog"
}

function ProductString(obj){
   let resul = 0
    for (const i in obj) {
        if (typeof obj[i] === 'string') {
            resul++  
        }
    }
    return resul
}

console.log('Strings:',ProductString(obj1))

