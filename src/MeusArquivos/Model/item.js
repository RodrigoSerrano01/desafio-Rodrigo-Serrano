export default class Item {
    constructor (codigo, descricao, valor){
        this.codigo =codigo;
        this.descricao = descricao;
        this.valor = valor;
    }


    AllInformations (){
        console.log(`item: ${this.codigo}, descrição: ${this.descricao}, valor: ${this.valor}`);
    }

}