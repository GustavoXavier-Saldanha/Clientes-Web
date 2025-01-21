const contato1 = {
    nome: 'Maria',
    telefone: {
        ddd: '22',
        numero: '99999999'
    }
};

// const contato2 = { ...contato1, nome: 'Joana' };
// contato2.telefone.numero = '88888888';

const contato3 = structuredClone( contato1 );
contato3.nome = 'Alice';
contato3.telefone.numero = '77777777';

console.log( contato1.nome, contato1.telefone.numero );
// console.log( contato2.nome, contato2.telefone.numero );
console.log( contato3.nome, contato3.telefone.numero );