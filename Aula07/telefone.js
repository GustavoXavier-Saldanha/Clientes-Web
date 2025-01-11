class Telefone {

    #ddd = '22';
    #numero = '';

    constructor( ddd, numero ) {
        this.#ddd = ddd;
        this.#numero = numero;
    }

    get ddd() {
        return this.#ddd;
    }

    set ddd( valor ) {
        this.#ddd = valor;
    }

    get numero() {
        return this.#numero;
    }

    set numero( valor ) {
        this.#numero = valor;
    }

    get numeroCompleto() {
        return `(${this.ddd}) ${this.numero}`;
    }

    set numeroCompleto( valor ) {
        this.ddd = valor.substring( 1, 3 );
        this.numero = valor.substring( 5 );
    }
}

const tel1 = new Telefone( '22', '99998888' );
console.log( tel1.ddd, tel1.numero );

tel1.ddd = '21';
tel1.numero = '88887777';
console.log( tel1.ddd, tel1.numero );

console.log( tel1.numeroCompleto );

tel1.numeroCompleto = '(22) 6666-5555';
console.log( tel1.numeroCompleto );

