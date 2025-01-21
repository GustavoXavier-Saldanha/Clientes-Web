const contato1 = {
    nome: 'Maria',
    telefone: {
        ddd: '22',
        numero: '99999999'
    }
};

const nome = 'Igor';

// const contato2 = { nome: nome };
const contato2 = { nome, idade: 20 };

console.table( contato2 );