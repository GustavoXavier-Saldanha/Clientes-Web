export const validacao = (nome, peso, altura) => {
  if (nome < 2 || nome > 100) {
    return "O nome deve ter entre 2 e 100 caracteres!";
  } else if ((peso < 0 || peso > 299, 9)) {
    return "O peso não deve ser negativo e nem maior que 299,9!";
  } else if ((altura < 0 || altura > 2, 99)) {
    return "A altura não deve ser negativa e nem maior que 2,99!";
  } else {
    return "";
  }
};
