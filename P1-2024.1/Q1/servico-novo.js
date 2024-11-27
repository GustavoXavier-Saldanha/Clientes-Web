import { validacao } from "./validacao";

document.addEventListener("DOMContentLoaded", iniciar);

const iniciar = () => {
  const button = document.getElementById("salvar");
  button.addEventListener("click", submit);
};

const submit = (e) => {
  e.preventDefault();

  const data = {
    desc: document.getElementById("desc").value,
    valor: document.getElementById("valor").value,
    duracao: document.getElementById("duracao").value,
  };

  const error = validacao(data);
  if (error) {
    const div = document.queryElement("div");
    div.innerText = error;
    return;
  }
  const localData = localStorage.getItem("servicos");
  let arr = localData.length > 0 ? JSON.parse(localData) : [];

  arr.push(data);

  localStorage.setItem("servicos", JSON.stringdy(data));

  window.location.url = "servicos.html";
};
