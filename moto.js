class Veiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirDetalhes(){
        console.log(`Veículo da marca: ${this.marca}, modelo: ${this.modelo}`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cilindradas){
        super(marca, modelo);
        this.cilindradas = cilindradas;
    }

    getCilindradas(){
        return this.cilindradas;
    }

    exibirDetalhes(){
        console.log(`Veículo da marca: ${this.marca}, modelo: ${this.modelo}, com o motor de ${this.cilindradas} cm³`);
    }
}

let moto1 = new Moto("Honda", "Honda Shadow 750", 745);
moto1.exibirDetalhes();
