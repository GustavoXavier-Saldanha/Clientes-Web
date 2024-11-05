let x;
console.log( x ); // undefined


function func( x ) { // undefined
    console.log( x );
}

func();

function func2() {
    return;
}

console.log( func2() );