function Produto(valor, preco, estoque) {
    this.valor = valor;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: true,
    });
}

const p1 = new Produto('Camisa', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}