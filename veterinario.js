class PessoaVeterinaria{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados(nome, idade){
        console.log(`Nome: ${nome}, Idade: ${idade}.`);
    }
}

class Veterinario extends PessoaVeterinaria {
    constructor(nome, idade, especialidade){
        super(nome, idade);
        this.especialidade = especialidade;
    }

    exibirDados(){
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}.`);
    }

    exibirEspecialidade(){
        console.log(`Especialidade: ${this.especialidade}.`);
    }
}

module.exports =  Veterinario;