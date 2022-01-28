const pessoas = [
    {nome: 'Maria', idade: 35 },
    {nome: 'João', idade: 27 },
    {nome: 'Carlos', idade: 31 },
    {nome: 'Cleiton', idade: 15 },
    {nome: 'Janaina', idade: 18 },
    {nome: 'Marcos', idade: 21 },
];

const pessoasArray = pessoas.map(valor => valor.nome);
const soIdade = pessoas.map(valor => ({ idade: valor.idade }));
const comId = pessoas.map((valor, indice) => ({id: indice, ...valor}));
//console.log(comId);




const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeros2 = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0)acumulador.push(valor);
    return acumulador;
}, []);
//console.log(numeros2);



const people = [
    {nome: 'Cleiton', idade: 15 },
    {nome: 'Janaina', idade: 18 },
    {nome: 'Marcos', idade: 21 },
    {nome: 'Maria', idade: 35 },
    {nome: 'João', idade: 27 },
    {nome: 'Carlos', idade: 31 },
];

const peopleOld = people.reduce((acumulador, valor, indice) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});
//console.log(peopleOld);