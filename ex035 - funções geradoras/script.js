function* geradora1() {
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

const g1 = geradora1();

function* geradora2() {
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}


function* geradora3() {
    yield* geradora2();
    yield 'valor 4';
    yield 'valor 5';
    yield 'valor 6';
}

const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
