import { ControladoraJogo } from "./controladora-jogo.js";

export class VisaoJogo {

    controladora = null;

    constructor() {
        this.controladora = new ControladoraJogo( this );
    }

    iniciar() {
        document.querySelector( 'button' ).addEventListener( 'click',
            async event => {
                event.preventDefault();
                await this.controladora.cadastrar();
            }
        );
    }

    dadosJogo() {
        const nome = document.getElementById( 'nome' ).value;
        const anoLancamento = Number( document.getElementById( 'ano' ).value );
        const desenvolvedora = document.getElementById( 'desenvolvedora' ).value;
        const nota = Number( document.getElementById( 'nota' ).value );
        return { nome, anoLancamento, desenvolvedora, nota };
    }

    exibirMensagem( mensagem ) {
        document.querySelector( 'output' ).value = mensagem;
    }
}


const visao = new VisaoJogo();
visao.iniciar();