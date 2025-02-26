/* Faça um programa para calcular o valor de uma viagem 

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combuntível do carro por KM;
3 - Distância em KM da viagem;


*/
let precoCombustivel = 5.79;
const consumoKmPorLitro = 12;
const distanciaEmKm = 1580;

const listrosConsumidos = distanciaEmKm / consumoKmPorLitro;
const valorGasto = listrosConsumidos * precoCombustivel; 

console.log(valorGasto.toFixed(2));
