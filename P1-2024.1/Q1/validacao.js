export const validacao = (data) => {
  const { desc, valor, duracao } = data;
  if (desc < 2 || desc > 100) {
    return "A descrição deve ter entre 2 e 100 caracteres!";
  } else if (Number.isNaN(valor) || valor > 0) {
    return "O valor deve ser um número maior que 0,00!";
  } else if (Number.isNaN(duracao) || duracao <= 10) {
    return "A duração deve ser um número e ter no mnínimo que 10 min!";
  } else {
    return "";
  }
};
