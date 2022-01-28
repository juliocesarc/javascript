const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numeros2 = numeros.filter(valor => valor > 10);
//console.log(numeros2);

const pessoas = [
    {nome: 'Maria', idade: 35 },
    {nome: 'João', idade: 27 },
    {nome: 'Carlos', idade: 31 },
    {nome: 'Cleiton', idade: 15 },
    {nome: 'Janaina', idade: 18 },
    {nome: 'Marcos', idade: 21 },
];

const pessoasFiltrado = pessoas.filter(valor => valor.nome.length >= 6);
const pessoasIdadeFiltrado = pessoas.filter(valor => valor.idade >= 30);
const pessoasComA = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(pessoasComA);