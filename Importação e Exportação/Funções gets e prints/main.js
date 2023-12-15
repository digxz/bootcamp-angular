const { gets, print } = require("./funcoesauxiliares");

const numerosDaLista = [];

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numerosDaLista.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosDaLista.length; i++) {
  const numeroSorteado = numerosDaLista[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

console.log(maiorValor);
