// Desafio JS Avançado e Moderno - 02

const installments = [
  { installment_number: 1, value: 123.45, status: 'Pago' },
  { installment_number: 2, value: 139.88, status: 'Pago' },
  { installment_number: 3, value: 123.45, status: 'Pago' },
  { installment_number: 4, value: 182.37, status: 'Aberto' },
  { installment_number: 5, value: 133.93, status: 'Aberto' },
]

/*a) Imprima no console o valor total das parcelas.*/

const total = installments.reduce((acc, item) => {
  return acc + item.value
}, 0)
console.log(total.toFixed(2))

/*b) Crie e imprima no console um objeto que possui o valor total em aberto e o
valor total ja pago.
Saída esperada: { total_paid: 386.78, total_open: 316.3}.*/

const totalPagos = installments
  .filter(elem => {
    return elem.status === 'Pago'
  })
  .reduce((a, b) => {
    return a + b.value
  }, 0)

// console.log(totalPagos)

const totalAberto = installments
  .filter(elem => {
    return elem.status === 'Aberto'
  })
  .reduce((a, b) => {
    return a + b.value
  }, 0)

// console.log(totalAberto)
console.log(`{ total_paid: ${totalPagos}, total_open: ${totalAberto}}`)

/*c) Imprima no console o array de parcelas ordenado de forma decrescente.*/

const imprime = installments.sort((a, b) => b.value - a.value)

console.table(imprime)

/* Imprima no console o array de parcelas ordenado por valor de forma crescente e, em caso
de empate, o desempate deve ocorrer pelo numero da parcela de forma decrescente.*/

const imprime2 = installments.sort((a, b) => a.value - b.value)
function mudancaArray(installments, from, to) {
  installments.splice(to, 0, installments.splice(from, 1)[0])
  return installments
}

mudancaArray(installments, 1, 0)

console.table(imprime2)
