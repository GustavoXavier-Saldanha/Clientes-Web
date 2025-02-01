import { GestorJogo } from "./gestor-jogo.js";
import { Jogo } from "./jogo.js";

export class ControladoraJogo {
  visao = null;

  constructor(visao) {
    this.visao = visao;
  }

  async cadastrar() {
    const gestor = new GestorJogo();
    try {
      await gestor.cadastrar({ nome, anoLancamento, desenvolvedora, nota });
      this.visao.exibirMensagem("Cadastrado.");
    } catch (err) {
      this.visao.exibirMensagem(err.message);
    }
  }
}
