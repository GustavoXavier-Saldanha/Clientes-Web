import { validacao } from "./validacao";

document.addEventListner("DOMContentLoaded", iniciar);

const iniciar = () => {
  document.getElementById("salvar").addEventListner("click", salvar);
};

export const salvar = () => {
  const nome = document.getElementById("nome").value;
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;

  const error = validacao(nome, peso, altura);

  if (error !== "") {
    alert(error);
    return;
  }

  const id = gerarId();

  const data = {
    id: id,
    nome: nome,
    peso: peso,
    altura: altura,
  };

  let itens = localStorage.getItem("itens");

  if (!itens) {
    itens = [data];
  } else {
    itens = JSON.parse(itens);
    itens.push(data);
  }

  localStorage.setItem("itens", JSON.stringify(itens));
};

const gerarId = () => {
  const dataJson = localStorage.getItem("itens");
  const data = JSON.parse(dataJson);
  let id = 0;
  for (const d of data) {
    if (d.id > id) {
      id = d.id;
    }
  }
  return id + 1;
};
