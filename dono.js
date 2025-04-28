class PessoaVeterinaria{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados(nome, idade){
        console.log(`Nome: ${nome}, Idade: ${idade}.`);
    }
}

class DonoAnimal extends PessoaVeterinaria{
    constructor(nome, idade, qtdAnimais){
        super(nome, idade);
        this.qtdAnimais = qtdAnimais;
    }

    exibirDados(){
       console.log(`Nome: ${this.nome}, Idade: ${this.idade}.`);
    }

    exibirQuantidadeDeAnimais(){
        console.log(`Quantidade de animais: ${this.qtdAnimais}.`);
    }
}

module.exports =  DonoAnimal;