function delay( milissegundos ) {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( milissegundos ); // Cumpre após o tempo
        }, milissegundos );
    } );
}

const maisRapida = Promise.race(
    [ delay( 200 ), delay( 100 ) ]
);
maisRapida.then( valor => console.log( 'Ganhou: ' + valor ) );


console.log( 'Iniciando...' );