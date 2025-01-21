// concatenar quantos arrays forem passados

function concatenarArrays( ...arrays ) {
    const novo = [];
    for ( const atual of arrays ) {
        novo.push( ...atual );
        // novo = [ ...novo, ...atual ];
    }
    return novo;
}

console.log(
    concatenarArrays(
        [ 1, 2, 3 ],
        [ 4, 5, 6 ],
        [ 7, 8, 9 ]
    )
)