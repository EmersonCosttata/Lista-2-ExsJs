// 46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
// com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
// de vendas por vendedor.

const vendas = [
    { vendedor: "Emerson", valor: 100 },
    { vendedor: "Joao", valor: 200 },
    { vendedor: "Emerson", valor: 150 },
    { vendedor: "Maria", valor: 50 },
    { vendedor: "Maria", valor: 100 }
];

function somaVendas(obj){ 

    const total = [];
    
    obj.map(i => {
        let vendedor = i.vendedor;
        let valor = i.valor;

        if (total[vendedor]) {
            total[vendedor] += valor;
        } else {
            total[vendedor] = valor;
        }
    });
    
    return total;
}
console.log(somaVendas(vendas))