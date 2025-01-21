export class GestorJogo {

    async cadastrar( jogo ) {
        const opcoes = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( jogo ),
            signal: AbortSignal.timeout( 3000 )
        };
        const result = await fetch( 'http://localhost:3000/jogos', opcoes );
        if ( ! result.ok ) {
            throw new Error( 'Erro ao cadastrar o jogo' );
        }
    }

    async jogos() {
        const opcoes = {
            signal: AbortSignal.timeout( 3000 )
        };
        const result = await fetch( 'http://localhost:3000/jogos', opcoes );
        if ( ! result.ok ) {
            throw new Error( 'Erro ao consultar os jogos' );
        }
        return await result.json();
    }
}