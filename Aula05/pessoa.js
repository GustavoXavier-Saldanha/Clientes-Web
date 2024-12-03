import { PessoaError } from "./pessoaError.js";

const NOME_MIN = 2;
const NOME_MAX = 100;
const CPF_MIN = 11;

class Pessoa {
  #nome;
  #cpf;

  /**
   *
   * @param {*} nome
   * @param {*} cpf
   */
  constructor(nome, cpf) {
    this.nome = nome;
    this.cpf = cpf;
  }

  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  set nome(nome) {
    if (!this.validNome(nome)) {
      throw new PessoaError(
        `O Nome deve ter entre ${NOME_MIN} e ${NOME_MAX} caracteres!`
      );
    }
    this.#nome = nome;
  }

  set cpf(cpf) {
    const formatedCpf = this.extrairNumeros(cpf);
    if (!this.validCpf(formatedCpf)) {
      throw new PessoaError(`O CPF deve ter ${CPF_MIN} caracteres!`);
    }
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

const pessoa1 = new Pessoa("trrr", "123.74lihçougçougçougbçoub35.42-----32");
console.log(pessoa1.cpf, pessoa1.nome);
