export function carregarContas() {
  const contas = localStorage.getItem("contas");

  if (!contas) {
    return [];
  } else {
    return JSON.parse(contas);
  }
}

export function salvarContas(conta) {
  const textoConta = JSON.stringify(conta);
  localStorage.setItem("contas", textoConta);
}

export function adicionar(event) {
  event.preventDefault();
  event.stopPropagation(); // O evento somente será tratado aqui

  let valor = document.getElementById("valor").value;
  if (Number.isNaN(valor)) {
    alert("Por favor preencha o campo de valor.");
    return;
  }

  valor = parseInt(valor);

  const contas = carregarContas();

  const conta = {
    id: gerarId(contas),
    descricao: document.getElementById("descricao").value,
    valor: valor,
    tipo: document.getElementById("tipo").value,
    finalizada: document.getElementById("finalizada").checked,
  };

  contas.push(conta);

  salvarContas(contas);

  document.querySelector("form").reset();
  document.querySelector("#descricao").focus();

  console.log("contas: ", carregarContas());
  desenharContas(carregarContas());
}

export function desenharContas(contas) {
  const tbody = document.querySelector("tbody");

  for (const c of contas) {
    console.log("test", c);
    tbody.appendChild(criarLinha(c));
  }
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
  tr.dataset.id = conta.id;
  tr.addEventListener("click", marcar);

  return tr;
}

function criarCelula(texto) {
  const td = document.createElement("td");
  td.innerText = texto;
  return td;
}

function gerarId(contas) {
  let maiorId = 0;

  for (const c of contas) {
    console.log("on add: ", c);
    if (c.id > maiorId) {
      maiorId = c.id;
    }
  }
  return maiorId + 1;
}

function limparList(tbody) {
  tbody.remove();
}

export function marcar(e) {
  const tr = e.target.parentElement;
  if (tr.classList.contains("marked")) {
    tr.classList.remove("marked");
  } else {
    tr.classList.add("marked");
  }
}

export function deleteRows() {
  const rowsId = [];

  const tbodyList = document.querySelectorAll(".marked");
  for (const tr of tbodyList) {
    rowsId.push(tr);
  }

  console.log("tbody: ", tbodyList.values(), rowsId);
}
