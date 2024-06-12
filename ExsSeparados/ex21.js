// 21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
// retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: 
//peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.


function Pesoideal(alt,sex){
    if(sex===1)
        return 72.7*alt-58
    else if(sex===2)
        return 62.1*alt-44.7
    else
    return 'Opc Invalida, FIM'
}
console.log("Peso ideal: ",(Pesoideal(1.85,1)).toFixed(2))