import { PessoaError } from "./pessoa-error.js";

const NOME_MIN = 2;
const NOME_MAX = 100;

/**
 * @author Thiago
 * @see https://exemplo.com
 */
export class Pessoa {

    #nome = '';
    #cpf = '';

    /**
     * Crie uma pessoa.
     *
     * @param {string} nome
     * @param {string} cpf
     */
    constructor( nome = '', cpf = '' ) {
        this.nome = nome;
        this.cpf = cpf;
    }

    get nome() { return this.#nome }

    /**
     * Define o nome da pessoa.
     *
     * @param {string} valor Valor a ser atribuído.
     * @throws {PessoaError}
     */
    set nome( valor ) {
        if ( valor.length < NOME_MIN || valor.length > NOME_MAX ) {
            throw new PessoaError(
                `Nome deve ter entre ${NOME_MIN} e ${NOME_MAX} caracteres.` );
        }
        this.#nome = valor;
    }

    get cpf() { return this.#cpf; }

    set cpf( valor ) {
        this.#cpf = this.#retirarNaoNumericos( valor );
    }

    #retirarNaoNumericos( valor ) {
        const caracteres = [];
        const len = valor.length;
        for ( let i = 0; i < len; i++ ) {
            if ( isNaN( valor[ i ] ) ) {
                continue;
            }
            caracteres.push( valor[ i ] );
        }
        return caracteres.join( '' ) ;
    }

}

const p = new Pessoa( 'Ana', '123.456.789-10' );
console.log( p.nome, p.cpf );

p.nome = 'A';
