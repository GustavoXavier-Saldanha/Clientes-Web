import { ControladoraListagem } from "./controladora-listagem-jogo.js";

export class VisaoListagem {
  controladora = null;

  constructor() {
    this.controladora = new ControladoraListagem(this);
  }

  iniciar() {
    this.controladora.listar();
  }

  desenharJogos(jogos) {
    console.log(jogos);
    document.querySelector("tbody").innerHTML = jogos
      .map(
        (j) =>
          `
            <tr>
              <td>${j.id}</td>
              <td>${j.nome}</td>
              <td>${j.desenvolvedora}</td>
              <td>${j.anoLancamento}</td>
              <td>${j.nota}</td>
              <td><button>Remover</button></td>
            </tr>
            `
      )
      .join("");
    document
      .querySelectorAll("tr button")
      .forEach((e) => e.addEventListener("click", this.remover.bind(this)));
  }

  remover(e) {
    const linha = e.target.parentElement.parentElement;
    
  }
}

const visao = new VisaoListagem();
visao.iniciar();
