const contato1 = { nome: 'Camila', email: 'camila@site.com' };

const { nome } = contato1;
console.log( nome );

const servico1 = { valor: 100, descricao: 'Pintura de Teto' };
const servico2 = { ...servico1, descricao: 'Pintura de Parede' };
console.log( servico2 );