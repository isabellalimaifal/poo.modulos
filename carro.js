class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirDetalhes(){
        console.log(`Veículo da marca: ${this.marca}, modelo: ${this.modelo}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, quantidadedePortas){
        super(marca, modelo);
        this.quantidadedePortas = quantidadedePortas;
    }

    getPortas(){
        return this.quantidadedePortas;
    }

    exibirDetalhes(){
        console.log(`Veículo da marca: ${this.marca}, modelo: ${this.modelo} com ${this.quantidadedePortas} portas!`);
    }
}

let carro1 = new Carro("Volkswagen", "T-Cross Extreme", 4);
carro1.exibirDetalhes();
