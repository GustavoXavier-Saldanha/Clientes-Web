export class Dado {

    #numeroLados = 0;

    constructor( numeroLados = 6 ) {
        // TODO: validar
        this.#numeroLados = numeroLados;
    }

    get numeroLados() {
        return this.#numeroLados;
    }

    jogar() {
        return randomInt( 1, this.numeroLados );
    }
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const dado = new Dado();
// console.log( dado.jogar() );