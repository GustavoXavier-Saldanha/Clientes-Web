const numeros = () => {
    return [
        Number( document.getElementById( 'n1' ).value ),
        Number( document.getElementById( 'n2' ).value )
    ]
}

const mostrarResultado = ( resultado ) => {
    document.getElementById( 'resultado' ).value = resultado;
}

document.getElementById( 'multiplicar' )
    .onclick = async ( event ) => {
        event.preventDefault();
        const { multiplicar } = await import( './multiplicacao.js' );
        const resultado = multiplicar( ...numeros() );
        mostrarResultado( resultado );
    };

document.getElementById( 'dividir' )
    .onclick = async ( event ) => {
        event.preventDefault();
        const contexto = await import( './divisao.js' );
        const resultado = contexto.default( ...numeros() );
        mostrarResultado( resultado );
    };