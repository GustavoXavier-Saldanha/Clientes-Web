document.querySelector( '#um' ).onclick = async () => {
    const { um } = await import( './um.js' );
    um();
};

document.querySelector( '#dois' ).onclick = async () => {
    const contexto = await import( './dois.js' );
    contexto.default(); // dois()
};

document.querySelector( 'div' ).innerText = 'Olá';