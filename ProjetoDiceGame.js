const prompt = require('prompt-sync')();

console.log("Bem-vinda(o) ao jogo de dados. Vamos ver como está sua sorte hoje?");
console.log();

let jogadores = []
let quantidadeRodadas = 0

//estipulando quantas rodadas irão ter e que o jogador só pode escrever número
function rodadas (){
    quantidadeRodadas = +prompt("Quantas rodadas você quer jogar?")
if (isNaN(quantidadeRodadas)) {
  console.log ("Comando inválido")

}
}

rodadas();

// perguntando quantos jogadores irão jogar e que só pode escrever número
function numJogadores (){
var quantidadeJogadores = +prompt ("Quantos jogadores irão jogar?")
if (isNaN(quantidadeJogadores)) {
  console.log ("Comando inválido")
}

// Criando objeto para cada jogador e número tirado e guardando na lista 
for (let i = 1; i <= quantidadeJogadores; i++){
let jogo = { nome: prompt("Qual o nome do jogador?")
}
jogo.vitorias = 0
jogadores.push(jogo)}
console.log();

}

numJogadores();
console.log();

for (let i = 1; i <= quantidadeRodadas; i++) {

// aqui o jogo começa, número aletório para estabelecer 
for (let i of jogadores){
    i.rodada = (Math.floor(Math.random() * 6) + 1)
    console.log(`${i.nome} jogou o dado e tirou o número ${i.rodada}`);
}


// verificando quem ganhou cada rodada

jogadores.sort((a, b) => b.rodada - a.rodada);
    jogadores[0].vitorias++
 console.log(`O vencedor da rodada foi ${jogadores[0].nome}`)
}
// ordenando quem foi o campeão de acordo com as vitórias de cada rodada
jogadores.sort((a, b) => b.vitorias - a.vitorias);

console.log();
console.log(`O grande campeão foi ${jogadores[0].nome}! PARABÉNS!`);
