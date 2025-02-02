// 2023/src/index.js
import { gerarId } from "./id.js";

document.addEventListener("DOMContentLoaded", iniciar);

async function iniciar() {
  document.getElementById("salvar").addEventListener("click", salvarItem);
  if (navigator.onLine) {
    await carregarItensDoServidor();
  } else {
    carregarItensDoLocalStorage();
  }
  window.addEventListener("online", sincronizarItensNaoSalvos);
}

async function salvarItem(event) {
  event.preventDefault();
  const descricao = document.getElementById("descricao").value;
  const estoque = document.getElementById("estoque").value;
  const resultado = document.getElementById("resultado");

  if (descricao.length < 2 || descricao.length > 100) {
    resultado.innerText = "Descrição deve ter entre 2 e 100 caracteres.";
    return;
  }

  if (!Number.isInteger(Number(estoque)) || Number(estoque) <= 0) {
    resultado.innerText = "Estoque deve ser um número inteiro positivo.";
    return;
  }

  const item = {
    id: gerarId(),
    descricao,
    estoque: Number(estoque),
    salvo: false,
  };

  const itens = JSON.parse(localStorage.getItem("itens")) || [];
  itens.push(item);
  localStorage.setItem("itens", JSON.stringify(itens));

  if (navigator.onLine) {
    try {
      await salvarItemNoServidor(item);
      item.salvo = true;
      localStorage.setItem("itens", JSON.stringify(itens));
      resultado.innerText = "Item salvo com sucesso!";
    } catch (error) {
      resultado.innerText = "Erro ao salvar item no servidor.";
    }
  } else {
    resultado.innerText =
      "Item salvo localmente. Será sincronizado quando houver conexão.";
  }

  adicionarItemNaTabela(item);
  atualizarRodape();
}

async function salvarItemNoServidor(item) {
  const response = await fetch("https://exemplo.com:88/itens", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Erro ao salvar item no servidor.");
  }
}

function adicionarItemNaTabela(item) {
  const tbody = document.querySelector("tbody");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.id}</td>
    <td>${item.descricao}</td>
    <td>${item.estoque}</td>
  `;
  tbody.appendChild(tr);
}

function atualizarRodape() {
  const itens = JSON.parse(localStorage.getItem("itens")) || [];
  const totalEstoque = itens.reduce((total, item) => total + item.estoque, 0);
  document.querySelector("tfoot td:last-child").innerText = totalEstoque;
}

async function carregarItensDoServidor() {
  try {
    const response = await fetch("https://exemplo.com:88/itens");
    const itens = await response.json();
    const itensComSalvo = itens.map((item) => ({ ...item, salvo: true }));
    localStorage.setItem("itens", JSON.stringify(itensComSalvo));
    carregarItensDoLocalStorage();
  } catch (error) {
    carregarItensDoLocalStorage();
  }
}

function carregarItensDoLocalStorage() {
  const itens = JSON.parse(localStorage.getItem("itens")) || [];
  itens.forEach(adicionarItemNaTabela);
  atualizarRodape();
}

function sincronizarItensNaoSalvos() {
  const itens = JSON.parse(localStorage.getItem("itens")) || [];
  const itensNaoSalvos = itens.filter((item) => !item.salvo);
  const resultado = document.getElementById("resultado");

  Promise.all(
    itensNaoSalvos.map((item) =>
      salvarItemNoServidor(item)
        .then(() => {
          item.salvo = true;
        })
        .catch((error) => {
          resultado.innerText += `Erro ao salvar item ${item.id}: ${error.message}\n`;
        })
    )
  ).then(() => {
    localStorage.setItem("itens", JSON.stringify(itens));
  });
}
