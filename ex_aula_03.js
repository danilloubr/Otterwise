const myUser = {
  name: 'Danilo',
  age: 28,
  email: 'danillou@hotmail.com',
}

console.log(myUser)

let array = ['a', 'b', 'c', 'd']

console.log(array[2])

dev = {
  name: 'Juca',
  projects: [
    {
      name: 'Projeto 1',
      start: '01/02/2021',
    },
    {
      name: 'Projeto 2',
      start: '03/03/2021',
    },
  ],
}

console.log(dev.name)
console.log(dev.projects[1])
console.log(dev.projects[0].name)

const array2 = [1, -22, 3, 4, -5]

for (let i = 0; i < 4; i++) {
  array2[i] = array2[i] * 10
}

console.log(array2)
