// 1) Crie uma classe para representar carros.
// Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor
// gasto em reais para realizar este percurso.

class Carro {
  marca;
  cor;
  gastoMedio;

  constructor(marca, cor, gastoMedio) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedio = gastoMedio;
  }

  gastoEmDinheiro(km, precoCombustivel) {
    return this.gastoMedio * km * precoCombustivel;
  }
}

let celtinha = new Carro("Chevrolet", "Branco", 1 / 10);
console.log(celtinha.gastoEmDinheiro(100, 5));
