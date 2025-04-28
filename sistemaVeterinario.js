const {cadastrarAnimal, agendarConsulta} = require('./servicosVeterinaria');
const {nomeClinica, anoFundacao} = require('./infoVeterinaria');
const Veterinario = require('./veterinario');
const DonoAnimal = require('./dono');

const pet1 = cadastrarAnimal("Bolt", "Cão");
const pet2 = agendarConsulta("Mimi");

console.log(nomeClinica);
console.log(anoFundacao);

console.log(pet1);
console.log(pet2);

const veterinario = new Veterinario('Dr.Paulo', 45, 'Cardiologia');
const dono = new DonoAnimal('Julia', 28, 3);

veterinario.exibirDados();
veterinario.exibirEspecialidade();

dono.exibirDados();
dono.exibirQuantidadeDeAnimais();