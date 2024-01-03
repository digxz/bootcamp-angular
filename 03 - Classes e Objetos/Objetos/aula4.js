//Acessando dinamicamente valores de um objeto

var digs = {
  nome: "diego",
  idade: 18,

  descrever: function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
  },
};

console.log(digs["nome"]);
