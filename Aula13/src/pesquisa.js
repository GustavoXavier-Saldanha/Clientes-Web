export async function pesquisarFilme( nome ) {
    const response = await fetch( `http://www.omdbapi.com/?t=${nome}&apikey=e4c25d9d`);
    if ( ! response.ok ) {
        throw new Error( 'Erro ao consultar o filme. Status: ' + response.status );
    }
    return await response.json();
}

export function desenharFilme( { Poster, Year } ) {

    const img = document.querySelector( 'img' );
    img.src = Poster;

    document.getElementById( 'ano' ).value = Year;

    return img.src;
}

export default async function pesquisar() {
    try {
        const filme = await pesquisarFilme( document.getElementById( 'pesquisa' ).value );
        desenharFilme( filme );
    } catch ( erro ) {
        alert( erro.message );
    }
}