export class VisaoCalculo {

    // Entradas

    numero1() {
        return Number(
            document.getElementById( 'n1' ).value
        );
    }

    numero2() {
        return Number(
            document.getElementById( 'n2' ).value
        );
    }

    // Saída

    exibirResultado( resultado ) {
        document.getElementById( 'resultado' ).value =
            resultado.toString();
    }

    // Eventos

    aoCalcular( funcao ) {
        document.getElementById( 'calcular' ).onclick = event => {
            event.preventDefault();
            funcao();
        };
    }
}