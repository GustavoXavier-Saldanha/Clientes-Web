import { API } from "./api.js";

export function cadastrar() {
    document.querySelector( 'dialog' ).showModal();
}

export async function salvar( event ) {
    event.preventDefault();
    const presente = {
        descricao: document.getElementById( 'descricao' ).value,
        preco: Number( document.getElementById( 'preco' ).value ),
    };

    const headers = new Headers();
    headers.append( 'Content-Type', 'application/json' );

    const opcoes = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify( presente )
    };

    const response = await fetch( API + '/presentes', opcoes );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao salvar o presente.' );
    }

    // TODO: refatorar
    document.querySelector( 'dialog' ).close();
}