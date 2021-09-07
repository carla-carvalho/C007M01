const prompt = require('prompt-sync')();

//Exercício 1 - Frase na tela
//Implemente um programa que escreve na tela a frase "O primeiro programa a gente nunca esquece!".

console.log("O primeiro programa a gente nunca esquece!");

//Exercício 2 - Etiqueta 
//Elabore um programa que escreve seu nome completo na primeira linha, seu endereço na segunda e o CEP e telefone na terceira.

console.log ("Carla Silva de Carvalho")
console.log ("Rua do balão");
console.log ("21985471122");

//Exercício 3 - Letra de música - Faça um programa que mostre na tela uma 
//letra de música que você gosta:

console.log("Deixa eu me apresentar\nQue eu acabei de chegar\nDepois que me escutar\nVocê vai lembrar meu nome");

// Exercício 4 - Tabela de notas - Você foi contratado ou contratada por uma escola para fazer o sistema de boletim dos alunos.
// Como primeiro passo, escreva um programa que produza a seguinte saída:
// ALUNO (A)  NOTA
// =========  ====
// ALINE           9.0
// MÁRIO          DEZ
// SÉRGIO        4.5
// SHIRLEY       7.0

console.log ("ALUNO (A)  NOTA");
console.log (" =========  ====");
console.log (" ALINE     9.0");
console.log (" MÁRIO     DEZ");
console.log ("SÉRGIO     4.5");
console.log ("SHIRLEY    7.0");

//Exercício 5 
//Faça um programa de cadastro de clientes que mostre um menu de opções e permita com que a pessoa escolha umas das opções, exibindo qual foi a opção escolhida.

console.log ("Cadastro de clientes");
console.log ();
console.log ("0 - Fim\n1 - Inclui\n2 - Altera\n3 - Exclui\n4 - Consulta");
console.log();
let escolha = +prompt ("Escolha a opção desejada:");

if (escolha == 0){
     console.log ("Você escolheu finalizar");
 }
else if (escolha == 1){
     console.log ("Você escolheu incluir");
 }

else if (escolha == 2){
   console.log ("Você escolheu alterar")
}

else if (escolha == 3){
    console.log ("Você escolheu excluir");
}

else if (escolha == 4){
    console.log ("Você escolheu consultar")
 }

 else {
     console.log ("Opção inválida");
}

// Exercício 6 -  Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário:
// Quantidade de vida de um monstro (entre 10 e 50);
// Valor do ataque do jogador por turno (entre 5 e 10);
// Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro.
// O jogador irá derrotar o monstro em 8 turnos.

console.log ("Calculdadora de dano");

const vida = +prompt ("Digite a quantidade de vida do monstro entre 10 e 50: ");

const ataque = +prompt ("Digite o valor do ataque por turno entre 5 e 10: ");

const turnos = (vida / ataque);

console.log (`O jogador irá derrotar o monstro em ${turnos} turnos.`);

// Exercício 7 - E os 10% do garçom?
// - Defina uma variável para o valor de uma refeição que custou R$ 42,54;
// - Defina uma variável para o valor da taxa de serviço que é de 10%;  Defina uma variável que calcula o valor total da conta e exiba-o no 
// console com essa formatação: R$ 9999.99.

console.log("Calculadora de gorjeta");
let valorRefeicao = 42.54;
let gorjeta = ((valorRefeicao / 100)*10);

let valorTotal = (gorjeta + valorRefeicao);

console.log (`O valor total da refeição foi R$${valorTotal.toFixed(2)}`);

// Exercício 8 - Qual o valor do troco?
// - Defina uma variável para o valor de uma compra que custou R$100,98;
// - Defina uma variável para o valor que o cliente pagou R$150,00;
// - Defina uma variável que calcula o valor do troco e exiba-o no console
// com o valor final arredondado.

let valorcompra = 100.98
let valorpago = 150
let valortroco = (valorpago - valorcompra);

console.log (`O valor do troco é de R$${valortroco.toFixed(2)}`);

// Exercício 9 - Você está na flor da idade?
// - Defina uma variável para o valor do ano do nascimento;
// -  Defina uma variável para o valor do ano atual;
// - Defina uma variável que calcula o valor final da idade da pessoa;
// -  Exiba uma mensagem final dizendo a idade da pessoa e a mensagem "Você está na flor da idade".

let anoNascimento = +prompt("Em que ano você nasceu?");
let anoAtual = new Date().getFullYear();

let idade = (anoAtual - anoNascimento);

console.log (`Você tem ${idade} anos. Você está  na flor da idade.`)

//Exercício 10 - Conversor de moedas
// Crie um programa que solicite um um valor em real ao usuário e converta esse
// valor, para:
// DOLAR
// EURO
// LIBRA ESTERLINA
// DÓLAR CANADENSE
// PESO ARGENTINO
// PESO CHILENO

let valor = +prompt ("Digite o valor que deseja converter: ");

console.log (`Valor hoje em dólar: R$${(valor.toFixed(2) / 5.17)}`);

console.log (`Valor hoje em euro: R$${(valor.toFixed(2) / 6.12)}`);

console.log (`Valor hoje em libra esterlina: R$${(valor.toFixed(2) / 7.13)}`);

console.log (`Valor hoje em dólar canadense: R$${(valor.toFixed(2) / 4.09)}`);

console.log (`Valor hoje em peso argentino: R$${(valor.toFixed(2) / 0.052)}`);

console.log (`Valor hoje em peso chileno: R$${(valor.toFixed(2) / 0.0066)}`);

// Exercício 11 - Calculadora de aumento de aluguel - Parte 1
// A sua calculadora vai receber o valor do aluguel e calcular o aumento baseado
// no IGPM de 31%.
// A calculadora deve apresentar o aluguel reajustado no formato R$9999.99
// Exemplo:
// Valor do aluguel = 1000
// Valor do aluguel reajustado = R$ 1310,00

let valorAluguel = +prompt ("Digite o valor do aluguel: ")

let taxaIgpm = 31

let calculo = ((valorAluguel / 100) * taxaIgpm);

let valorTotal = (valorAluguel + calculo);

console.log (`O novo valor do aluguel será de R$${valorTotal.toFixed(2)}`);


// Exercício 12- Calculadora de aumento de aluguel - Parte 2
// Altere sua calculadora (feita na parte 1) para receber além do valor do aluguel,
// o percentual do reajuste no formato 99%.

const valorAluguel = +prompt("Valor do aluguel: ");
const percentualReajuste = +prompt("Percentual do reajuste: ");
const percentualReajusteDecimal = (+percentualReajuste.replace("%", "") / 100) + 1;
const valorAluguelReajustado = valorAluguel * percentualReajusteDecimal;

console.log(`O aluguel com reajuste de ${percentualReajuste}% ficará R$${valorAluguelReajustado.toFixed(2)}.`);






