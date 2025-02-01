const API_JOGOS = "http://localhost:3000/jogos";
export class GestorJogo {
  async cadastrar({ nome, anoLancamento, desenvolvedora, nota }) {
    const jogo = new Jogo(nome, anoLancamento, desenvolvedora, nota);
    const errors = jogo.validar();
    if (errors.length > 0) {
      throw new Error(errors.join("\n"));
    }
    const opcoes = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jogo),
      signal: AbortSignal.timeout(3000),
    };
    const result = await fetch(API_JOGOS, opcoes);
    if (!result.ok) {
      throw new Error("Erro ao cadastrar o jogo");
    }
  }

  async jogos() {
    const opcoes = {
      signal: AbortSignal.timeout(3000),
    };
    const result = await fetch(API_JOGOS, opcoes);
    if (!result.ok) {
      throw new Error("Erro ao consultar os jogos");
    }
    return await result.json();
  }

  async remover(id) {
    const opcoes = {
      signal: AbortSignal.timeout(3000),
      method: "DELETE",
    };
    const url = `${API_JOGOS}/${id}`;
    const result = await fetch(url, opcoes);
    if (!result.ok) {
      throw new Error("Erro ao excluir data.");
    }
  }
}
