const { gets, print } = require("./funcoesauxiliares");

const salarioBruto = gets();
const adicionalDoBeneficio = gets();

function calcularPorcentagem(valor, percentual) {
  return valor * (percentual / 100);
}

function pegarPercentualImpostoComBaseNoSalario(salario) {
  if (salario >= 0 && salario <= 1100) {
    return 5;
  } else if (salario >= 1100.01 && salario <= 2500) {
    return 10;
  } else {
    return 15;
  }
}
