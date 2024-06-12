// 48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
// inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
// item em estoque. Escreva uma função que combine os inventários em um único objeto.
// Se um item aparecer em ambas as lojas, some as quantidades.

 const inventarioLojaA ={
    macbooks: 10,
    iphones: 5,
    ipads: 8
 }

 const inventarioLojaB ={
    galaxyS: 2,
    lenovos: 4,
    ipads: 3
 }

 function JuntarInvetarios(invet1,invet2){

    let inventarioFinal = {}
    for (let i in invet1) {
        if (invet1.hasOwnProperty(i)) {
            inventarioFinal[i] = invet1[i]
        }
    }
    for (let i in inventarioLojaB) {
        if (invet2.hasOwnProperty(i)) {
            if (inventarioFinal.hasOwnProperty(i)) 
                inventarioFinal[i] += invet2[i];
             else 
                inventarioFinal[i] = invet2[i];  
        }
    }

    return inventarioFinal;
 }

 console.log(JuntarInvetarios(inventarioLojaA,inventarioLojaB))