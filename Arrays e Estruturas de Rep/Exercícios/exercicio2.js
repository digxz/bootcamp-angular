//Apenas números pares de uma lista

const listaDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < listaDeNumeros.length; i++) {
  const numerosDaLista = listaDeNumeros[i];

  if (numerosDaLista % 2 === 0) {
    console.log(numerosDaLista);
  }
}
