import { adicionar, contas, desenharContas } from "./contas.js";

document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  desenharContas(contas);

  document.querySelector("button").addEventListener("click", adicionar);
}