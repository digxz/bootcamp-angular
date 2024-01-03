//Estrutura Condicional com Else If

const numero = 0;
const numeroPar = numero % 2 === 0;

if (numero === 0) {
  console.log("O número é inválido");
} else if (numeroPar) {
  console.log("Executei sendo par");
} else {
  console.log("Não executei sendo ímpar");
}

//Caso o primeiro If não seja executado (não seja true), o primeiro Else fará com que o resto do código seja executado
