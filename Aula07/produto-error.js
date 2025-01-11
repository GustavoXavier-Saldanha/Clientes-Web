export class ProdutoError extends Error {
    name = 'ProdutoError';

    constructor( message ) {
        super( message );
    }
}