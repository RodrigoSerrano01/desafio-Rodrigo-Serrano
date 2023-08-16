
import ListaService from "../MeusArquivos/Services/listaService.js";
import { pagamentoService } from "../MeusArquivos/Services/pagamentoService.js";


class CaixaDaLanchonete {

    

    calcularValorDaCompra(metodoDePagamento, itens) {

        const ls1 = new ListaService();
        let lista = ls1.criarListaDeItens();
        const pagamento = new pagamentoService();
        return pagamento.separaValores(itens, ls1, lista,metodoDePagamento);  
    }

}

export { CaixaDaLanchonete };
