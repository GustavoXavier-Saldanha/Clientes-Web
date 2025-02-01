import { GestorJogo } from "./gestor-jogo.js";

export class ControladoraJogo {

    visao = null;

    constructor( visao ) {
        this.visao = visao;
    }

    async cadastrar() {
        const gestor = new GestorJogo();
        try {
            await gestor.cadastrar( this.visao.dadosJogo() );
            this.visao.exibirMensagem( 'Cadastrado.' );
        } catch ( err ) {
            this.visao.exibirMensagem( err.message );
        }
    }
}