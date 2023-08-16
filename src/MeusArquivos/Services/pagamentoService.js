export class pagamentoService {

    taxaDePagamento(metodoDePagamento, totalSemPagamento) {
        let total;

        if (metodoDePagamento == "dinheiro") {
            total = totalSemPagamento - (totalSemPagamento * 0.05);
            return this.formataValor(total);
        }
        else if (metodoDePagamento == "credito") {
            total = totalSemPagamento + (totalSemPagamento * 0.03);
            return this.formataValor(total);

        } else if (metodoDePagamento == "debito") {
            total = totalSemPagamento;
            return this.formataValor(total);
        }
        else {
            return ('Forma de pagamento inválida!');
        }

    }

    formataValor(total) {
        return (`R$ ${total.toFixed(2).replace('.', ",")}`);
    }

    validaExtra(novaLista) {
        let validaQueijo = false;
        let validaChant = false;
        let validaCafe = false;
        let validaSandu = false;

        novaLista.forEach(element => {
            if (element[0] == 'chantily') {
                validaChant = true;
            }
            if (element[0] == 'queijo') {
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

        if (validaQueijo == true && validaSandu == false) {
            return false;
        }

        return true;

    }

    separaValores(itens, ls1, lista, metodoDePagamento) {


        let novaLista = [];
        let valorCodigo = [];
        let totalCada = [];
        let totalSemPagamento = 0;

        if (itens.length === 0) {
            return ("Não há itens no carrinho de compra!");
        }


        itens.forEach(element => {
            novaLista.push(element.split(","));
        });


        if (!this.validaExtra(novaLista)) {
            return ('Item extra não pode ser pedido sem o principal');
        };


        for (let i = 0; i < itens.length; i++) {
            //  if(novaLista[i][0]!= )
            valorCodigo[i] = ls1.valorPorCodigo(novaLista[i][0], lista);
            if (!valorCodigo[i]) {
                return "Item inválido!";
            }
            if (novaLista[i][1] <= 0) {
                return "Quantidade inválida!";
            }
            totalCada[i] = valorCodigo[i] * novaLista[i][1];
        }


        totalCada.forEach(valor => {
            totalSemPagamento += valor;
        });

        return this.taxaDePagamento(metodoDePagamento, totalSemPagamento);
    }
}
