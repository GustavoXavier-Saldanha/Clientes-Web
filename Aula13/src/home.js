import { API } from "./api.js";

async function obterFilmes() {
    const response = await fetch( API + '/filmes' );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao carregar os filmes. Status: ' + response.status );
    }
    return await response.json();
}

function desenharFilmes( filmes ) {
    document.querySelector( 'tbody' ).innerHTML =
        filmes.map( f =>
            `<tr>
                <td>${f.id}</td>
                <td>${f.nome}</td>
                <td>${f.ano}</td>
                <td>${'⭐'.repeat( f.nota )}</td>
                <td><img src="${f.imagem}" height="40" width="30" alt="${f.nome}" /></td>
                <td><a href="/filmes/alterar?id=${f.id}" >Alterar</a>
            </tr>
            `
        ).join( '' );
}


desenharFilmes( await obterFilmes() );