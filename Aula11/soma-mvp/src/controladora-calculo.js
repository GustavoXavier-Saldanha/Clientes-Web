import { Calculadora } from "./calculadora.js";

export class ControladoraCalculo {

    visao = null;

    constructor( visao ) {
        this.visao = visao;
    }

    calcular() {
        const calculadora = new Calculadora();
        const n1 = this.visao.numero1();
        const n2 = this.visao.numero2();
        const op = this.visao.operacao();
        try {
            const resultado = calculadora.calcular( n1, n2, op );
            this.visao.exibirResultado( resultado );
        } catch ( err ) {
            this.visao.exibirResultado( err.message );
        }
    }

}