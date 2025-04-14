class Pagamento {
    constructor(valor){
        this.valor = valor; 
    }

    processarPagamento(){
        console.log("Processando pagamento...")
    }
}


class Pix extends Pagamento {
    constructor(valor, chavePix){
        super(valor, chavePix)
        this.chavePix = chavePix;
    }

    processarPagamento(){
        console.log(`Pagamento de R$: ${this.valor}, via pix efetuado para chave pix: ${this.chavePix}`)
    }
}

let pix1 = new Pix(20, 3213);
pix1.processarPagamento();