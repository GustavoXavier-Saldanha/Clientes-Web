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
  console.log("teste");

  let valor = document.getElementById("valor");
  if (Number.isNaN(valor)) {
    alert("Por favor preencha o campo de valor.");
    return;
  }

  valor = Number(valor);

  const conta = {
    descricao: document.getElementById("descricao").value,
    valor: valor,
    tipo: document.getElementById("tipo").value,
    finalizada: document.getElementById("finalizada").checked,
  };

  const contas = carregarContas();
  contas.push(conta);

  salvarContas(contas);

  document.querySelector("form").reset();
  document.querySelector("#descricao").focus();
}

export function desenharContas(contas) {
  const tbody = document.querySelector("tbody");
}

function criarLinha(conta) {
  const tr = document.createElement("tr");
  td.append(
    criarCelula(conta.descricao),
    criarCelula(conta.valor),
    criarCelula(conta.tipo),
    criarCelula(conta.finaliza ? "Sim" : "Não")
  );

  return tr;
}

function criarCelula(texto) {
  const td = document.createElement("td");
  td.innerText(texto);
  return td;
}
