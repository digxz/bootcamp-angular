//Fazer um sistema que indique o quanto uma pessoa ganha por hora

class Pessoa {
  nome;
  salario;
  horasPorDia;

  constructor(nome, salario, horasPorDia) {
    this.nome = nome;
    this.salario = salario;
    this.horasPorDia = horasPorDia;
  }

  calcularSalario() {
    return this.salario / 22 / this.horasPorDia;
  } // 22 dias no mês
}

const digs = new Pessoa("Diego", 950, 4);
console.log(digs.calcularSalario());

const yas = new Pessoa("Yasmin", 5350, 4);
console.log(yas.calcularSalario());
