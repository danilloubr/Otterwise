// Desafio JS Avançado e Moderno - 01

const colaboradores = [
  { nome: 'Juca', idade: 25, cargo: 'front-end' },
  { nome: 'Marcia', idade: 23, cargo: 'back-end' },
  { nome: 'Vitoria', idade: 28, cargo: 'designer' },
  { nome: 'Fernando', idade: 19, cargo: 'estagiário' },
  { nome: 'Fabiane', idade: 25, cargo: 'back-end' },
  { nome: 'Jessica', idade: 23, cargo: 'front-end' },
]

/* Letra a) 
Crie e imprima um objeto que possui a quantidade de colaboradores
em cada cargo.

Saída esperada:
{"front-end":2, "back-end":2, "designer":1, "estagiário": 1}.*/

const quantidadeCargos = colaboradores.reduce(function (a, b) {
  if (b.cargo in a) {
    a[b.cargo]++
  } else {
    a[b.cargo] = 1
  }
  return a
}, {})

console.log(quantidadeCargos)

/* Letra b)
Imprima no console o array colaboradores ordenado por idade de forma decrescente.*/

const imprime = colaboradores.sort((a, b) => b.idade - a.idade)

console.table(imprime)

/* Letra c)
Imprima no console o array de colaboradores ordenado por cargo, sendo a ordem: 
Estagiário (1º), front-end (2º), back-end (3º), design (4º).*/

function mudancaArray(colaboradores, from, to) {
  colaboradores.splice(to, 0, colaboradores.splice(from, 1)[0])
  return colaboradores
}

mudancaArray(colaboradores, 5, 0)
mudancaArray(colaboradores, 2, 1)
mudancaArray(colaboradores, 5, 2)
mudancaArray(colaboradores, 3, 5)

console.table(colaboradores)

/* Letra d)
Imprima no console o array de colaboradores ordenado por idade de forma
crescente e, em caso de empate, o desempate deve ser feito por ordem de cargo: 
Estagiário (1º), front-end (2º), back-end (3º), design (4º).*/

const imprime2 = colaboradores.sort((a, b) => a.idade - b.idade)

console.table(imprime2)
