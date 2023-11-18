// Faça um programa para calcular o valor de uma viagem.

// Você terá 5 variáveis. Sendo elas:
//  1 - Preço do etanol;
//  2 - Preço do gasolina;
//  3 - O tipo de combustível que está no seu carro;
//  4 - Gasto médio de combustível do carro por KM;
//  5 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoEtanol = 3.64;
const precoGasolina = 5.82;
const gastoMedio = 10; //10 litros p/ km
const distanciaKmViagem = 50;
const tipoCombustivel = "etanol";

const combustivelGasto = distanciaKmViagem / gastoMedio;

if (tipoCombustivel === "gasolina") {
  const valorGasto = combustivelGasto * precoGasolina;
  console.log(valorGasto);
} else {
  const valorGasto = combustivelGasto * precoEtanol;
  console.log(valorGasto);
}
