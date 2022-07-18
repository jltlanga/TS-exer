/*
● Exercício 2:
Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno.
Considerar que a média é
ponderada e que o peso das notas é: 2,3 e 5.
*/
"use strict";
let n1 = 2;
let n2 = 10;
let n3 = 10;
let peso1 = 2;
let peso2 = 3;
let peso3 = 5;
function mediaAluno(n1: number, n2: number, n3: number, peso1: number, peso2: number, peso3: number){
    return ((n1 * peso1) + (n2 * peso2) + (n3 * peso3))/(peso1 + peso2 + peso3);
}

let mediaFinal = mediaAluno(n1, n2, n3, peso1, peso2, peso3);
document.write(`Média Final dos alunos é: ${mediaFinal}`);