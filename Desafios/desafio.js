const users = [
  {
    nome: 'Danilo Sousa',
    idade: 28,
    cargo: 'Estudante',
  },
  {
    nome: 'Paulo Dantas',
    idade: 25,
    cargo: 'Professor',
  },
  {
    nome: 'Julio Bastos',
    idade: 15,
    cargo: 'Jogador',
  },
  {
    nome: 'Samira Close',
    idade: 29,
    cargo: 'Stream',
  },
  {
    nome: 'Ronaldinho Gaúcho',
    idade: 39,
    cargo: 'Ex Jogador',
  },
]

let swapUser = null

function orderUsers(nome, idade, cargo) {
  for (let i = 0; i < users.length; i++) {
    let swapIndex = i
    let youngerAge = users[i].idade
    for (let j = i; j < users.length; j++) {
      if (users[j].idade < youngerAge) {
        youngerAge = users[j].idade
        swapIndex = j
      }
    }
    swapUser = users[i]
    users[i] = users[swapIndex]
    users[swapIndex] = swapUser
  }
  console.log(users)
}

orderUsers()
