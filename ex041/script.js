function Produto(valor, preco, estoque) {
    this.valor = valor;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                console.log('!!!ERRO!!!');
                return;
            }
            estoquePrivado = valor; 
        }
    });
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 'opa bão?';
console.log(p1.estoque);
