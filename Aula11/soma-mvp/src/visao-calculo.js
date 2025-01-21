import { ControladoraCalculo } from "../controladora-calculo.js";

export class VisaoCalculo {

    controladora = null;

    constructor() {
        // A visão se passa pra ser controlada
        this.controladora = new ControladoraCalculo( this );
    }

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

    iniciar() {
        document.getElementById( 'calcular' ).onclick = event => {
            event.preventDefault();
            this.controladora.calcular();
        };
    }
}