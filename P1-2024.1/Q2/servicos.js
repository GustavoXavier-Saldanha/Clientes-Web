document.addEventListener("DOMContentLoaded", iniciar);

const iniciar = () => {
  document.querySelector("button").addEventListener(submit);

  const data = JSON.parse(localStorage.getItem("servicos"));
  carregarServicos(data);
  footerController(data);
};

const submit = (e) => {
  e.preventDefault();
  const duracaoMax = document.getElementById("duracaoMaxima").value;

  if (isNaN(duracaoMax) || duracaoMax < 0) {
    alert("O valor deve ser numérico e maior que 0");
    return;
  }

  const data = JSON.parse(localStorage.getItem("servicos"));

  const filteredData = data.filter((e) => e.duracao <= duracaoMax);

  carregarServicos(filteredData);
  footerController(filteredData);
};

const carregarServicos = (data) => {
  const body = document.body.querySelector("tbody");
  body.innerHTML = "";

  data.map((e) => criarLinha(e)).forEach((e) => body.appendChild(e));
};

const criarLinha = (obj) => {
  const tr = document.createElement("tr");

  tr.append(
    criarCelula(obj.desc),
    criarCelula(obj.valor),
    criarCelula(obj.duracaoMax)
  );

  return tr;
};

const criarCelula = (text) => {
  const td = document.createElement("td");
  td.innerText = text;
  return td;
};

const footerController = (data) => {
  const text = document.createElement("span");

  let maiorValor = 0;
  let duracaoTotal = 0;

  for (const d of data) {
    if (d.valor > maiorValor) {
        maiorValor = d.valor;
    }
    duracaoTotal += d.duracao;
  }

  let media = duracaoTotal / data.lenght;

  text.innerText = `Maior valor: ${maiorValor} - Media de duração: ${media}`;
};
