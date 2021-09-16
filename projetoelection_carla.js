const prompt = require('prompt-sync')();

console.log ("Bem vinda(o) ao sistema de votação. A partir de agora, o futuro do país está nas suas mãos.")

//função que determina se a pessoa está apta a votar

function autorizaVoto(anoNascimento) {
    let anoAtual = new Date().getFullYear();
    let idade = (anoAtual - anoNascimento);

    if (idade <16) {
        return "Negado"
    }

    else if (idade <18 || idade >= 70) {
        return " Opcional"
    }

    else {
        return "Obrigatório"
    }

}

// objeto e variáveis que recebem contadores para computar os votos

let candidatos = [ {nome: "Mickey", votos: 0}, {nome: "Mario Bros", votos: 0}, {nome: "Kratos", votos: 0}]
let votoNulo = 0
let votoBranco = 0

// função que valida e conta os votos válidos ou retorna a mensagem que a pessoa não tem idade suficiente, fazendo com que o voto deixe de ser válido.
function votacao(autorizacao,voto){

    if (autorizacao == "Negado"){
        console.log ("Você não tem a idade mínima para votar");
    } 

    else if (voto < 0 || voto > 5){
        console.log ("Você votou nulo")
        votoNulo++
    }

    else if (voto == 4){
      console.log ("Você votou nulo")
      votoNulo++
    }

    else if (voto == 5){
        console.log ("Você votou em branco")
        votoBranco++
    }

    else if ( voto >= 1 || voto <=3 ){
        candidatos[voto-1].votos++
        console.log(`Você votou em: ${candidatos[voto-1].nome}`)

    }
}
    // função criada para facilitar na hora de chamar a votação, dentro dela chama as outras funções necessárias.
    function iniciarVotacao (){
        let inserirVoto = +prompt ("Deseja inserir um voto? Digite 1 para SIM e 2 para NÃO: ");
        if (inserirVoto == 1){
           comecaVotar();
    
           
        }
        else if(inserirVoto == 2){
            exibirResultados ();
        }
        else {
            console.log ("Comando inválido")
        }
    }

    // função criada par estabelecer o início da votação e a autorização 
    function comecaVotar (){

        let anoNasc = +prompt("Em que ano você nasceu? ");
        console.log();
        let autoriza = autorizaVoto(anoNasc);
        console.log("Escolha entre os candidatos abaixo e digite o número desejado para cada opção:\n\n1 - Mickey\n2 - Mario Bros \n3 - Kratos\n4 - Voto Nulo\n5 - Voto em branco ")
        console.log();
        let voto = + prompt ("Qual o seu voto?")
        votacao(autoriza,voto);
        iniciarVotacao();
    
    }

// função que exibe os resultados somando todos os votos e computando apenas os válidos para estabelecer o vencedor. 
function exibirResultados (){
    console.log();
    console.log("RESULTADO FINAL DA VOTAÇÃO:");
    console.log();
    
    let votosValidos = 0 
    for (let i of candidatos) {
        votosValidos = votosValidos + i.votos
    }
    console.log(`Votos válidos: ${votosValidos}`)
    console.log(`Votos nulos: ${votoNulo}\nVotos em branco: ${votoBranco}`)
    console.log();
    for (let i of candidatos) {
        console.log(`O candidato ${i.nome} recebeu ${i.votos} votos.`)
    }
 
    candidatos.sort((a, b) => b.votos - a.votos);
    console.log();
    console.log(`O candidato ${candidatos[0].nome} foi eleito com ${candidatos[0].votos} votos.`)

}

iniciarVotacao();
