console.log( location );

const caminho = location.pathname;

const main = document.querySelector( 'main' );

if ( caminho == '/home' ) {
    main.innerHTML = await carregarHtml( '/pages/home.html' );
    await import( '/src/home.js' );

} else if ( caminho == '/sobre' ) {
    main.innerHTML = await carregarHtml( '/pages/sobre.html' );
} else if ( caminho == '/' || caminho == '' ) {
    main.innerHTML = '';
} else {
    main.innerHTML = '404 - Página não encontrada 🤷‍♂️';
}


async function carregarHtml( caminho ) {
    const response = await fetch( caminho );
    if ( ! response.ok ) {
        return null;
    }
    return await response.text();
}