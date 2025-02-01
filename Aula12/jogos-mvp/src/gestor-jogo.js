import { Jogo } from './jogo.js';

const API_JOGOS = 'http://localhost:3000/jogos';

export class GestorJogo {

    async cadastrar( { nome, anoLancamento, desenvolvedora, nota } ) {

        const jogo = new Jogo( nome, anoLancamento, desenvolvedora, nota );
        const problemas = jogo.validar();
        if ( problemas.length > 0 ) {
            throw new Error( problemas.join( "\n" ) );
        }

        const opcoes = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( jogo ),
            signal: AbortSignal.timeout( 3000 )
        };
        const result = await fetch( API_JOGOS, opcoes );
        if ( ! result.ok ) {
            throw new Error( 'Erro ao cadastrar o jogo' );
        }
    }



    async alterar( { id, nome, anoLancamento, desenvolvedora, nota } ) {

        const jogo = new Jogo( nome, anoLancamento, desenvolvedora, nota );
        const problemas = jogo.validar();
        if ( problemas.length > 0 ) {
            throw new Error( problemas.join( "\n" ) );
        }

        const opcoes = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( jogo ),
            signal: AbortSignal.timeout( 3000 )
        };
        const result = await fetch( `${API_JOGOS}/${id}`, opcoes );
        if ( ! result.ok ) {
            throw new Error( 'Erro ao alterar o jogo' );
        }
    }

    async jogos() {
        const opcoes = {
            signal: AbortSignal.timeout( 3000 )
        };
        const result = await fetch( API_JOGOS, opcoes );
        if ( ! result.ok ) {
            throw new Error( 'Erro ao consultar os jogos' );
        }
        return await result.json();
    }

    async removerPeloId( id ) {
        const url = `${API_JOGOS}/${id}`;
        const result = await fetch( url, { method: 'DELETE', signal: AbortSignal.timeout( 3000 ) } );
        if ( ! result.ok ) {
            throw new Error( 'Erro ao remover o jogo' );
        }
    }

    async carregarPeloId( id ) {
        const url = `${API_JOGOS}/${id}`;
        const result = await fetch( url, { signal: AbortSignal.timeout( 3000 ) } );
        if ( ! result.ok ) {
            throw new Error( 'Erro ao obter o jogo' );
        }
        return await result.json();
    }
}