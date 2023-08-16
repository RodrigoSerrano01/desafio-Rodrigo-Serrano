export default class Item {                                 // clase dos itens
    constructor (codigo, descricao, valor){
        this.codigo =codigo;
        this.descricao = descricao;
        this.valor = valor;
    }


    AllInformations (){                     //metodo para mostrar todas as informações dos itens
        console.log(`item: ${this.codigo}, descrição: ${this.descricao}, valor: ${this.valor}`);
    }

}