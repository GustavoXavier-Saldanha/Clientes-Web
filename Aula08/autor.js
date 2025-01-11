class Autor {

    #nome = '';
    #sobrenome = '';

    static novo() {
        return new Autor();
    }

    comNome( valor ) {
        this.#nome = valor;
        return this;
    }

    comSobrenome( valor ) {
        this.#sobrenome = valor;
        return this;
    }

    comoCitacao() {
        return this.#sobrenome.toUpperCase() + ', ' + this.#nome;
    }

    toString() {
        return this.comoCitacao();
    }
}

console.log(
    Autor.novo()
        .comNome( 'Robert C.' )
        .comSobrenome( 'Martin' )
        .comoCitacao()
);