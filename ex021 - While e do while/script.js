/**let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}
**/

/**const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of array) {
    console.log(numero);
    if (numero === 2){continue}
}
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

do{
    let numero = numeros[i];
    console.log(numero);
    i++
}while(i < numeros.length);