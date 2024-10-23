const imgs = [
  "img/Image01.jpg",
  "img/Image02.jpg",
  "img/Image03.jpg",
  "img/Image04.jpg",
  "img/Image05.jpg",
  "img/Image06.jpg",
  "img/Image07.jpg",
  "img/Image08.jpg",
  "img/Image09.jpg",
  "img/Image10.jpg",
  "img/Image11.jpg",
  "img/Image12.jpg",
  "img/Image13.jpg",
  "img/Image14.jpg",
  "img/Image15.jpg",
  "img/Image16.jpg",
  "img/Image17.jpg",
  "img/Image18.jpg",
  "img/Image19.jpg",
  "img/Image20.jpg",
  "img/Image21.jpg",
  "img/Image22.jpg",
  "img/Image23.jpg",
  "img/Image24.jpg",
];

let idIntervalo = null;
let status = true;

document.addEventListener("DOMContentLoaded", function () {
  const buttonParar = document.querySelector(".switch");

  const buttonVoltar = document.getElementById("voltar");
  const buttonSeguir = document.getElementById("proxima");

  seguirCarrossel();

  buttonVoltar.addEventListener("click", seguirCarrossel);
  buttonSeguir.addEventListener("click", voltarCarrossel);

  idIntervalo = setInterval(seguirCarrossel, 100);
  buttonParar.addEventListener("click", controllerTroca);

  window.addEventListener("keydown", (e) => carrosselNavigation(e.key));
});

function cancelarTroca() {
  status = false;
  clearInterval(idIntervalo);
  idIntervalo = null;
}

function recomecar() {
  if (idIntervalo === null) {
    status = true;
    idIntervalo = setInterval(seguirCarrossel, 100);
  }
}

function controllerTroca() {
  if (status) {
    cancelarTroca();
  } else {
    recomecar();
  }
}

function voltarCarrossel() {
  const first = imgs.pop();
  imgs.unshift(first);
  const display = imgs[0];

  const imagem = document.querySelector("img");
  imagem.src = display;
  imagem.alt = "Imagem";
}

function seguirCarrossel() {
  const first = imgs.shift();
  imgs.push(first);
  const display = imgs[0];

  const imagem = document.querySelector("img");
  imagem.src = display;
  imagem.alt = "Imagem";
}

function carrosselNavigation(key) {
  console.log("teste", key);
  cancelarTroca();
  if (key === "ArrowLeft") {
    voltarCarrossel();
  } else {
    seguirCarrossel();
  }
}
