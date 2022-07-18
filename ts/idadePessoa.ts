/*
● Exercício 3:
Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
mostre-a expressa apenas em dias.

*/
'use strict';
let anos = 10;
let mes = 9;
let dias = 20;

function convertIdade(anos: number, mes: number, idade: number){
    return (anos*365 + mes*30 + dias);

}
let idadeEmDias = convertIdade(anos, mes, dias);
document.write(`A pessoa tem ${idadeEmDias} dias de idade`);