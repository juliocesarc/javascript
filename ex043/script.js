// Abre Produtos ##########################

function Produtos(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produtos.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produtos.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

// Fecha Produtos ##########################

// Abre Camiseta ##########################

function Camiseta(nome, preco, cor) {
    Produtos.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produtos.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

// Fecha Camiseta ##########################

// Abre Caneca ##########################

function Caneca(nome, preco, material, estoque) {
    Produtos.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        consfigurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}
Caneca.prototype = Object.create(Produtos.prototype);
Caneca.prototype.constructor = Caneca;
// Fecha Caneca ##########################


const produto = new Produtos('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Joana', 20, 'Ceramica', 30);
caneca.estoque = '100';
console.log(caneca);
console.log(caneca.estoque);
//console.log(produto)
//console.log(camiseta);