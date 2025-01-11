import { cadastrar, salvar } from './cadastro.js';
import { presentes, desenharPresentes, sortear, remover, consultarImagens, atualizarImagens, consultarImagens2 } from './listagem.js';

try {
    const todosPresentes = await presentes();
    desenharPresentes( todosPresentes );
    const imagens = await consultarImagens2( todosPresentes );
    atualizarImagens( imagens );
} catch ( erro ) {
    alert( erro.message );
}

document.querySelector( 'button' ).addEventListener( 'click',
    async function() {
        try {
            const presente = sortear();
            alert( 'Presente sorteado: ' + presente.descricao );
            remover( presente.id );
            // Remove da tabela
            const linha = document.querySelector( `tbody tr[data-id="${presente.id}"]` );
            if ( ! linha ) {
                return alert( 'Linha não encontrada.' );
            }
            linha.remove();
        } catch ( erro ) {
            alert( erro.message );
        }
    }
)


document.getElementById( 'cadastrar' ).addEventListener( 'click', cadastrar );
document.getElementById( 'salvar' ).addEventListener( 'click', salvar );