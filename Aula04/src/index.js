import {
  adicionar,
  carregarContas,
  deleteRows,
  desenharContas,
  marcar,
} from "./contas.js";

document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  console.log("teste1");

  const botao = document.getElementsByTagName("button").item(0);
  botao.addEventListener("click", adicionar);

  const botaoDelete = document.getElementById("deleteButton");
  botaoDelete.addEventListener("click", deleteRows);

  console.log("contas: ", carregarContas());
  desenharContas(carregarContas());
}
