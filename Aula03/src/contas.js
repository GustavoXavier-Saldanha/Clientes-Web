export let contas = [
    { "id": 1, "descricao": "Energia", "valor": 150.00, "tipo": "P", "finalizada": true },
    { "id": 2, "descricao": "Internet", "valor": 99.90, "tipo": "P", "finalizada": false },
    { "id": 3, "descricao": "Água", "valor": 80.00, "tipo": "P", "finalizada": false },
    { "id": 4, "descricao": "Telefone", "valor": 50.00, "tipo": "P", "finalizada": false },

    { "id": 5, "descricao": "Empréstimo Juca", "valor": 200.00, "tipo": "R", "finalizada": false },
    { "id": 6, "descricao": "Salário Freela", "valor": 3000.00, "tipo": "R", "finalizada": false },
];

export function desenharContas( contas ) {
    const tbody = document.querySelector( 'tbody' );
    let html = '';
    for ( const conta of contas ) {
        html += criarLinhaParaConta( conta );
    }
    tbody.innerHTML = html;

    const celulasFinalizadas = document.querySelectorAll( 'tbody tr td:last-child' );
    for ( const celula of celulasFinalizadas ) {
        celula.onclick = trocarFinalizada;
    }
}


function trocarFinalizada( event ) {
    console.log( event.target );
    const td = event.target;
    const tr = td.parentElement;
    const indice = tr.sectionRowIndex;
    console.log( indice );
    // Troca o valor
    contas[ indice ].finalizada = ! contas[ indice ].finalizada;
    // Redesenha
    td.innerText = contas[ indice ].finalizada ? 'Sim' : 'Não';
}


function criarLinhaParaConta( conta ) {
    return '<tr><td>' + conta.id + '</td>' +
            '<td>' + conta.descricao + '</td>' +
            '<td>' + conta.valor + '</td>' +
            '<td>' + conta.tipo + '</td>' +
            '<td>' + ( conta.finalizada ? 'Sim' : 'Não' ) + '</td></tr>';
}

function adicionarConta( conta ) {
    contas.push( conta );
    const tbody = document.querySelector( 'tbody' );
    tbody.innerHTML += criarLinhaParaConta( conta );
}

export function adicionar( event ) {
    event.preventDefault();

    let valor = Number( document.getElementById( 'valor' ).value );
    if ( isNaN( valor ) ) { // is Not a Number
        alert( 'Por favor, informe um valor numérico.' );
        return;
    }

    const conta = {
        id: gerarId( contas ),
        descricao: document.getElementById( 'descricao' ).value,
        valor: valor,
        tipo: document.getElementById( 'tipo' ).value,
        finalizada: document.getElementById( 'finalizada' ).checked
    };

    adicionarConta( conta );

    // Limpa o formulário e coloca o foco no primeiro campo
    document.querySelector( 'form' ).reset();
    document.getElementById( 'descricao' ).focus();
}

function gerarId( contas ) { // Considera o maior id + 1
    let maior = 0;
    for ( const conta of contas ) {
        if ( maior < conta.id ) {
            maior = conta.id;
        }
    }
    return maior + 1;
}

