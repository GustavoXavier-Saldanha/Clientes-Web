const coresIniciais = [
    'blue',
    'green',
    'red',
    'white',
    'gray',
    'pink',
    'cyan',
    'brown',
    'purple',
    'orange'
];

document.addEventListener( 'DOMContentLoaded', carregar );

function carregar() {
    const botoes = document.querySelectorAll( '#resposta button' );
    let i = 0;
    for ( const botao of botoes ) {
        botao.style.backgroundColor = coresIniciais[ i++ ];
    }
}