class PessoaVeterinaria{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados(nome, idade){
        console.log(`Nome: ${nome}, Idade: ${idade}.`);
    }
}

module.exports =  PessoaVeterinaria;