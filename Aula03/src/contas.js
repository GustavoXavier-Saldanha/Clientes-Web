export const contas = [
  { id: 1, descricao: "Energia", valor: 150.0, tipo: "P", finalizada: false },
  { id: 2, descricao: "Água", valor: 220.0, tipo: "P", finalizada: false },
  {
    id: 3,
    descricao: "Internet",
    valor: 330.0,
    tipo: "P",
    finalizada: false,
  },
  { id: 4, descricao: "Telefone", valor: 50.0, tipo: "P", finalizada: false },
  {
    id: 5,
    descricao: "Empréstimo 1",
    valor: 500.0,
    tipo: "R",
    finalizada: false,
  },
  {
    id: 6,
    descricao: "Salário",
    valor: 6000.0,
    tipo: "R",
    finalizada: false,
  },
];

export function desenharContas(contas) {
  const tbody = document.querySelector("tbody");

  let html = "";

  for (const conta of contas) {
    html +=
      "<tr><td>" +
      conta.id +
      "</td><td>" +
      conta.descricao +
      "</td><td>" +
      conta.valor +
      "</td><td>" +
      conta.tipo +
      "</td><td>" +
      (conta.finalizada ? "Sim" : "Não") +
      "</td></tr>";
  }
  tbody.innerHTML = html;
}

export function adicionarConta(conta) {
  tbody.innerHTML += criarLinhaConta(conta);
}

export function adicionar(event) {
  event.preventDefault();

  const conta = {
    id: gerarId(contas),
    descricao: document.getElementById("descricao").value,
    valor: document.getElementById("valor").value,
    tipo: document.getElementById("tipo").value,
    finalizada: document.getElementById("finalizada").value,
  };

  contas.push(conta);
}

function gerarId() {
  return contas[contas.length].id + 1;
}

function criarLinhaConta(conta) {
  "<tr><td>" +
    conta.id +
    "</td><td>" +
    conta.descricao +
    "</td><td>" +
    conta.valor +
    "</td><td>" +
    conta.tipo +
    "</td><td>" +
    (conta.finalizada ? "Sim" : "Não") +
    "</td></tr>";
}
