//                 -5         -4        -3         -2            -1
//                  1          2         3          4             5
const nomes = ['Eduardo', 'Joanito', 'Cleiton', 'Janaina', 'Piriri-pororo'];
const removido = nomes.splice(3, 2, 'Luiz', 'Otávio');
console.log(nomes, removido);