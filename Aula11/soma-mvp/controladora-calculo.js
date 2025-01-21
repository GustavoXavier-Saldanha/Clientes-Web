import { Calculadora } from "../calc-mvp/src/calculadora.js";

export class ControladoraCalculo {

    visao = null;

    constructor( visao ) {
        this.visao = visao;
    }

    calcular() {
        const calculadora = new Calculadora();
        const n1 = this.visao.numero1();
        const n2 = this.visao.numero2();
        const resultado = calculadora.multiplicar( n1, n2 );
        this.visao.exibirResultado( resultado );
    }

}