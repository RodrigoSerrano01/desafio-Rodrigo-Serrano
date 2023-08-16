import Item from "../Model/item.js"


export default class ListaService {                 //classe que gerencia a lista de itens

    criarListaDeItens() {                           //metodo que cria a lista com as opções solicitadas e retorna a lista
        return [
            new Item("cafe", "Café", 3.00),
            new Item("chantily", "Chantily (extra do Café)", 1.50),
            new Item("suco", "Suco Natural", 6.20),
            new Item("sanduiche", "Sanduíche ", 6.50),
            new Item("queijo", "Queijo (extra do Sanduíche)", 2.00),
            new Item("salgado", "Salgado", "7,25"),
            new Item("combo1", "1 Suco e 1 Sanduíche  ", 9.50),
            new Item("combo2", "1 Café e 1 Sanduíche ", 7.50)
        ];
    }

    mostraItens(lista) {                    // mostra todas as informações dos itens da lista
        lista.forEach(element => {
            return (`Codigo: ${element.codigo}, descrição: ${element.descricao}, valor: R$ ${element.valor}`);
        });




    }

    valorPorCodigo(codigo, lista) {         // Busca o valor dos itens pelo codigo.



        for (let i = 0; i < lista.length; i++) {
            if (lista[i].codigo == codigo) {

                return lista[i].valor;
            }
        }
        return false;                       // caso não encontre retorna falso para informar item invalido.

    }

}