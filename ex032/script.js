function Pessoa (nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}

const p1 = new Pessoa ('Julio', 'Cesar');
const p2 = new Pessoa ('Luiz', 'Otávio');

console.log(p1.metodo);
console.log(p2.metodo);