//Funções recebendo objetos

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

function compararPessoas(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velho que ${p2.nome}!`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velho que ${p1.nome}!`);
  } else {
    console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`);
  }
}

let digs = new Pessoa("Diego", 18);
let yas = new Pessoa("Yasmin", 17);

compararPessoas(digs, yas);
