function delay( milissegundos ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve(); // Cumpre após o tempo
        }, milissegundos );
    } );
}

delay( 5000 )
    .then( () => console.log( 'Passaram-se 5 segundos.' ) );

console.log( 'Iniciando...' );