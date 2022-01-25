//               01234567
let umaString = "um texto";

console.log(umaString[3]);

/* posso colocar [numero dentro] caso coloque um número sem uma letra, irá me retornar undefined
   posso colocar .charAt(numero dentro) caso coloque um número sem uma letra, irá me retornar vazio NADA */

console.log(umaString.indexOf('o', 3));

/* posso colocar .indexOf('letra, ou palavra') e ele vai achar para mim o número representante de início,
   posso colocar também um número que represente a apartir, então ele fará a busca a partir da quele número.
   
   Se eu colocar .lastindexOf ele buscará de trás para frente*/

console.log(umaString.lastIndexOf('t', 5));

/* posso colocar também .replace('substitui palavra atual', 'por outra') */

console.log(umaString.replace('um', 'outro'));

/* para saber o tamanho de uma string colocamos .length */

console.log(umaString.length);

/* fatiamento */

console.log(umaString.slice(-5, -1));

/* dividir */

console.log(umaString.split(' '))

/* 
   para deixar tudo em maiúsculo .toUpperCase()
   para deixar tudo em maiúsculo .toLowerCase() 
*/
