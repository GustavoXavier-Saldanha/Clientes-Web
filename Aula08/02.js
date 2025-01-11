function frutas() {
    const numero = Math.random(); // 0..1
    if ( numero <= 0.5 ) {
        return Promise.resolve(
            [ 'banana', 'laranja', 'maçã' ]
        );
    }
    return Promise.reject( new Error( 'Sem frutas hoje.' ) );
}

frutas()
    .then( f => {
        console.log( 'Temos frutas: ', f.join( ', ' ) );
    } )
    .catch( erro => console.error( erro.message ) );