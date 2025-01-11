document.querySelector( '#pesquisar' )
    .addEventListener( 'click', pesquisar );

function pesquisar() {
    const nome = document.querySelector( '#nome' ).value;
    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`;
    fetch( url )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao consultar: ' +
                        response.status );
            }
            return response.json();
        } )
        .then( obj => mostrarPokemon( obj ) )
        .catch( erro => alert( erro.message ) );
}

function mostrarPokemon( obj ) {
    // const urlImagem = obj.sprites.front_default;
    const urlImagem = obj.sprites.other.home.front_default;
    document.querySelector( 'img' ).src = urlImagem;

    document.querySelector( 'div' ).innerText =
        `Altura: ${obj.height * 10}cm, Peso: ${obj.weight * 0.1} kg`;
}

// EXERCÍCIO:
// Pegar o peso (weight) e a altura (height) do pokemon e
// mostrar abaixo da imagem. Ver em https://pokeapi.co/