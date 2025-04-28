function cadastrarAnimal(nome, especie){
    return `Animal ${nome} da especie ${especie}, cadastrado com sucesso!`;
}

function agendarConsulta(nome){
    return `Consulta para ${nome} agendada.`;
}

module.exports = {
    cadastrarAnimal,
    agendarConsulta
};