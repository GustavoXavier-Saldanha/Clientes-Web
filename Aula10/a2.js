function frutas() {
    if ( Math.random() < 0.5 ) {
        return Promise.resolve( [ 'maçã', 'banana', 'laranja' ] );
    }
    return Promise.reject( new Error( 'Sem frutas hoje.' ) );
}

function frutas2() {
    return new Promise( ( resolve, reject ) => {
        if ( Math.random() < 0.5 ) {
            return resolve( [ 'maçã', 'banana', 'laranja' ] );
        }
        return reject( new Error( 'Sem frutas hoje.' ) );
    } );
}


async function frutas3() {
    if ( Math.random() < 0.5 ) {
        return [ 'maçã', 'banana', 'laranja' ];
    }
    throw new Error( 'Sem frutas hoje.' );
}

// frutas3()
//     .then( frutas => console.log( frutas ) )
//     .catch( erro => console.log( erro.message ) );

async function iniciar() {
    try {
        const minhasFrutas = await frutas2();
        console.log( minhasFrutas );
    } catch ( erro ) {
        console.log( erro.message );
    }
}

iniciar();