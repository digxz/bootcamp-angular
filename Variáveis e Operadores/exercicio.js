// Faça um programa para calcular o valor de uma viagem.

// Você terá 3 variáveis. Sendo elas:
//  1 - Preço do combustível;
//  2 - Gasto médio de combustível do carro por KM;
//  3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

let precoCombustivel = 5.7; //o litro está x reais
let kmLitros = 10; //x km por litro
let distanciaPercorrida = 150; //x km

const litrosConsumidos = distanciaPercorrida / kmLitros;

const precoGasto = litrosConsumidos * precoCombustivel;

console.log("Será gasto", precoGasto.toFixed(2), "reais nessa viagem.");
//.toFixed(x): esse x é a quantidade de números depois da vírgula.
