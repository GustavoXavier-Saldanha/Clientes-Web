const params = new URLSearchParams( location.search )

document.querySelector( 'div' ).innerText =
    'Olá, ' + params.get( 'usuario' );