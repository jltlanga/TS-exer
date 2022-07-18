/*
● Exercício 4:
Escreva um algoritmo que leia uma lista de números inteiros e mostre o maior deles.*/
"use strict";
let vetor = [1, 4, 5, 6, 9, 1948, 11, 90, 13, 70, 16, 17, 18, 50, 20, 21, 22];
let numMaior = acharMaiorNum(...vetor);
document.write(`o Maior número é: ${numMaior}`);
function acharMaiorNum(...numero) {
    let numMaior = numero[0];
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] > numMaior) {
            numMaior = numero[i];
        }
    }
    return numMaior;
}
