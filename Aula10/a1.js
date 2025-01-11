function p1() {
    // return Promise.resolve( 10 );
    return Promise.reject( new Error( 'ops' ) );
}

p1()
    .then( valor => {
        console.log( valor );
    } )
    .catch( erro => {
        console.log( 'Não deu bom: ' + erro.message );
    } );

console.log( 'Olá' );