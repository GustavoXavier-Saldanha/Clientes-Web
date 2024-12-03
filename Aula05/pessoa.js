const NOME_MIN = 2;
const NOME_MAX = 100;
const CPF_MIN = 11;

class Pessoa {
  #nome;
  #cpf;

  constructor(nome, cpf) {
    const formatedCpf = this.extrairNumeros(cpf);
    if (!this.validNome(nome)) {
      return;
    } else {
      this.#nome = nome;
    }
    if (!this.validCpf(formatedCpf)) {
      return;
    } else {
      this.#cpf = formatedCpf;
    }
  }

  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  set nome(nome) {
    if (!this.validNome(nome)) return;
    this.#nome = nome;
  }

  set cpf(cpf) {
    const formatedCpf = this.extrairNumeros(cpf);
    if (!this.validCpf(formatedCpf)) return;
    this.#cpf = formatedCpf;
  }

  validNome(nome) {
    return !(nome.length < NOME_MIN || nome.length > NOME_MAX);
  }
  validCpf(cpf) {
    return cpf.length === CPF_MIN;
  }
  extrairNumeros(nmr) {
    return nmr.replace(/\D/g, "");
  }
}

const pessoa1 = new Pessoa("trrr", "123.24lihçougçougçougbçoub35.42-----32");
console.log(pessoa1.cpf, pessoa1.nome);
