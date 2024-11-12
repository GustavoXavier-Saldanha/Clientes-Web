export function carregarContas() {
    const contas = localStorage.getItem( 'contas' );
    if ( ! contas ) {
        return [];
    }
    return JSON.parse( contas ); // string para JSON (array)
}

export function salvarContas( contas ) {
    const textoContas = JSON.stringify( contas );
    localStorage.setItem( 'contas', textoContas );
}

export function adicionar( event ) {
    event.preventDefault();
    event.stopPropagation();

    let valor = document.getElementById( 'valor' ).value;
    if ( Number.isNaN( valor ) ) {
        alert( 'Por favor, informe um número como valor.' );
        return;
    }

    valor = Number( valor );

    const contas = carregarContas();
    const id = gerarId( contas );

    const conta = {
        id: id,
        descricao: document.getElementById( 'descricao' ).value,
        tipo: document.getElementById( 'tipo' ).value,
        valor: valor,
        finalizada: document.getElementById( 'finalizada' ).checked,
    };

    contas.push( conta );
    salvarContas( contas );

    // Adiciona a linha na tabela
    const tbody = document.body.querySelector( 'tbody' );
    tbody.appendChild( criarLinha( conta ) );

    // Limpa o formulário e coloca o foco na descrição
    document.querySelector( 'form' ).reset();
    document.querySelector( '#descricao' ).focus();
}


function gerarId( contas ) {
    let maior = 0;
    for ( const conta of contas ) {
        if ( conta.id > maior ) {
            maior = conta.id;
        }
    }
    return maior + 1;
}


export function desenharContas( contas ) {
    const tbody = document.body.querySelector( 'tbody' );
    for ( const c of contas ) {
        tbody.appendChild( criarLinha( c ) );
    }
}

function criarLinha( conta ) {
    const tr = document.createElement( 'tr' ); // table row
    tr.append(
        criarCelula( conta.id ),
        criarCelula( conta.descricao ),
        criarCelula( conta.valor ),
        criarCelula( conta.tipo ),
        criarCelula( conta.finalizada ? 'Sim' : 'Não' ),
    );

    tr.onclick = linhaClicada;
    tr.dataset.id = conta.id;

    return tr;
}

function criarCelula( texto ) {
    const td = document.createElement( 'td' ); // table data
    td.innerText = texto;
    return td;
}


function linhaClicada( event ) {
    const td = event.target;
    const tr = td.parentElement;
    console.log( tr );
    // const id = tr.firstChild.innerText;
    const id = tr.dataset.id;
    console.log( id );

    tr.classList.toggle( 'marcado' );
}


export function remover( event ) {
    const tr = document.querySelector( '.marcado' );
    if ( ! tr ) {
        alert( 'Por favor, seleciona uma linha.' );
        return;
    }

    // OPCIONAL
    if ( ! confirm( 'Deseja mesmo remover ?' ) ) {
        return;
    }

    // const id = tr.firstChild.innerText;
    const id = tr.dataset.id;
    removeContaPeloId( id );

    tr.remove();
}

function removeContaPeloId( id ) {
    const contas = carregarContas();
    let indice = -1;
    for ( const i in contas ) {
        const c = contas[ i ];
        if ( c.id == id ) {
            indice = i;
            break;
        }
    }
    if ( indice < 0 ) {
        return; // Não encontrou
    }
    contas.splice( indice, 1 );
    // Salvo novamente
    salvarContas( contas );
}