const valores = ["a", true, false, undefined, {}, []];

for (const i in valores) {
  console.log(typeof valores[i], valores[i]);
  if (valores[i]) {
    console.log(true);
  } else {
    console.log(false);
  }
}
