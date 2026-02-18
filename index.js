//Importação do Módulo prompt para requisição de dados do usuário
const prompt = require('prompt-sync')();

//lançamento das variáveis e solicitação ao usuário 
nomeHeroi = prompt("Digite o nome do Herói: ")
qtdxp = prompt("Agora, informe a quantidade de XP do herói: ")
console.log ("O herói de nome " + nomeHeroi + " tem " + qtdxp + " pontos de experiência")