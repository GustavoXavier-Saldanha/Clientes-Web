import { ControladoraListagemJogo } from "./controladora-listagem-jogo.js";

export class VisaoListagemJogo {

    controladora = null;

    constructor() {
        this.controladora = new ControladoraListagemJogo( this );
    }

    iniciar() {
        this.controladora.listar();

        document.querySelector( 'form button' ).addEventListener( 'click', event => {
            event.preventDefault();
            this.controladora.salvarJogo();
        } );
    }

    /**
     * Desenha os jogos na tela.
     *
     * @param {Array<{ id: string, nome: string, desenvolvedora: string, anoLancamento: number, nota: number }>} jogos
     */
    desenharJogos( jogos ) {
        document.querySelector( 'tbody' ).innerHTML =
            jogos.map( j => `
                <tr data-id="${j.id}" >
                    <td>${j.id}</td>
                    <td>${j.nome}</td>
                    <td>${j.desenvolvedora}</td>
                    <td>${j.anoLancamento}</td>
                    <td>${ '⭐'.repeat( j.nota ) }</td>
                    <td>
                        <button aria-label="Remover" >🗑️</button>
                        <button aria-label="Alterar" >📝</button>
                    </td>
                </tr>
            ` ).join( '' );

        document.querySelectorAll( 'tr button[aria-label="Remover"]' )
            .forEach( b => b.addEventListener( 'click', this.remover.bind( this ) ) );

        document.querySelectorAll( 'tr button[aria-label="Alterar"]' )
            .forEach( b => b.addEventListener( 'click', this.alterar.bind( this ) ) );
    }

    remover( event ) {
        const linha = event.target.parentElement.parentElement;
        const id = linha.dataset.id;
        if ( ! window.confirm( `Deseja mesmo remover o jogo "${id}" ?` ) ) {
            return;
        }
        this.controladora.removerJogoComId( id );
    }


    alterar( event ) {
        const linha = event.target.parentElement.parentElement;
        const id = linha.dataset.id;
        this.controladora.alterarJogoComId( id );
    }


    removerJogoComId( id ) {
        const linha = document.querySelector( `tr[data-id="${id}"]` );
        if ( ! linha ) {
            this.mostrarMensagem( `Jogo com id "${id}" não existe.` );
            return;
        }
        linha.remove();
    }


    dadosJogo() {
        const id = document.getElementById( 'id' ).value;
        const nome = document.getElementById( 'nome' ).value;
        const anoLancamento = Number( document.getElementById( 'anoLancamento' ).value );
        const desenvolvedora = document.getElementById( 'desenvolvedora' ).value;
        const nota = Number( document.getElementById( 'nota' ).value );
        return { id, nome, anoLancamento, desenvolvedora, nota };
    }

    exibirJogo( jogo ) {
        for ( const chave in jogo ) {
            document.getElementById( chave ).value = jogo[ chave ];
        }
        document.querySelector( 'dialog' ).showModal();
    }


    mostrarMensagemSalvo() {
        alert( 'Salvo com sucesso.' );
        document.querySelector( 'dialog' ).close();
    }



    mostrarMensagem( mensagem ) {
        document.querySelector( 'output' ).value = mensagem;
    }

}


const visao = new VisaoListagemJogo();
visao.iniciar();