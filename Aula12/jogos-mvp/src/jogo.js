export class Jogo {

    constructor(
        nome,
        anoLancamento,
        desenvolvedora,
        nota
    ) {
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.desenvolvedora = desenvolvedora;
        this.nota = nota;
    }

    validar() {
        // TODO: acrescentar validação
        return []; // Retorna os problemas
    }
}