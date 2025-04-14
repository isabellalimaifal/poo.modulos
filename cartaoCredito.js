class Pagamento {
    constructor(valor){
        this.valor = valor; 
    }

    processarPagamento(){
        console.log("Processando pagamento...")
    }
}

class CartaoCredido extends Pagamento {
    constructor(valor, bandeiraCartao){
        super(valor, bandeiraCartao);
        this.bandeiraCartao = bandeiraCartao
    }

    processarPagamento(){
        console.log(`Pagamento de R$: ${this.valor}, via cartão de crédito: ${this.bandeiraCartao}`);
    }
}

cartao1 = new CartaoCredido(19, 'Visa');
cartao1.processarPagamento();