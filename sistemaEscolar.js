const { nomeEscola, anoFundacao } = require('./infoEscola');
const { matricularAluno, cancelarMatricula } = require('./servicosEscola');
const Aluno = require('./aluno');
const Professor = require('./professor');

console.log(nomeEscola);
console.log(anoFundacao);

const mensagemMatricula = matricularAluno('Fernanda', 'Informática');
const mensagemCancelamento = cancelarMatricula('João');

console.log(mensagemMatricula);
console.log(mensagemCancelamento);

const aluno1 = new Aluno('Gabriel', 17, 'Desenvolvimento de Sistemas');
aluno1.exibirDados();
aluno1.mostrarCurso();

const professor1 = new Professor('Beto', 40, 'Matemática');
professor1.exibirDados();
professor1.mostrarDisciplina();
