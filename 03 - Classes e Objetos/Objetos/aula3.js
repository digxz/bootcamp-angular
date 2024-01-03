//Criando métodos para os objetos

//Um método é uma função dentro de um objeto

var digs = {
  nome: "diego",
  idade: 18,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
  },
};

//As backsticks (´´) são usadas para criar template strings em JavaScript.
//As template strings são strings que permitem incorporar expressões e variáveis
//dentro delas de uma maneira mais conveniente e legível do que as strings tradicionais
//criadas com aspas simples ('') ou duplas ("").

//O comando this diz respeito ao contexto da função, como essa função está dentro do objeto, o this assume o objeto.

digs.descrever();
