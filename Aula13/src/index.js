const caminho = location.pathname;

const main = document.querySelector( 'main' );

if ( caminho == '/home' || caminho == '/filmes' ) {
    const html = await carregarHtml( '/pages/home.html' );
    if ( html ) {
        main.innerHTML = html;
    }
    await import( '/src/home.js' );

} else if ( caminho == '/filmes/novo' ) {

    const html = await carregarHtml( '/pages/cadastro.html' );
    if ( html ) {
        main.innerHTML = html;
    }
    await import( '/src/cadastro.js' );

} else if ( caminho == '/filmes/alterar' ) {

    const html = await carregarHtml( '/pages/cadastro.html' );
    if ( html ) {
        main.innerHTML = html;
    }

    await import( '/src/alteracao.js' );

} else {
    const html = await carregarHtml( '/pages/404.html' );
    if ( html ) {
        main.innerHTML = html;
    }
}

async function carregarHtml( caminho ) {
    const response = await fetch( caminho );
    if ( ! response.ok ) {
        alert( 'Erro ao carregar o HTML' );
        return null;
    }
    return await response.text();
}