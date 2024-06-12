// 49. Você recebe um array de objetos representando transações financeiras. Cada
// transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
// onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
// essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.

const transcoes =[
    {
        id: 1, 
        valor: 200, 
        data: 22012024, 
        categoria:"pix"
    },
    {
        id: 2, 
        valor: 210, 
        data: 2312024, 
        categoria: "Ted"
    },
    {
        id: 3, 
        valor: 212, 
        data: 12072024, 
        categoria: "Doc"
    },
]

function RetornaObj(arrei){
        let resultado = {}
        arrei.map(transacao => {
            const categoria = transacao.categoria
            const valor = transacao.valor
            if (!resultado[categoria]) {
                resultado[categoria] = {
                    transacoes: [],
                    subtotal: 0
                }
            }
            resultado[categoria].transacoes.push(transacao);
            resultado[categoria].subtotal += valor;
        })
        return resultado;
    
}
const final = RetornaObj(transcoes)
Object.keys(final).map(categoria => {
    console.log(categoria);
    console.log(final[categoria].transacoes);
    console.log(final[categoria].subtotal);
});