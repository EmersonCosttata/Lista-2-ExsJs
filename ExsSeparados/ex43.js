// 43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
// combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
// sobre as do obj1 em caso de conflitos.
const obj1 = {
    numero: 2,
    nome: 'Jock'
}

const obj2 = {
    versao: 2.1,
    ativo:false
}

function SameObjs(obj,obj2){
    const result = {...obj,...obj2}
return result
}

console.log(SameObjs(obj1,obj2))