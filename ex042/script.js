/*const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
const objC = {
    chaveB: 'C'
};
Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
console.log(objC.chaveA);
*/

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
     this.preco = this.preco - (this.preco * (percentual / 100));
};

const p2 = {
    nome: 'caneca',
    preco: 50
};

Object.setPrototypeOf(p2, Produto.prototype);

const p1 = new Produto('camisa', 20);
p2.desconto(25);
p1.desconto(50);
console.log(p1);
console.log(p2);


