// 47. Crie uma função que transforme um objeto de entrada aplicando uma função
// fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
// resultados.


function transformaObjeto(obj, fn) {
    let NewObj = {}
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            NewObj[i] = fn(obj[i])
        }
    }
    return NewObj;
}
let Object1 = {
    a: 1,
    b: 2,
    c: 3,
    k: 7
};
function Acresenta2(valor) {
    return valor +2
}
const final = transformaObjeto(Object1, Acresenta2)
console.log(final)