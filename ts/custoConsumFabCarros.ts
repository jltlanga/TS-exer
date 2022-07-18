/*● Exercício 1:O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja
de 28% e os impostos de 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor. */
"use strict";

let custoDaFabrica = 5000;
const custoDistribuidor = 0.28;
const imposto = 0.45;


function baseDeCalculo (custoDaFabrica: number, custoDistribuidor: number, imposto: number){
    let soma = custoDaFabrica + custoDaFabrica*custoDistribuidor + custoDaFabrica*imposto;
    return soma;
}
let CustoConsumidor = baseDeCalculo(custoDaFabrica,custoDistribuidor,imposto);
document.write(`Custo do consumidor: ${CustoConsumidor}<br/>`);
