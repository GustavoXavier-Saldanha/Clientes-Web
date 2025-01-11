document.querySelector( 'button' ).addEventListener( 'click', cadastrar );

function cadastrar( event ) {
    event.preventDefault(); // Evita enviar os dados

    const descricao = document.querySelector( '#descricao' ).value;
    if ( descricao.length < 2 || descricao.length > 100 ) {
        alert( 'A descrição deve ter de 2 a 100 caracteres.' );
        return;
    }
    const feita = document.querySelector( '#feita' ).checked;

    const tarefa = { descricao: descricao, feita: feita };

    fetch( 'http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            // "Content-Length": JSON.stringify( tarefa ).length
        },
        body: JSON.stringify( tarefa )
    } )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao cadastrar a tarefa: ' +
                    response.status
                );
            }
            alert( 'Salvo' );
        } )
        .catch( erro => alert( erro.message ) );
}