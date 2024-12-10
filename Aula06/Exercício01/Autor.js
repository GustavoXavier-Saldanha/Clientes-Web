class Autor {
  #nome = "";
  #sobrenome = "";

  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.comoCitacao()
  }

  static novo(){
    return new Autor();
  }

  comNome(nome){
    this.#nome = nome;
    return this;
  }

  comSobreome(sobrenome){
    this.#sobrenome = sobrenome;
    return this;
  }

  comoCitacao() {
    return `${this.#sobrenome.toUpperCase()}, ${this.#nome}`;
  }
}

const autor = Autor.novo().comNome("Gustavo").comSobreome("Xavier").comoCitacao();
console.log(autor);
