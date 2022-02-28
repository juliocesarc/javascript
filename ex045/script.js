// 705.484.450-52  070.987.720-03
/*

7x  0x  5x  4x  8x  4x  4x  5x  0x
10  9   8   7   6   5   4   3   2
70  0   40  28  48  20  16  15  0 = 237

11 - (237 % 11) = 5 (Primeiro Dígito)


7x  0x  5x  4x  8x  4x  4x  5x  0x 5x
11  10  9   8   7   6   5   4   3  2
77  0   45  32  56  24  20  20  0  10 = 284

11 - (284 % 11) = 2 (Segundo Dígito)

*/ 

function ValidaCPF(cpfEnviado) {
   Object.defineProperty(this, 'cpfLimpo', {
       enumerable: true,
       get: function() {
           return cpfEnviado.replace(/\D+/g, '');
       }
   })
}

ValidaCPF.prototype.valida = function() {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito();
    
    return true;
};

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    console.log(cpfArray);
};

const cpf = new ValidaCPF('705.484.450-52');
console.log(cpf.valida());
//cpf.valida();