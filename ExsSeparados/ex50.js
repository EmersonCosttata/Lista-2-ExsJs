// 50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
// deverá ser capaz de interagir com o usuário através do console do navegador e manter
// um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
// informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
// 1. Estrutura de Dados:
// ○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
// cidade, quartos totais e quartos disponiveis.
// ○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
// nomeCliente.
// 2. Funcionalidades:
// ○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
// ○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
// disponíveis em uma cidade específica.
// ○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
// deve diminuir o número de quartos disponiveis do hotel.
// ○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
// aumentar o número de quartos disponiveis no hotel correspondente.
// ○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
// cliente.
// 3. Regras de Negócio:
// ○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
// ○ As reservas devem ser identificadas por um ID único e associadas a um
// único hotel.

const prompt = require('prompt-sync')()

let hoteis = []
let reservas = []

function AddHotel() {
    let nid = hoteis.length + 1
    let hotel = {
        id: nid,
        nome: prompt('Nome do Hotel: '),
        cidade: prompt('Cidade do Hotel: '),
        quartos: parseInt(prompt('Total de Quartos: ')),
        quartosDisponiveis: parseInt(prompt('Quartos Disponíveis: ')),
        nota:[]
    };
    console.log('Hotel Adicionado:', hotel);
    return hotel;
}

function AddReserva() {
    if (hoteis.length === 0) {
        console.log('Impossível fazer reservas sem ter um hotel cadastrado!')
        return;
    }

    let nid = reservas.length + 1;
    let idHotelReserva = parseInt(prompt('Digite o ID do Hotel a ser reservado: '))

    if (idHotelReserva < 1 || idHotelReserva > hoteis.length) {
        console.log('ID do hotel inválido!')
        return;
    }

    let hotel = hoteis[idHotelReserva - 1]
    if (hotel.quartosDisponiveis <= 0) {
        console.log('Este hotel está sem quartos disponíveis!')
        return;
    }

    let reserva = {
        idReserva: nid,
        idHotel: idHotelReserva,
        cliente: prompt('Nome do Cliente: ')
    };

    hotel.quartosDisponiveis -= 1;
    console.log('Reserva Adicionada:', reserva)
    return reserva;
}

function RemoveReserva() {
    if (reservas.length === 0) {
        console.log('Impossível remover reservas sem ter uma reserva cadastrada!');
        return;
    }

    console.log(reservas);
    let idRemover = parseInt(prompt('Digite o ID da reserva que queira remover: '));

    if (idRemover < 1 || idRemover > reservas.length) {
        console.log('ID da reserva inválido!')
        return;
    }

    let reserva = reservas[idRemover - 1]
    let hotel = hoteis[reserva.idHotel - 1]
    hotel.quartosDisponiveis += 1

    reservas.splice(idRemover - 1, 1)
    console.log('Reserva Cancelada!')
}

function ListarReservas() {
    if (reservas.length === 0) {
        console.log('Nenhuma reserva encontrada!')
        return;
    }

    reservas.map(reserva => {
        let hotel = hoteis[reserva.idHotel - 1]
        console.log("---------------------------")
        console.log("ID da Reserva:", reserva.idReserva)
        console.log('Nome do Cliente:', reserva.cliente)
        console.log('Hotel:', hotel.nome)
        console.log('Cidade:', hotel.cidade)
        console.log("---------------------------")
    });
}

function ListaHoteisCidades() {
    let hoteisPorCidade = {}

    hoteis.map(hotel => {
        if (!hoteisPorCidade[hotel.cidade]) {
            hoteisPorCidade[hotel.cidade] = []
        }
        hoteisPorCidade[hotel.cidade].push(hotel)
    });

    for (let cidade in hoteisPorCidade) {
        console.log('----------------- Cidade:', cidade, '---------------------')
        Show(hoteisPorCidade[cidade])
    }

    function Show(hoteisNaCidade) {
        hoteisNaCidade.forEach(hotel => {
            console.log("---------------------------")
            console.log("ID:", hotel.id)
            console.log("Hotel:", hotel.nome)
            console.log("Total de Quartos:", hotel.quartos)
            console.log("Quartos Vagos:", hotel.quartosDisponiveis)
            let oc = (hotel.quartosDisponiveis*100)/hotel.quartos
            console.log("Ocupação de",oc.toFixed(2),"%")
            console.log("Avaliações(1-5): ",hotel.nota )
            console.log("---------------------------")
        })
    }
}
function avaliahotel(){
    console.log(hoteis)
    let id = parseInt(prompt("Id do hotel a ser avaliado:"))
let nota = parseInt(prompt("Digite Uma nota de 1 a 5:"))
hoteis[id-1].nota.push(nota)
}
    console.log("----------- BEM VINDO AO SISTEMA DE RESERVAS DA EmTravelBoard ----------------");
    let login = prompt("Digite seu nome para entrar no sistema: ")
    console.log("Login Efetuado", login, "Sistema liberado!")

    let opc = 0;
    while (opc !== 7) {
        console.log("---------------------------");
        console.log("1 - Adicionar Hotel | 2 - Adicionar Reserva | 3 - Cancelar Reserva | 4 - Listar Reservas ")
        opc = parseInt(prompt(" 5 - Listar Hotéis por Cidade | 6 - Avalia Hotel | 7-SAIR "));

        switch (opc) {
            case 1:
                hoteis.push(AddHotel())
                break;
            case 2:
                let novaReserva = AddReserva()
                if (novaReserva) reservas.push(novaReserva)
                break;
            case 3:
                RemoveReserva()
                break;
            case 4:
                ListarReservas()
                break;
            case 5:
                ListaHoteisCidades()
                break;
            case 6:
                avaliahotel();
                break;

        }
    }


