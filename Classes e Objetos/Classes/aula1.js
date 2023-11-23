//Como criar classes e instâncias
//Classes definem algo para que esse algo seja instanciado
//Classes são a definição e instância são a ocorrência
class Pessoa {
  nome;
  idade;

  descrever() {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos!`);
  }
}

//Não precisa usar o comando 'function' para criar uma função

let digs = new Pessoa();
digs.nome = "Diego";
digs.idade = 18;

let yas = new Pessoa();
yas.nome = "Yasmin";
yas.idade = 16;

//Classe é Pessoa e as instâncias são digs e yas, que possuem um nome e uma idade

digs.descrever();
