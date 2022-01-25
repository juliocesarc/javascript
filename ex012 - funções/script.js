const SeuNome = document.getElementById('meu-nome');
const valor = prompt('Digíte seu nome aqui por favor');
SeuNome.innerHTML += ' ';
function saudacoes(nome){
    SeuNome.innerHTML = valor;
}

saudacoes(valor);