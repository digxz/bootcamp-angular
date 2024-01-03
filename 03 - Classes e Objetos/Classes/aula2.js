//Criando Instâncias Com Constructor

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
  }
}

let digs = new Pessoa("Diego", 18);
let yas = new Pessoa("Yasmin", 17);
