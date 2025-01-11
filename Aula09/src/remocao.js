export function remover( id ) {
    return fetch( 'http://localhost:3000/tarefas/' + id, {
        method: 'DELETE'
    } )
        .then( response => {
            if ( ! response.ok ) {
                throw new Error( 'Erro ao remover a tarefa ' + id );
            }
            alert( 'Removido.' );
        } );
}