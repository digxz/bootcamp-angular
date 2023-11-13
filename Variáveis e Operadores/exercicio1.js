// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  1 - Preço do combustível;
//  2 - Gasto médio de combustível do carro por KM;
//  3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let preco = 5; //o litro está x reais
let gasto = 15; //x litros por km
let distancia = 10; //x km

const solucao = distancia * gasto * preco; //fórmula para a solução

console.log("Será gasto", solucao, "reais nessa viagem");
