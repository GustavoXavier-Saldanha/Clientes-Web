export function carregarContas() {
  const contas = localStorage.getItem("contas");
  if (!contas) {
    return [];
  }
  return JSON.parse(contas);
}

export function salvarContas(contas) {
  const textoContas = JSON.stringify(contas);
  localStorage.setItem("contas", textoContas);
}

export function adicionar(event) {
  event.preventDefault();
  event.stopPropagation();

  let valor = document.getElementById("valor").value;
  if (Number.isNaN(valor)) {
    alert("Por favor, informe um número como valor.");
    return;
  }

  valor = Number(valor);

  const contas = carregarContas();
  const id = gerarId(contas);

  const conta = {
    id: id,
    descricao: document.getElementById("descricao").value,
    tipo: document.getElementById("tipo").value,
    valor: valor,
    finalizada: document.getElementById("finalizada").checked,
  };

  contas.push(conta);
  salvarContas(contas);

  const tbody = document.body.querySelector("tbody");
  tbody.appendChild(criarLinha(conta));

  document.querySelector("form").reset();
  document.querySelector("#descricao").focus();
}

function gerarId(contas) {
  let maior = 0;
  for (const conta of contas) {
    if (conta.id > maior) {
      maior = conta.id;
    }
  }
  return maior + 1;
}

export function desenharContas(contas) {
  const tbody = document.body.querySelector("tbody");
  tbody.innerText = "";
  contas.map((c) => criarLinha(c)).forEach((tr) => tbody.appendChild(tr));
}

function criarLinha(conta) {
  const tr = document.createElement("tr");
  tr.append(
    criarCelula(conta.id),
    criarCelula(conta.descricao),
    criarCelula(conta.valor),
    criarCelula(conta.tipo),
    criarCelula(conta.finalizada ? "Sim" : "Não")
  );

  tr.onclick = linhaClicada;
  tr.dataset.id = conta.id;

  return tr;
}

function criarCelula(texto) {
  const td = document.createElement("td");
  td.innerText = texto;
  return td;
}

function linhaClicada(event) {
  const td = event.target;
  const tr = td.parentElement;

  tr.classList.toggle("marcado");
}

export function remover(event) {
  const tr = document.querySelector(".marcado");
  if (!tr) {
    alert("Por favor, seleciona uma linha.");
    return;
  }
  if (!confirm("Deseja mesmo remover ?")) {
    return;
  }
  const id = tr.dataset.id;
  removeContaPeloId(id);

  tr.remove();
}

function removeContaPeloId(id) {
  const contas = carregarContas();

  const indice = contas.findIndex((c) => c.id == id);

  if (indice < 0) {
    return; 
  }
  contas.splice(indice, 1);
  salvarContas(contas);
}

export const filtrar = (e) => {
  e.preventDefault();

  const texto = document.getElementById("filter").value;
  const contas = carregarContas();

  const filter = contas.filter((c) => c.descricao.includes(texto));

  desenharContas(filter);
};
