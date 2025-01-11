import { Dado } from "./dado.js";

export class DadoComMemoria extends Dado {

    #memoria = [];
    #limiteJogadas = 0;

    constructor( numeroLados = 6, limiteJogadas = 5 ) {
        super( numeroLados );
        // TODO: validar
        this.#limiteJogadas = limiteJogadas;
    }

    jogar() {
        const valor = super.jogar();
        if ( this.#memoria.length == this.#limiteJogadas ) {
            this.#memoria.shift(); // Remove o elemento inicial
        }
        this.#memoria.push( valor );
        return valor;
    }

    get limiteJogadas() {
        return this.#limiteJogadas;
    }

    get memoria() {
        // structuredClone evita que o desenvolvedor
        // consiga acessar o array original, para modificação
        // (pois retornaremos um clone do original)
        return structuredClone( this.#memoria );
    }
}
const max = 3;
const dado = new DadoComMemoria( 6, max );
let i = 0;
do {
    console.log( `Gerou: ${dado.jogar()}` );
    console.log( dado.memoria );
} while ( i++ < max );