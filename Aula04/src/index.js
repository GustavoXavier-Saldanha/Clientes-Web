import { adicionar, carregarContas, desenharContas, remover } from "./contas.js";

document.addEventListener( 'DOMContentLoaded', iniciar );

function iniciar() {
    document.getElementsByTagName( 'button' ).item( 0 ).addEventListener( 'click', adicionar );
    document.getElementById( 'remover' ).addEventListener( 'click', remover );

    desenharContas( carregarContas() );
}