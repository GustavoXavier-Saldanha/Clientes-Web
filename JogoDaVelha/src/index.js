import { obterJogo } from "./logicaJogo.js";

document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {
  const jogo = obterJogo();
  carregarJogo(jogo);
}

const carregarJogo = (statusJogo) => {
  const div = document.getElementById("corpoJogo");

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      const bloco = document.createElement("div");
      console.log("teste", statusJogo[i][j]);
      bloco.dataset.id = `${i}${j}`;
      bloco.append(statusJogo[i][j]);
      if (statusJogo[i][j] !== "") {
        bloco.classList.add("disable");
      }
      bloco.addEventListener("click", selecionarBloco);
      div.append(bloco);
    }
  }
};

const selecionarBloco = (e) => {
  console.log(e.target);
  let i = e.target.dataset.id[0];
  let j = e.target.dataset.id[1];

  const option = localStorage.getItem("option");
  let statusJogo = JSON.parse(localStorage.getItem("statusJogo"));

  const bloco = document.querySelector(`[data-id="${i}${j}"]`);

  bloco.innerText = option;

  statusJogo[i][j] = option;
  bloco.classList.add("disable");

  localStorage.setItem("statusJogo", JSON.stringify(statusJogo));

  localStorage.setItem("option", option === "X" ? "O" : "X");
};

const verificarGanhador = (jogo) => {
  let x = 0;
  let y = 0;
  let z = 0;

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      if (jogo[i][j] === "X") {
      }else if(jogo[i][j] === "O"){
        
      }
    }
  }

  if (x) {
    const div = document.getElementById("corpoJogo");

    div.classList.add("disable");

    document
      .getElementById("resultado")
      .append(
        (document.createElement("h2").innerText = `O jogador ${
          option === "X" ? "O" : "X"
        } GANHOU!!!`)
      );
  }
};

const verificaColuna = (c) => {
  let x;
  for (let i = 0; i <= 2; i++) {
    if (c[i]) {
      x;
    }
  }
};
