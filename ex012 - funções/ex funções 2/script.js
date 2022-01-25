const valorX = Number(prompt('digíte um número'));
const valorY = Number(prompt('digíte outro número'));
const UmNumero = document.getElementById('operacao');

function soma(x, y){
    resultado = x + y;
    return resultado;
}
soma(valorX, valorY);

UmNumero.innerHTML = soma(valorX, valorY);