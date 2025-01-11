import { API } from './api.js';

let todosPresentes = [];

export async function presentes() {
    const response = await fetch( API + '/presentes', {
        signal: AbortSignal.timeout( 3000 )
    } );
    console.log( response.headers.get( 'Content-Type' ) );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao consultar os presentes.' );
    }
    todosPresentes = await response.json();
    return todosPresentes;
}

export function desenharPresentes( presentes ) {
    document.querySelector( 'tbody' ).innerHTML =
        presentes.map( p => `<tr data-id="${p.id}" >
                <td>${p.id}</td>
                <td>${p.descricao}</td>
                <td>${p.preco}</td>
                <td><img alt="" /></td>
            </tr>`
        ).join( '' );
}

function gerarInteiro( min, max ) {
    return min + Math.floor( Math.random() * ( max - min + 1 ) );
}

export function sortear() {
    const tamanho = todosPresentes.length;
    if ( tamanho < 1 ) {
        throw new Error( 'Sem presentes.' );
    }
    if ( tamanho == 1 ) {
        return todosPresentes[ 0 ];
    }
    const posicao = gerarInteiro( 0, tamanho - 1 );
    return todosPresentes[ posicao ];
}

export async function remover( id ) {
    const response = await fetch( API + `/presentes/${id}`, { method: 'DELETE' } );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao remover o presente com id: ' + id );
    }
    todosPresentes = todosPresentes.filter( p => p.id != id );
}

/**
 * Retorna uma promessa com as imagens.
 *
 * @param {any} presentes
 * @returns {Promise<string[]>}
 */
export async function consultarImagens( presentes ) {
    return presentes.map( p => `img/${p.id}.jpg` );
}


export async function consultarImagens2( presentes ) {
    const promessas = presentes.map( p => fetch( `img/${p.id}.jpg` ) );
    const respostas = await Promise.all( promessas );
    const blobs = respostas.map( r => r.blob() );
    const conteudos = await Promise.all( blobs );
    return conteudos.map( c => URL.createObjectURL( c ) );
}


export function atualizarImagens( imagens ) {
    document.querySelectorAll( 'tbody tr' )
        .forEach( ( tr, indice ) => {
            const imagem = imagens[ indice ];
            tr.querySelector( 'img' ).src = imagem;
        } );
}