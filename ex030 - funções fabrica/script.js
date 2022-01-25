function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        //agora com get não preciso usar os parenteses no método imc
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Julio', 'César', 1.72, 60);
p1.nomeCompleto = 'Maria Joaquina Fernandes';
/*const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 45);
*/console.log(p1, p1.imc);
/*console.log(p2, p2.imc);
*/

