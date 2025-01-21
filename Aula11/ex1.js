function concatenarArray(arr1, arr2) {
  return { ...arr1, ...arr2 };
}

function concatenarArray2(...arrays) {
  const novo = [];

  for (let atual of arrays) {
    novo.push(...atual);
  }
  return novo;
}
