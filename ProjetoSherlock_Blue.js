console.log("Por favor, responda as perguntas abaixo utilizando 0 para não e 1 para sim");

let primeiraPergunta = +prompt ("Telefonou para a vítima?");
let segundaPergunta = +prompt ("Esteve no local do crime?");
let terceiraPergunta = +prompt ("Mora perto da vítima?");

let quartaPergunta = +prompt ("Devia para a vítima?");

let quintaPergunta = +prompt ("Já trabalhou com a vítima?");

if (primeiraPergunta + segundaPergunta + terceiraPergunta + quartaPergunta + quintaPergunta == 5 ) {
console.log("Você é o assasino")}

 else if  (primeiraPergunta + segundaPergunta + terceiraPergunta + quartaPergunta + quintaPergunta == 4 ) {
  console.log("Você é cúmplice")}

else if (primeiraPergunta + segundaPergunta + terceiraPergunta + quartaPergunta + quintaPergunta == 3 ) {
console.log("Você é cúmplice")}

else if  (primeiraPergunta + segundaPergunta + terceiraPergunta + quartaPergunta + quintaPergunta == 2 ){
  console.log("Você é suspeito")}

  else if  (primeiraPergunta + segundaPergunta + terceiraPergunta + quartaPergunta + quintaPergunta <2 ){
  console.log("Você é inocente")}

else {
  console.log ("Opção inválida")
}
