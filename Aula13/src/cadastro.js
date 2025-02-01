import { API } from "./api.js";

document.getElementById( 'pesquisar' ).onclick = async event => {
    event.preventDefault();
    const conteudo = await import( './pesquisa.js' );
    await conteudo.default(); // pesquisa()
};

document.getElementById( 'salvar' ).onclick = async event => {
    event.preventDefault();

    const filme = {
        nome: document.getElementById( 'nome').value,
        ano: Number( document.getElementById( 'ano').value ),
        nota: Number( document.getElementById( 'nota').value ),
        imagem: document.querySelector( 'img' ).src || null
    };

    try {
        await cadastrarFilme( filme );
        location.href = '/filmes';
    } catch ( err ) {
        alert( err.message );
    }
};

async function cadastrarFilme( filme ) {
    const response = await fetch( API + '/filmes',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( filme )
        }
     );
     if ( ! response.ok ) {
        throw new Error( 'Erro ao cadastrar o filme. Status: ' + response.status );
     }
}