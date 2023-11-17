//Estrutura Condicional com If e Eles

const numero = 10;
const numeroPar = numero % 2 === 0;

if (numeroPar) {
  console.log("Executei sendo par");
} else {
  console.log("Não executei sendo ímpar");
}
//se a condicional que estiver dentro dos parenteses for verdadeira, o código dentro das chaves será executado

// if (!numeroPar) {
//   console.log("Não executei sendo ímpar (negação!)");
// }
//o ! indica uma negação (!numeroPar = contrário a variável numeroPar)
