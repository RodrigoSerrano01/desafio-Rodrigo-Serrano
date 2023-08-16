import Item from "../Model/item.js"


export default class ListaService {

    criarListaDeItens() {
        return [
            new Item("cafe", "Café", 3.00),
            new Item("chantily", "Chantily (extra do Café)", 1.50),
            new Item("suco", "Suco Natural", 6.20),
            new Item("sanduiche", "Sanduíche ", 6.50),
            new Item("queijo", "Queijo (extra do Sanduíche)", 2.00),
            new Item("salgado", "Salgado", "R$ 7,25"),
            new Item("combo1", "1 Suco e 1 Sanduíche  ", 9.50),
            new Item("combo2", "1 Café e 1 Sanduíche ", 7.50)
        ];
    }

    mostraItens(lista) {
        lista.forEach(element => {
            console.log(`item: ${element.codigo}, descrição: ${element.descricao}, valor: ${element.valor}`);
        });




    }

    valorPorCodigo(codigo, lista) {



        for (let i = 0; i < lista.length; i++) {
            if (lista[i].codigo == codigo) {

                return lista[i].valor;
            }
        }
        console.log("codigo Invalido!");
        return 0;

    }

}