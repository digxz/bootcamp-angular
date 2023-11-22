//Criando métodos para os objetos

//Um método é uma função dentro de um objeto

const digs = {
  nome: "diego",
  idade: 18,

  descrever: function () {
    console.log("Meu nome é ${this.nome} e minha idade é ${this.idade}");
  },
};

digs.descrever();
