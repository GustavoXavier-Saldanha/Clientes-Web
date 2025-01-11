import { consultar, alterar } from "./alteracao.js";
import { remover } from "./remocao.js";

function carregar() {
    return fetch( 'http://localhost:3000/tarefas' )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao consultar as tarefas: ' +
                    response.status );
            }
            return response.json();
        } );
}

carregar()
    .then( tarefas => desenharTarefas( tarefas ) )
    .catch( erro => mostrarErro( erro ) );

function desenharTarefas( tarefas ) {
    document.querySelector( 'tbody' ).innerHTML =
        tarefas.map( t => criarLinha( t ) ).join( '' );
}

function mostrarErro( erro ) {
    alert( erro.message );
}

let idSelecionado = '';

window.marcarLinha = function( event ) {
    const linha = event.target.parentElement;
    const id = linha.firstElementChild.innerText;
    idSelecionado = id;
    const selecionado = linha.classList.contains( 'selecionado' );
    document.querySelectorAll( 'tr.selecionado' )
        .forEach( tr => tr.classList.remove( 'selecionado' ) );
    linha.classList.toggle( 'selecionado', ! selecionado );
    // Limpa o id selecionado, se necessário
    if ( selecionado ) { // Valor de antes de clicar
        idSelecionado = '';
    }
};

document.querySelector( '#remover' ).addEventListener( 'click', event => {
    if ( ! idSelecionado ) {
        alert( 'Por favor, selecione uma tarefa.' );
        return;
    }
    remover( idSelecionado )
        .then( () => {
            document.querySelector( `tr[data-id="${idSelecionado}"]` ).remove();
        })
        .catch( erro => alert( erro.message ) );
} );


document.querySelector( '#alterar' ).addEventListener( 'click', event => {
    if ( ! idSelecionado ) {
        alert( 'Por favor, selecione uma tarefa.' );
        return;
    }

    consultar( idSelecionado )
        .then( tarefa => desenharTarefa( tarefa ) )
        .then( () => document.querySelector( 'dialog' ).showModal() )
        .catch( erro => alert( erro.message ) );
} );

/**
 *
 * @param {{id: string, descricao: string, feita: boolean}} tarefa
 */
function desenharTarefa( tarefa ) {
    // for ( const prop in tarefa ) {
    //     console.log( prop );
    //     document.querySelector( '#' + prop ).value = tarefa[ prop ];
    // }
    document.querySelector( '#id' ).value = tarefa.id;
    document.querySelector( '#descricao' ).value = tarefa.descricao;
    document.querySelector( '#feita' ).checked = tarefa.feita;
}

document.querySelector( '#salvar' ).addEventListener( 'click', event => {
    event.preventDefault();
    const tarefa = {
        id: document.querySelector( '#id' ).value,
        descricao: document.querySelector( '#descricao' ).value,
        feita: document.querySelector( '#feita' ).checked
    };
    alterar( tarefa )
        .then( () => document.querySelector( 'dialog' ).close() )
        .then( () => {
            const tr = document.querySelector( `tr[data-id="${idSelecionado}"]` );
            const t = tarefa;
            tr.innerHTML = `
                <td>${t.id}</td>
                <td>${t.descricao}</td>
                <td>${t.feita ? 'Sim' : 'Não'}</td>
            `;
        })
        .catch( erro => alert( erro.message ) );
} );

function criarLinha( t ) {
    return `<tr onclick="marcarLinha( event )" data-id="${t.id}" >
                <td>${t.id}</td>
                <td>${t.descricao}</td>
                <td>${t.feita ? 'Sim' : 'Não'}</td>
            </tr>`;
}


document.querySelector( '#pesquisar' ).addEventListener( 'click', event => {
    const texto = document.querySelector( '#pesquisa' ).value;
    carregar()
        .then( tarefas => tarefas.filter( t => t.descricao.includes( texto ) ) )
        .then( filtradas => desenharTarefas( filtradas ) )
        .catch( erro => mostrarErro( erro ) );
} );