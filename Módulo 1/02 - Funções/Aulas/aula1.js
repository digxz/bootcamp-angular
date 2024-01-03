//Conceitos básicos sobre funções

//Funções são blocos de códigos reutilizáveis
//Precisam ser invocadas para serem executadas
//exemplo();

function sayMyName(nome) {
  console.log("Your name is: " + nome);
}

sayMyName("digs");
sayMyName("yas");

//Os parênteses são os parâmetros da função (ou os argumentos, e esses argumentos precisam
//ser especificados na invocação, caso esteja preenchido na função)

function quadrado(x) {
  return (quadrado = x * x);
}

console.log(quadrado(20));

//Return serve para finalizar a execução de uma função e especifica os valores que devem
//ser retonados para onde a função foi chamada.

function aplicacaoJuros(valor, percentualJuros) {
  const valorDeAcrescimo = (percentualJuros / 100) * valor;
  return valor + valorDeAcrescimo;
}

console.log(aplicacaoJuros(100, 10));
