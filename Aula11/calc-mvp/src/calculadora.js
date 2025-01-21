export class Calculadora { // Model

    calcular( n1, n2, operacao ) {
        switch ( operacao ) {
            case '+': return n1 + n2;
            case '-': return n1 - n2;
            case '*': return n1 * n2;
            case '/': {
                if ( n2 == 0 ) {
                    throw new Error( 'Divisão por zero não permitida.' );
                }
                return n1 / n2;
            }
            default : throw new Error( 'Operação não suportada.' );
        }
    }
}