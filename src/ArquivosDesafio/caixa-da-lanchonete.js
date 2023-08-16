
import ListaService from "../MeusArquivos/Services/listaService.js";



class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const ls1 = new ListaService();
        let lista = ls1.criarListaDeItens();


        if(itens.length ===0){
             console.log('Não há itens no carrinho de compra!');
        }

        const valor = this.separaValores(itens, ls1, lista);



        return this.taxaDePagamento(metodoDePagamento, valor);

    }

    taxaDePagamento(metodoDePagamento, totalSemPagamento) {

        if (metodoDePagamento == "dinheiro") {
            return totalSemPagamento - (totalSemPagamento * 0.05);
        }
        else if (metodoDePagamento == "credito") {
            return totalSemPagamento + (totalSemPagamento * 0.03);

        } else if (metodoDePagamento == "debito") {
            return totalSemPagamento;
        }
        else {
            return console.log("Forma de pagamento inválida!");
        }

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
            if(element[0] == 'cafe'){
                validaCafe = true;
            }
            if(element[0] == 'sanduiche'){
                validaSandu = true;
            }
        });


        if(validaChant == true && validaCafe == false){
                console.log('Item extra não pode ser pedido sem o principal');
        }

        if(validaQueijo == true && validaSandu == false){
            console.log('Item extra não pode ser pedido sem o principal');
        }

    }

    separaValores(itens, ls1, lista) {


        let novaLista = [];
        let valorCodigo = [];
        let totalCada = [];
        let totalSemPagamento = 0;


        itens.forEach(element => {
            novaLista.push(element.split(","));
        });


        this.validaExtra(novaLista);


        for (let i = 0; i < itens.length; i++) {
          //  if(novaLista[i][0]!= )
            valorCodigo[i] = ls1.valorPorCodigo(novaLista[i][0], lista);
            if (novaLista[i][1] <= 0) {
                return console.log("quantidade invalida");
            }
            totalCada[i] = valorCodigo[i] * novaLista[i][1];
        }


        totalCada.forEach(valor => {
            totalSemPagamento += valor;
        });

        return totalSemPagamento;
    }

}

export { CaixaDaLanchonete };
