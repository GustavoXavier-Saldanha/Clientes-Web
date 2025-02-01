import { GestorJogo } from "./gestor-jogo.js";

export class ControladoraListagemJogo {

    visao = null;
    gestor = null;

    constructor( visao ) {
        this.visao = visao;
        this.gestor = new GestorJogo();
    }

    async listar() {
        try {
            const jogos = await this.gestor.jogos();
            this.visao.desenharJogos( jogos );
        } catch ( erro ) {
            this.visao.mostrarMensagem( erro.message );
        }
    }

    async removerJogoComId( id ) {
        try {
            await this.gestor.removerPeloId( id );
            this.visao.removerJogoComId( id );
        } catch ( erro ) {
            this.visao.mostrarMensagem( erro.message );
        }
    }

    async alterarJogoComId( id ) {
        try {
            const jogo = await this.gestor.carregarPeloId( id );
            this.visao.exibirJogo( jogo );
        } catch ( erro ) {
            this.visao.mostrarMensagem( erro.message );
        }
    }

    async salvarJogo() {
        try {
            const jogo = await this.visao.dadosJogo();
            await this.gestor.alterar( jogo );
            this.visao.mostrarMensagemSalvo();
        } catch ( erro ) {
            this.visao.mostrarMensagem( erro.message );
        }
    }

}