import { Produto } from "./produto.js";

class ProdutoTarifado extends Produto {

    ipi = 0;

    constructor( descricao = '', estoque = 0, preco = 0, ipi = 10 ) {
        super( descricao, estoque, preco );
        this.ipi = ipi;
    }
}

const p = new ProdutoTarifado( 'Fanta Uva', 50, 7.50, 15 );
console.table( p );