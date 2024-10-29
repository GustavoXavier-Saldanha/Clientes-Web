const valores = ["a", true, false, undefined, {}, []];

valores.forEach(function (valor, indice) {
  console.log(typeof valor, indice);
  if (valor) {
    console.log(true);
  } else {
    console.log(false);
  }
});
