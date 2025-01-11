// EXERCÍCIO
// Modifique o exercício 5 de forma a criar carros de
// corrida, com tempo de 0 a 100 aleatórias.
// Os carros devem ser colocados para correr.
// Aquele que for o mais rápido, ou seja, que tiver
// a menor tempo de 0 a 100 deve vencer.
// Ao vencer, o nome do carro deve ser impresso, além
// de seu tempo. Exemplo:
// "Venceu a Ferrari Acme com tempo de 0 a 100 em 2 segundos"

function randomInt( min, max ) {
    return min + Math.trunc( Math.random() * ((max-min) + 1) );
}

function carro( nome ) {
    const milissegundos = randomInt( 1, 10 ) * 1000;
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            resolve( { nome: nome, tempo: milissegundos } ); // Cumpre após o tempo
        }, milissegundos );
    } );
}

const maisRapido = Promise.race( [
    carro( 'Bugatti X' ),
    carro( 'Ferrari Y' ),
    carro( 'Lotus Z' ),
    carro( 'Mercedes W' )
] );
maisRapido.then( obj => console.log(
    `Venceu a ${obj.nome} com tempo de 0 a 100 em ${obj.tempo / 1000} segundos`))