const pessoaEscola = require('./pessoaEscola');

class Aluno extends pessoaEscola {
    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    mostrarCurso() {
        console.log(`Curso: ${this.curso}`);
    }
}

module.exports = Aluno;
