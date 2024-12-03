class Telefone {
  #ddd = "22";
  #numero = "999229292292";

  constructor(ddd, numero) {
    this.#ddd = ddd;
    this.#numero = numero;
  }

  get ddd() {
    return this.#ddd;
  };

  get numero() {
    return this.#numero;
  }

  get numeroCompleto() {
    return `(${this.#ddd}) ${this.#numero}`;
  }

  set ddd(ddd) {
    this.#ddd = ddd;
  }

  set numero(numero) {
    this.#numero = numero;
  }

  set numeroCompleto(nmr) {
    this.#ddd = nmr.substring(1, 3);
    this.#numero = nmr.substring(5, nmr.length);
  }
}

const tel1 = new Telefone("22", "998836475");
console.log(tel1.numeroCompleto);
tel1.numeroCompleto = "(44) 4343434344"
console.log(tel1.numeroCompleto);
console.log(tel1.ddd, tel1.numero);
const tel2 = new Telefone();
