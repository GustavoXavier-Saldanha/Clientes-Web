import { adicionar } from "./contas.js";

document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  console.log("teste1");

  const botao = document.getElementsByTagName("button").item(0);
  botao.addEventListener("click", adicionar);
}
