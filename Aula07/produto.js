import { ProdutoError } from "./produto-error.js";

export class Produto { // PascalCase

    #descricao = ''; // # significa "privado" e acompanha o nome
    #estoque = 0;
    #preco = 0;

    constructor( descricao = '', estoque = 0, preco = 0 ) {
        this.#descricao = descricao;
        this.#estoque = estoque;
        this.#preco = preco;
    }

    getDescricao() {
        return this.#descricao;
    }

    setDescricao( valor ) {
        this.#descricao = valor;
    }


    getEstoque = function() {
        return this.#estoque;
    };

    setEstoque = function( valor ) {
        if ( isNaN( valor ) || valor < 0 || valor > 10_000 ) {
            throw new ProdutoError( 'O valor deve estar entre 0 e 10.000' );
        }
        this.#estoque = valor;
    };

    getPreco() { return this.#preco; }

    setPreco( valor ) {
        if ( isNaN( valor ) || valor < 0.01 || valor > 1_000.00 ) {
            throw new ProdutoError( 'O valor deve estar entre 0.01 e 1.000' );
        }
        this.#preco = valor;
    }
}
const p1 = new Produto();
p1.setDescricao( 'Coca-cola 2L' );
p1.setEstoque( 200 );
console.log( p1.getDescricao(), p1.getEstoque() );


const p2 = new Produto( 'Pepsi 2L', 100, 7.00 );
console.log( p2.getDescricao(), p2.getEstoque() );

console.table( p1 );
console.table( p2 );