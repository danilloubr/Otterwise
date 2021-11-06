const user = {
  name: 'Marília',
  age: 26,
  job: 'Dev',
}

console.log('O valor da propriedade name é ' + user.name)
console.log('O valor da propriedade age é ' + user.age)
console.log('O valor da propriedade job é ' + user.job)

const users = [
  {
    name: 'Marília',
    age: 26,
    job: 'Dev',
  },
  {
    name: 'Juca',
    age: 21,
    job: 'RH',
  },
  {
    name: 'Flávia',
    age: 30,
    job: 'Financeiro',
  },
  {
    name: 'Sérgio',
    age: 24,
    job: 'Dev',
  },
]

const arrayDevs = []

for (let i = 0; i < users.length; ++i) {
  arrayDevs.push(
    `${users[i].name} ${users[i].job === 'Dev' ? 'é Dev' : 'não é Dev'}`
  )
}

console.log(arrayDevs.join(', '))
