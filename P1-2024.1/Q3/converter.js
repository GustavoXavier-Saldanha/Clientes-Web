export function servicosParaString(servicos) {
  const retorno = servicos.map((e) => {
    return `${e.descricao} dura ${e.duracao} minutos e custa R$ ${e.valor}`;
  });
  return retorno;
}
