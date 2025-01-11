class Telefone {
    #ddd = '';
    #numero = '';

    constructor( ddd = '', numero = '' ) {
        this.#ddd = ddd;
        this.#numero = numero;
    }

    static novo( ddd = '', numero = '' ) {
        return new Telefone( ddd, numero );
    }

    get ddd() { return this.#ddd; }
    get numero() { return this.#numero; }

    comDDD( valor ) {
        this.#ddd = valor;
        return this; // <<<<<
    }

    comNumero( valor ) {
        this.#numero = valor;
        return this; // <<<<<
    }

    formatar() {
        return `(${this.#ddd}) ${this.#numero}`;
    }

    toString() {
        return this.formatar();
    }
}

const t = Telefone.novo()
    .comDDD( '22' )
    .comNumero( '9999-8888' );

console.log( t.toString() );
console.log( `${t}` );
console.log( t + '' );
console.log( String( t ) );