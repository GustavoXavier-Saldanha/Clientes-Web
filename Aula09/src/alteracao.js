export function consultar( id ) {
    return fetch( 'http://localhost:3000/tarefas/' + id )
        .then( response => {
            if ( response.status >= 400 ) {
                throw new Error( 'Erro ao consultar a tarefa com o id ' + id );
            }
            return response.json();
        } );
}

export function alterar( tarefa ) {

    if ( tarefa.descricao.length < 2 || tarefa.descricao.length > 100 ) {
        return Promise.reject(
            new Error( 'A descrição deve ter entre 2 e 100 caracteres.' )
        );
    }

    return fetch( 'http://localhost:3000/tarefas/' + tarefa.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( tarefa )
    })
    .then( response => {
        if ( response.status >= 400 ) {
            throw new Error( 'Erro ao alterar a tarefa com o id ' + tarefa.id );
        }
    } );
}