function matricularAluno(nome, curso) {
    return `Aluno(a) ${nome} foi matriculado(a) no curso de ${curso}`;
}

function cancelarMatricula(nome) {
    return `Matrícula de ${nome} foi cancelada com sucesso.`;
}

module.exports = {
    matricularAluno,
    cancelarMatricula
};
