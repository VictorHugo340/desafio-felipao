//Importação do Módulo prompt para requisição de dados do usuário
const prompt = require('prompt-sync')();

//lançamento das variáveis e solicitação ao usuário 
let nomeHeroi = prompt("Digite o nome do Herói: ")
let qtdxp = Number(prompt("Agora, informe a quantidade de XP do herói: "))
let nivelHeroi;

//Estrutura COndicional para validação do Nível do herói
if (qtdxp <= 1000) {
    nivelHeroi = "Ferro"
} else if (qtdxp <= 2000){
    nivelHeroi = "Bronze"    
} else if(qtdxp <= 5000){
    nivelHeroi = "Prata"
} else if (qtdxp <= 7000) {
    nivelHeroi = "Ouro"
} else if (qtdxp <= 8000) {
    nivelHeroi = "Platina"
} else if (qtdxp <= 9000) {
    nivelHeroi = "Ascendente"
} else if (qtdxp <= 10000) {
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

//Saída
console.log ("O herói de nome " + nomeHeroi + " tem " + qtdxp + " XP e está no nível " + nivelHeroi + " !")