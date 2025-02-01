import { API } from "./api.js";

async function iniciar() {

    console.log( 'iniciar' );

    const id = obterId();
    if ( ! id ) {
        mostrarIdIncorreto();
        return;
    }

    try {
        const filme = await carregarFilme( id );
        desenharFilme( filme );

        document.getElementById( 'salvar' ).onclick = alterar;

    } catch ( erro ) {
        mostrarErro( erro.message );
    }
}

// Visão

function obterId() {
    const params = new URLSearchParams( location.search );
    return params.get( 'id' );
}

function mostrarIdIncorreto() {
    alert( 'Parâmetro "id" esperado.' );
    location.href = '/filmes';
}


function mostrarFilmeAlterado() {
    location.href = '/filmes';
}

function mostrarErro( mensagem ) {
    alert( mensagem );
}

function desenharFilme( { id, nome, ano, nota, imagem } ) {
    document.getElementById( 'id' ).value = id;
    document.getElementById( 'nome' ).value = nome;
    document.getElementById( 'ano' ).value = ano;
    document.getElementById( 'nota' ).value = nota;
    if ( imagem ) {
        document.querySelector( 'img' ).src = imagem;
    }
}

function obterFilme() {
    const src = document.querySelector( 'img' ).src;
    return {
        id: document.getElementById( 'id' ).value,
        nome: document.getElementById( 'nome' ).value,
        ano: document.getElementById( 'ano' ).value,
        nota: document.getElementById( 'nota' ).value,
        imagem: src == location.href ? null : src,
    };
}

// Model

async function carregarFilme( id ) {
    const response = await fetch( API + '/filmes/' + id );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao carregar o filme. Status: ' + response.status );
    }
    return await response.json();
}

async function alterarFilme( filme ) {
    const response = await fetch( API + '/filmes/' + filme.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( filme )
    } );
    if ( ! response.ok ) {
        throw new Error( 'Erro ao carregar o filme. Status: ' + response.status );
    }
}

// Controladora

async function alterar( event ) { // TODO: Refatorar tirando o event
    event.preventDefault();

    const filme = obterFilme();
    try {
        await alterarFilme( filme );
        mostrarFilmeAlterado();
    } catch ( erro ) {
        mostrarErro( erro.message );
    }
}

// ---
await iniciar();