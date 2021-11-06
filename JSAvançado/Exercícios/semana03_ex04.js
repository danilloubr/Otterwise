const colaboradores = [
  { nome: 'Juca', idade: 25, cargo: 'front-end' },
  { nome: 'Marcia', idade: 23, cargo: 'back-end' },
  { nome: 'Vitoria', idade: 28, cargo: 'designer' },
  { nome: 'Fernando', idade: 19, cargo: 'estagiário' },
  { nome: 'Fabiane', idade: 25, cargo: 'back-end' },
  { nome: 'Jessica', idade: 23, cargo: 'front-end' },
]
console.log(colaboradores)

// Exercício 04 - letra a)
const arrayLetraA = colaboradores.filter(elem => {
  return console.log(`nome: ${elem.nome}`)
})

// Exercício 04 - letra b)
const arrayLetraB = colaboradores.filter(elem => elem.cargo === 'front-end')

console.log(arrayLetraB)

// Exercício 04 - letra c)
const arrayLetraC = colaboradores.find(elem => elem.idade > 23)

console.log(arrayLetraC)
// Exercício 04 - letra d)

const arrayLetraD = colaboradores.filter(elem => elem.idade > 18)

console.log(arrayLetraD)

// Exercício 04 - letra e)

const arrayLetraE = colaboradores.find(elem => elem.cargo === 'estagiário')

console.log(arrayLetraE)

// Exercício 04 - letra f)

const arrayLetraF = colaboradores.reduce((acc, elem) => {
  return acc + elem.idade
}, 0)

console.log(arrayLetraF)

// Exercício 04 - letra g)

const arrayLetraG = colaboradores.sort((a, b) => {
  return a.idade > b.idade
})

console.table(arrayLetraG)

// teste

const arrayLetraH = colaboradores.sort((a, b) => {
  return a.cargo > b.cargo
})

console.table(arrayLetraH)
