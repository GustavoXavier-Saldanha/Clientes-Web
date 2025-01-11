export class PessoaError extends Error {
    name = 'PessoaError';
    constructor( message ) {
        super( message );
    }
}
// const e = new PessoaError( 'Ops' );
// console.log( e );
// console.log( e.name );