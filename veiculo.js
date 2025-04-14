class Veiculo {
    constructor() {
        this.marca = ''
        this.modelo = '';
    }

    exibirDetalhes(){
        console.log(`Veículo da marca: ${this.marca}, modelo: ${this.modelo}`);
    }
}