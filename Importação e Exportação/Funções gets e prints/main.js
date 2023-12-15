const { gets, print } = require("./funcoesauxiliares");

let maiorValor = 0;
const quantidadeDeAlunos = gets();

for (let i = 0; i < quantidadeDeAlunos; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}

print(maiorValor);
