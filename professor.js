const pessoaEscola = require('./pessoaEscola');

class Professor extends pessoaEscola {
    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    mostrarDisciplina() {
        console.log(`Disciplina: ${this.disciplina}`);
    }
}

module.exports = Professor;
