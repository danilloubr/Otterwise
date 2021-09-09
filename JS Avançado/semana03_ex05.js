/*2 - Dado um array de números ordene eles de forma decrescente.
Exemplo entrada:
[ 12, 32, 54, 6, 8, 89, 64, 64, 6 ]

Exemplo saída:
[ 89, 64, 64, 54, 32, 12, 8, 6, 6 ] */

const entrada = [12, 32, 54, 6, 8, 89, 64, 64, 6]

const saida = entrada.sort((a, b) => a < b)
console.log(saida)

const saida2 = entrada.sort((a, b) => a > b)
console.log(saida2)
