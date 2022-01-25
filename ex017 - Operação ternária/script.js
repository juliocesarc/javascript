const pontuacaoUsuario = 1000;

if (pontuacaoUsuario >= 1000) {
    console.log('Você é um usuário VIP');
} else {
    console.log('Você é um usuário normal');
}
/**-------------------------------------------------- */

// Com a operação ternária fica assim :

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Você é um usuário VIP' : 'Você é um usuário normal';
console.log(nivelUsuario);