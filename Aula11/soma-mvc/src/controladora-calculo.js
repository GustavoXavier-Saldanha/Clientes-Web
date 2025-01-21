import { VisaoCalculo } from "./visao-calculo.js";
import { Calculadora } from "./calculadora.js";

export class ControladoraCalculo {

    visao = null;

    iniciar() {
        this.visao = new VisaoCalculo();
        this.visao.aoCalcular( this.calcular.bind( this ) );
        // this.visao.aoCalcular( this.calcular2 );
    }

    calcular() {
        const calculadora = new Calculadora();
        const n1 = this.visao.numero1();
        const n2 = this.visao.numero2();
        const resultado = calculadora.multiplicar( n1, n2 );
        this.visao.exibirResultado( resultado );
    }


    // calcular2 = () => {
    //     const calculadora = new Calculadora();
    //     const n1 = this.visao.numero1();
    //     const n2 = this.visao.numero2();
    //     const resultado = calculadora.multiplicar( n1, n2 );
    //     this.visao.exibirResultado( resultado );
    // }

}