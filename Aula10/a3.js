async function carregarCodigo() {
    const response = await fetch( 'a1.js' );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao carregar o arquivo.' );
    }
    return await response.text();
}

const codigo = await carregarCodigo();
document.querySelector( 'output' ).innerText = codigo;