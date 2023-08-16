export class pagamentoService {                                     //classe que faz o gerenciamento dos pagamentos.

    taxaDePagamento(metodoDePagamento, totalSemPagamento) {
        let total;

        if (metodoDePagamento == "dinheiro") {
            total = totalSemPagamento - (totalSemPagamento * 0.05);
            return this.formataValor(total);
        }
        else if (metodoDePagamento == "credito") {
            total = totalSemPagamento + (totalSemPagamento * 0.03);                 // metodo que recebe o meio de pagamento e calcula a taxa
            return this.formataValor(total);

        } else if (metodoDePagamento == "debito") {
            total = totalSemPagamento;
            return this.formataValor(total);
        }
        else {
            return ('Forma de pagamento inválida!');                //caso não encontre, retorna a frase de erro.
        }

    }

    formataValor(total) {
        return (`R$ ${total.toFixed(2).replace('.', ",")}`);                //metodo que formata o valor do total. subistitui ponto por virgua
                                                                            //e deixa com 2 numeros após a virgula
    }

    validaExtra(novaLista) {                        // Metodo que faz a validação dos itens extras
        let validaQueijo = false;
        let validaChant = false;
        let validaCafe = false;
        let validaSandu = false;

        novaLista.forEach(element => {
            if (element[0] == 'chantily') {
                validaChant = true;
            }
            if (element[0] == 'queijo') {               //caso for encontrado a variavel valida recebe true
                validaQueijo = true;
            }
            if (element[0] == 'cafe') {
                validaCafe = true;
            }
            if (element[0] == 'sanduiche') {
                validaSandu = true;
            }
        });


        if (validaChant == true && validaCafe == false) {
            return false;
        }
                                                                //faz o teste que para saber se o item extra tem seu principal
        if (validaQueijo == true && validaSandu == false) {     //caso não retorna falso
            return false;
        }

        return true;                                            //caso tenha retorna true

    }

    separaValores(itens, ls1, lista, metodoDePagamento) {


        let novaLista = [];
        let valorCodigo = [];
        let totalCada = [];
        let totalSemPagamento = 0;

        if (itens.length === 0) {
            return ("Não há itens no carrinho de compra!");             //if que valida o tamanho da lista de itens
        }


        itens.forEach(element => {
            novaLista.push(element.split(","));                         // separa os itens por virgura; ex: cafe,1 / cafe 1
        });


        if (!this.validaExtra(novaLista)) {
            return ('Item extra não pode ser pedido sem o principal');      //faz o teste da função validaExtra que retorna true ou false
        };


        for (let i = 0; i < itens.length; i++) {
            //  if(novaLista[i][0]!= )
            valorCodigo[i] = ls1.valorPorCodigo(novaLista[i][0], lista);     // busca o valor pelo codigo digitado
            if (!valorCodigo[i]) {
                return "Item inválido!";                // caso não tenha retorna a mensagem
            }
            if (novaLista[i][1] <= 0) {
                return "Quantidade inválida!";              //valida a quantidade
            }
            totalCada[i] = valorCodigo[i] * novaLista[i][1];        // calcula o total de cada item
        }


        totalCada.forEach(valor => {
            totalSemPagamento += valor;                 //calcula o total de todos os itens comprados
        });

        return this.taxaDePagamento(metodoDePagamento, totalSemPagamento);    // chama a função que aplica a taxa
    }
}
