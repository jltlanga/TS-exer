/*● Exercício 4:
Escreva um algoritmo que leia uma lista de números inteiros e mostre o maior deles.*/
"use strict";
let qnt = 20;
function nPrimos(qnt) {
    let numero = new Array();
    for (let i = 0; i < qnt; i++) {
        if (isPrime(i)) {
            numero.push(i);
        }
    }
    return numero;
}
function isPrime(qnt) {
    for (let i = 2; i < qnt; i++) {
        if (qnt % i === 0) {
            return false;
        }
        else {
            return qnt > 1;
        }
        ;
    }
}
document.write(`Os n°s primos são: ${nPrimos(qnt)}`);
