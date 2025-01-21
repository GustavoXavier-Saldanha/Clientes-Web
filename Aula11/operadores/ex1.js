// concatenar dois arrays

function concatenarArrays( arr1, arr2 ) {
    return [ ...arr1, ...arr2 ];
}

console.log(
    concatenarArrays(
        [ 1, 2, 3 ],
        [ 4, 5, 6 ]
    )
)