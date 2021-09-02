// inicio

encerrarJogo:
while(escolhaFinal = 1){

let rodadas = +prompt("Esse é o jogo Jokenpo!\nVamos começar?\nPrimeiro, escolha quantas rodadas você quer:");
	let jogadorGanha = 0;
	let maquinaGanha = 0;
	let rodadaEmpate = 0;

	console.log(`Huum, ok! Melhor de ${rodadas} então!`);
	console.log();


	for (let i = 0; i <= (rodadas - 1) ; i++) {
	  var escolhaJogador = +prompt("Escolha o número correspondente ao seu elemento:\n1-Pedra\n2-Papel\n3-Tesoura\n");

var comandoInvalido = 0;

	  if (escolhaJogador == 1) {
		console.log();
	console.log("Você escolheu Pedra");
	}

	else if (escolhaJogador == 2) {
	  console.log();
	console.log("Você escolheu Papel");
	}

	else if (escolhaJogador == 3) {
	  console.log();
	console.log("Você escolheu Tesoura")}

	else {
  comandoInvalido = 1;
	}

  while(comandoInvalido != 1){
	   console.log();
	  const random = (min, max) => Math.floor(Math.random()* (max - min) + min);
	const opcoes = ["Pedra", "Papel", "Tesoura"];
	var escolha = (opcoes[random(0,opcoes.length)]);
	console.log(`A máquina escolheu ${escolha}`);
	console.log();
  if (comandoInvalido = 1){
    break;
  }
  }

	if (escolhaJogador == "2" && escolha == "Papel"){
		console.log("Ih, empatou!");
		console.log();
		rodadaEmpate++
		
	  } else if (escolhaJogador == "2" && escolha == "Pedra"){
		console.log("Papel Embrulha Pedra!");
		console.log("Você ganhou!");
		jogadorGanha++
		
	  } else if (escolhaJogador == "2" && escolha == "Tesoura"){
		console.log("Tesoura Corta Papel!");
		console.log("Que pena, você perdeu!");
		console.log();
		maquinaGanha++
		
	  } else if (escolhaJogador == "3" && escolha == "Tesoura"){
		console.log("Ih, empatou!");
		console.log();
		rodadaEmpate++
		
	  } else if (escolhaJogador == "3" && escolha == "Pedra"){
		console.log("Pedra Quebra Tesoura!");
		console.log("Que pena, você perdeu!");
		console.log();
		maquinaGanha++
		
	  } else if (escolhaJogador == "3" && escolha == "Papel"){
		console.log("Tesoura Corta Papel!");
		console.log("Você ganhou!");
		console.log();
		jogadorGanha++
		
	  } else if (escolhaJogador == "1" && escolha == "Pedra"){
		console.log("Ih, empatou!");
		console.log();
		rodadaEmpate++
		
	  } else if (escolhaJogador == "1" && escolha == "Papel"){
		console.log("Papel Embrulha Pedra!");
		console.log("Que pena, você perdeu!");
		console.log();
		maquinaGanha++
		
	  } else if (escolhaJogador == "1" && escolha == "Tesoura"){
		console.log("Pedra Quebra Tesoura!");
		console.log("Você ganhou!");
		console.log();
		jogadorGanha++
		
	  }

    else {
	console.log("Rodada inválida");
	}

  }
    console.log();

  // resultado final

   let totalRodadas = rodadaEmpate + jogadorGanha + maquinaGanha;
	  console.log(`Resultado Final:\nSeus pontos:${jogadorGanha}\nPontuação da máquina:${maquinaGanha}\nEmpates:${rodadaEmpate}`)
    console.log();

  if (jogadorGanha>maquinaGanha){
    console.log("PARABÉNS! Você é o grande campeão.")
  }
    else if (jogadorGanha<maquinaGanha) {
      console.log("Poxa, a máquina ganhou! Mas não desista, quem sabe na próxima?")
  }
  else {
     console.log("Opa, empatou! Mas não desista, quem sabe na próxima?")
  }

console.log();

// jogar novamente

var perguntaFinal = +prompt("Deseja Jogar Novamente? Digite 1-Sim ou 2-Não: ");

var escolhaFinal = 2;

if (perguntaFinal !== 1){
console.log("Você saiu do jogo");
break encerrarJogo
}
else{
escolhaFinal = 1
}
}