
import ListaService from "./Services/listaService.js";
import { pagamentoService } from "./Services/pagamentoService.js";


class CaixaDaLanchonete {

    

    calcularValorDaCompra(metodoDePagamento, itens) {

        const ls1 = new ListaService();       // instancia de listaService
        let lista = ls1.criarListaDeItens();    // chama a função que cria a lista
        const pagamento = new pagamentoService();
        return pagamento.separaValores(itens, ls1, lista,metodoDePagamento);   // retorna o valor total ou a frase de erro.
    }

}

export { CaixaDaLanchonete };
