// Crie uma classe chamada “Círculo” que possua um atributo para armazenar o raio e métodos para calcular a área e o perímetro do círculo.

class Circulo {
  raio;

  constructor(raio) {
    this.raio = raio;
  }

  calcularArea() {
    return 3.14 * this.raio * this.raio;
  }
}

var circuloUm = new Circulo(5);
console.log(circuloUm.calcularArea());
