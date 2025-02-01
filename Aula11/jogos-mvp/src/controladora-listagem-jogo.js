import { GestorJogo } from "./gestor-jogo.js";

export class ControladoraListagem {
  visao = null;
  gestor = null;

  constructor(visao) {
    this.visao = visao;
    this.gestor = new Gestor();
  }

  async listar() {
    try {
      const jogos = await gestor.jogos();
      this.visao.desenharJogos(jogos);
    } catch (error) {
      console.error(error);
    }
  }

  async removerJogoComId(id) {
    try {
      await this.gestor.removerJogoComId(id);
      this;
    } catch (error) {}
  }
}
