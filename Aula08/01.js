function oi() {
    // return Promise.resolve( 'Ana' );
    return Promise.reject( new Error( 'Não pude obter o nome.' ) );
}

oi()
    .then( nome => {
        console.log( 'Oi', nome );
    } )
    .catch( erro => {
        console.error( 'ERRO: ' + erro.message );
    } );
console.log( 'Teste' );